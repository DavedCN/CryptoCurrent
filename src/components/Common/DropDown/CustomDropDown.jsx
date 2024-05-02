import React, { useState, useEffect } from "react";
import { fetchCoins } from "../../../functions/dashboarddata";

const CustomDropdown = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCoins();

        setOptions(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [selectedOption]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <select
      className="custom"
      value={selectedOption}
      onChange={handleOptionChange}
    >
      <option value="">Select</option>
      {options.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default CustomDropdown;
