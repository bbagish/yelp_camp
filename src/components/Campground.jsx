import React, { Component } from "react";
import { getCamp, deleteCamp } from "../services/campService";
import { Link } from "react-router-dom";
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
      <div className="row">
        <div className="col-md-12">
          <div
            className="card"
            style={{ borderStyle: "solid", borderColor: "transparent" }}
          >
            <img
              className="img-responsive card-img-top"
              src={image}
              alt={name}
            />
            <div className="card-body">
              <h5 className="pull-right">
                <span style={{ fontSize: "22px" }}>${price} </span>
                <span style={{ fontSize: "12px", fontWeight: 600 }}>
                  per night
                </span>
              </h5>

              <span
                class="mt-1"
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
                <i class="fa fa-map-marker" aria-hidden="true" /> Biscayne Park
              </span>
              <div class="container">
                <div className="amenities mt-5">
                  <div class="row justify-content-left">
                    <div class="col-6">
                      <h5>Amenities</h5>
                    </div>
                  </div>
                  <div class="row justify-content-left">
                    <div class="col-3">
                      <p>
                        <i class="fa fa-car" aria-hidden="true" /> Free parking
                        on premises
                      </p>
                      <p>
                        <i class="fa fa-television" aria-hidden="true" /> Cable
                        TV
                      </p>
                    </div>
                    <div class="col-3">
                      <p>
                        <i class="fa fa-wifi" aria-hidden="true" /> Wifi
                      </p>
                      <p>
                        <i class="fa fa-bath" aria-hidden="true" /> Pool
                      </p>
                    </div>
                  </div>
                </div>
                <p className="card-text mt-3">{description}</p>
              </div>
              <div
                className="d-flex mb-3 mr-3"
                style={{ justifyContent: "flex-end" }}
              >
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Campground;
