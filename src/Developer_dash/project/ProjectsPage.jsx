import React, { Component } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { localhost } from "../../GlobalVars";
import ProjectCards from "./ProjectCards";
import { Navbar, Nav } from "react-bootstrap";

export default class ProjectsPage extends Component {
  state = {
    projects: null
  };
  componentDidMount = () => {
    axios
      .get(`${localhost}/project/`)
      .then(res => {
        console.log(res.data);
        this.setState({ projects: res.data });
      })
      .catch(err => console.log(err));
  };
  render() {
    return (
      <div>
        <br />
        {this.state.projects != null &&
          this.state.projects.map(item => <ProjectCards data={item} />)}
      </div>
    );
  }
}
