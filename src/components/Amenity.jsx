import React from "react";
import Icon from "./commons/Icon";
const Amenity = ({ name, description }) => {
  return (
    <p>
      <Icon icon={name} /> {description}
    </p>
  );
};

export default Amenity;
