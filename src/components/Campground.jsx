import React, { Component } from "react";
import { getCamp, deleteCamp } from "../services/campService";
import { Link } from "react-router-dom";
import Amenities from "./Amenities";
import Card from "./Card";
class Campground extends Component {
  state = {
    data: {
      name: "",
      price: "",
      image: "",
      description: ""
    },
    errors: {}
  };

  handleDelete = async () => {
    try {
      await deleteCamp(this.props.match.params.id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        console.log("This camp has already been deleted.");
      }
    }
    this.props.history.push("/campgrounds");
  };

  async populateCamp() {
    try {
      const campgroundID = this.props.match.params.id;
      const { data: campground } = await getCamp(campgroundID);
      this.setState({
        data: this.mapToViewModel(campground)
      });
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

  render() {
    const { name, price, image, description } = this.state.data;
    return (
      <Card>
        <img className="img-responsive card-img-top" src={image} alt={name} />
        <div className="card-body">
          <h5 className="pull-right">
            <span style={{ fontSize: "22px" }}>${price} </span>
            <span style={{ fontSize: "12px", fontWeight: 600 }}>per night</span>
          </h5>
          <span
            className="mt-1"
            style={{
              color: "rgb(78, 65, 38)",
              fontSize: "13px",
              fontWeight: 600
            }}
          >
            ENTIRE PLACE
          </span>
          <h1 className="card-title mb-0">{name}</h1>
          <span style={{ fontSize: "16px", fontWeight: 200 }}>
            <i className="fa fa-map-marker" aria-hidden="true" /> Biscayne Park
          </span>
          <div className="container">
            <Amenities />
          </div>
          <p className="card-text">{description}</p>
        </div>
        <div className="d-flex" style={{ justifyContent: "flex-end" }}>
          <Link
            className="btn btn-xs btn-warning"
            to={`/campgrounds/${this.props.match.params.id}`}
          >
            Edit
          </Link>
          <button
            onClick={this.handleDelete}
            className="btn btn-xs btn-danger ml-1"
          >
            Delete
          </button>
        </div>
      </Card>
    );
  }
}

export default Campground;
