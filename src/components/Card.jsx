import React from "react";

const Card = ({ children }) => {
  return (
    <div
      className="card"
      style={{ borderStyle: "solid", borderColor: "transparent" }}
    >
      {children}
    </div>
  );
};

export default Card;
