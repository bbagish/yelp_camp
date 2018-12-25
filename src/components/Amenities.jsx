import React from "react";
import Amenity from "./Amenity";

let list = [
  <Amenity name="car" description="Free parking on premises" />,
  <Amenity name="television" description="Cable TV" />,
  <Amenity name="wifi" description="Free Wifi" />,
  <Amenity name="bathtub" description="Spa" />
];

const isEven = n => n % 2 === 0;

const Amenities = () => {
  return (
    <div className="amenities mt-4 mb-2">
      <h5>Amenities</h5>
      <div className="row">
        {list.map((currElement, index) => {
          return (
            <React.Fragment key={index}>
              <div className="col-lg-3 col-md-6 col-sm-12">{currElement}</div>
              {isEven(index + 1) && <div className="w-100" />}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Amenities;
