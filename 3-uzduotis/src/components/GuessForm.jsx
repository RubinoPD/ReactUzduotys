import React, { useState } from "react";

const GuessForm = ({ handleGuess }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const userGuess = parseInt(inputValue, 10);
    if (!isNaN(userGuess)) {
      handleGuess(userGuess);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Įveskite skaičių"
      />
      <button type="submit">Spėti</button>
    </form>
  );
};

export default GuessForm;
