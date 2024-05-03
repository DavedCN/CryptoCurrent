// DropDown.jsx
import { useState, useCallback } from "react";

const DropDown = ({ days, setDays, className }) => {
  const handleDaysChange = useCallback((e) => {
    setDays(parseInt(e.target.value));
  }, []);

  return (
    <div className={className}>
      Prices Change in :{" "}
      <select value={days} onChange={handleDaysChange}>
        <option value={30}>30 days</option>
        <option value={90}>90 days</option>
        <option value={180}>180 days</option>
        <option value={365}>365 days</option>
      </select>
    </div>
  );
};

export default DropDown;
