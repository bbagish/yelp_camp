import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import Logout from "./components/Logout";
import Campgrounds from "./components/Campgrounds";
import Campground from "./components/Campground";
import CampForm from "./components/CampForm";
import RegisterForm from "./components/RegisterForm";
import auth from "./services/authService";
import ProtectedRoute from "./components/commons/protectedRoute";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = auth.getCurrentUser();
    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <NavBar user={user} />
        <div className="container mt-4">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/campgrounds/:id/show" component={Campground} />
            <ProtectedRoute path="/campgrounds/:id" component={CampForm} />
            <Route
              path="/campgrounds"
              render={props => <Campgrounds {...props} user={user} />}
            />
            <Redirect exact from="/" to="/campgrounds" />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
