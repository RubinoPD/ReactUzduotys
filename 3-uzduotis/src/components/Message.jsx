import React from "react";

const Message = ({ message, attempts }) => {
  return (
    <div>
      <p>{message}</p>
      <p>Bandymų skaičius: {attempts}</p>
    </div>
  );
};

export default Message;
