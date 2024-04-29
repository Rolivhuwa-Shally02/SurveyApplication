import React, { useState } from "react";

const FoodSelector = ({ onData }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleCheckboxChange = (e) => {
    setSelectedOption(e.target.value);
    onData("favoritefood", e.target.value);
  };

  return (
    <div class="btn-group">
      <label>
        <input
          type="checkbox"
          value="pizza"
          checked={selectedOption === "pizza"}
          onChange={handleCheckboxChange}
        />
        Pizza
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="pasta"
          checked={selectedOption === "pasta"}
          onChange={handleCheckboxChange}
        />
        Pasta
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="papAndWors"
          checked={selectedOption === "papAndWors"}
          onChange={handleCheckboxChange}
        />
        Pap and Wors
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          value="other"
          checked={selectedOption === "other"}
          onChange={handleCheckboxChange}
        />
        Other
      </label>
      {selectedOption === "other" && (
        <input type="text" placeholder="Enter your option" />
      )}
    </div>
  );
};

export default FoodSelector;
