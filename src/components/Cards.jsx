import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ id, image, name, price }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <Link
        to={`/campgrounds/${id}/show`}
        style={{ color: "black", outline: "none", textDecoration: "none" }}
      >
        <div
          className="card"
          style={{ borderStyle: "solid", borderColor: "transparent" }}
        >
          <img
            className="card-img-top"
            style={{ height: "150px" }}
            src={image}
            alt={name}
          />
          <span
            class="mt-1"
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
        </div>
      </Link>
    </div>
  );
};
export default Cards;
