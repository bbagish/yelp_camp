import React from "react";

const SearchBox = ({ value, onChange }) => {
  return (
    <form className="navbar-form" role="search">
      <div className="input-group">
        <input
          type="text"
          name="query"
          className="form-control"
          placeholder="Search..."
          value={value}
          onChange={e => onChange(e.currentTarget.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="button">
            <i className="fa fa-search fa-xs" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBox;
