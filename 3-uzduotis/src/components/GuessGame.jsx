import React, { useState, useEffect } from "react";
import GuessForm from "./GuessForm";
import Message from "./Message";

const GuessGame = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  }, []);

  const handleGuess = (userGuess) => {
    setGuess(userGuess);
    setAttempts(attempts + 1);

    if (userGuess < randomNumber) {
      setMessage("Bandyk didesnį");
    } else if (userGuess > randomNumber) {
      setMessage("Bandyk mažesnį");
    } else {
      setMessage("Teisingai!");
    }
  };

  const resetGame = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
    setGuess("");
    setMessage("");
    setAttempts(0);
  };

  return (
    <div>
      <h1>Skaičių spėjimo žaidimas</h1>
      <GuessForm handleGuess={handleGuess} />
      <Message message={message} attempts={attempts} />
      {message === "Teisingai!" && (
        <button onClick={resetGame}>Žaisti dar kartą</button>
      )}
    </div>
  );
};

export default GuessGame;
