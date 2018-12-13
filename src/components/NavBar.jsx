import React from "react";
import { NavLink } from "react-router-dom";
import SearchBox from "./commons/searchBox";
const NavBar = ({ user, searchQuery, handleSearch }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div style={{ display: "flex", flexdirection: "row" }}>
        <NavLink className="navbar-brand" to="/campgrounds">
          YelpCamp
        </NavLink>
        <SearchBox value={searchQuery} onChange={handleSearch} />
      </div>
      <div className="my-2 my-md-0 mr-md-3">
        {!user && (
          <React.Fragment>
            <NavLink className="p-2 text-dark mr-2" name="login" to="/login">
              Login
            </NavLink>
            <NavLink
              className="p-2 text-dark mr-2"
              name="register"
              to="/register"
            >
              Register
            </NavLink>
          </React.Fragment>
        )}
        {user && (
          <React.Fragment>
            <NavLink className="p-2 mr-2" to="/profile">
              {user.name}
            </NavLink>
            <NavLink className="p-2" to="/logout">
              Logout
            </NavLink>
          </React.Fragment>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
