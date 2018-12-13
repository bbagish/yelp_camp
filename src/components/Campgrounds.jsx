import React, { Component } from "react";
import { toast } from "react-toastify";
import Jumbotron from "./Jumbotron";
import Grid from "./Grid";
import { getCamps, deleteCamp } from "../services/campService";

class Campgrounds extends Component {
  state = {
    camps: []
  };

  async componentDidMount() {
    const { data: camps } = await getCamps();
    this.setState({ camps });
  }

  handleDelete = async camp => {
    const originalCamps = this.state.camps;
    const camps = originalCamps.filter(c => c._id !== camp._id);
    this.setState({ camps });
    try {
      await deleteCamp(camp._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        toast.error("This camp has already been deleted.");
      }
    }
    this.setState({ originalCamps });
  };

  getPagedData = () => {
    const { searchQuery, camps: allCamps } = this.state;
    let filtered = allCamps;
    if (searchQuery) {
      filtered = allCamps.filter(c =>
        c.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    }
    const camps = filtered;
    return { totalCount: filtered.length, data: camps };
  };
  render() {
    const { user } = this.props;
    const { data: camps } = this.getPagedData();
    return (
      <React.Fragment>
        <Jumbotron user={user} />
        <Grid data={camps} />
      </React.Fragment>
    );
  }
}
export default Campgrounds;
