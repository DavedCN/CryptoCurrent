import React, { useState, useEffect } from "react";
import { fetchCoins } from "../../../functions/dashboarddata";

const CustomDropdown = ({ setCoinID }) => {
  const [selectedOption, setSelectedOption] = useState("bitcoin"); // Set the default selected option to "bitcoin"
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
    setCoinID(event.target.value);
    setSelectedOption(event.target.value);
  };

  return (
    <select className="custom" value={selectedOption} onChange={handleOptionChange}>
      <option value="">{}</option>
      {options?.map((option) => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default CustomDropdown;