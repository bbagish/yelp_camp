import React from "react";

const FormCard = ({ children, label }) => {
  return (
    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto form-card">
      <div className="card card-signin my-5">
        <div className="card-body">
          <h5 className="card-title text-center">{label}</h5>
          {children}
        </div>
      </div>
    </div>
  );
};

export default FormCard;
