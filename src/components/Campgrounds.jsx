import React, { Component } from "react";
import { getCamps } from "../services/campService";
import Jumbotron from "./Jumbotron";
import Grid from "./Grid";

class Campgrounds extends Component {
  state = {
    camps: []
  };

  async componentDidMount() {
    const { data: camps } = await getCamps();
    this.setState({ camps });
  }

  render() {
    const { user } = this.props;
    const { camps } = this.state;
    return (
      <React.Fragment>
        <Jumbotron user={user} />
        <Grid data={camps} />
      </React.Fragment>
    );
  }
}
export default Campgrounds;
