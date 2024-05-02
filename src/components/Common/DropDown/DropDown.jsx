// DropDown.jsx
import { useState } from "react";

const DropDown = ({ days, handleDaysChange, className }) => {
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
