import React from "react";
import Cards from "./Cards";
const Grid = ({ data }) => {
  return (
    <div className="row">
      {data.map(item => (
        <Cards
          key={item._id}
          id={item._id}
          name={item.name}
          image={item.image}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default Grid;
