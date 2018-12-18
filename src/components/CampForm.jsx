import React from "react";
import Joi from "joi-browser";
import Form from "./commons/Form";
import FormCard from "./commons/FormCard";
import { getCamp, saveCamp } from "../services/campService";

class CampForm extends Form {
  state = {
    data: {
      name: "",
      price: "",
      image: "",
      description: ""
    },
    errors: {}
  };

  schema = {
    _id: Joi.string(),
    name: Joi.string().required(),
    price: Joi.number()
      .required()
      .min(1)
      .max(100),
    image: Joi.string().required(),
    description: Joi.string().required()
  };

  async populateCamp() {
    try {
      const campgroundID = this.props.match.params.id;
      if (campgroundID === "new") return;
      const { data: campground } = await getCamp(campgroundID);
      this.setState({ data: this.mapToViewModel(campground) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }
  async componentDidMount() {
    await this.populateCamp();
  }

  mapToViewModel(campgrounds) {
    return {
      _id: campgrounds._id,
      name: campgrounds.name,
      price: campgrounds.price,
      image: campgrounds.image,
      description: campgrounds.description
    };
  }

  doSubmit = async () => {
    await saveCamp(this.state.data);
    this.props.history.push("/campgrounds");
  };

  render() {
    return (
      <FormCard label="Add New Camp">
        <form className="form-signin" onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Camp Name")}
          {this.renderInput("price", "Price")}
          {this.renderInput("image", "Image")}
          {this.renderInput("description", "Description")}
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Submit
          </button>
        </form>
      </FormCard>
    );
  }
}

export default CampForm;
