import React from "react";
import { Link } from "react-router-dom";

const Jumbotron = ({ user }) => {
  return (
    <header className="jumbotron">
      <div className="container">
        <h1>Welcome To YelpCamp</h1>
        <p>View our hand-picked campgrounds from all over the world.</p>
        {user && (
          <p>
            <Link to="/campgrounds/new" className="btn btn-primary btn-lg">
              Add New Campground
            </Link>
          </p>
        )}
      </div>
    </header>
  );
};

export default Jumbotron;
