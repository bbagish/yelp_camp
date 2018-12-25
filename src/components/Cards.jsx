import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

const Cards = ({ id, image, name, price }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4 camp">
      <Link
        className={name}
        to={`/campgrounds/${id}/show`}
        style={{ color: "black", outline: "none", textDecoration: "none" }}
      >
        <Card>
          <img
            className="card-img-top"
            style={{ height: "150px" }}
            src={image}
            alt={name}
          />
          <span
            className="mt-1"
            style={{ color: "rgb(78, 65, 38)", fontSize: "12px" }}
          >
            ENTIRE PLACE
          </span>
          <div className="">
            <h6 className="mb-0">{name}</h6>
            <p style={{ fontSize: "13px", color: "rgb(72, 72, 72)" }}>
              ${price} per night · Free cancellation
            </p>
          </div>
        </Card>
      </Link>
    </div>
  );
};
export default Cards;
