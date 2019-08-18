import React, { Component } from "react";
import Navbar from "../common/Navbar";

export default class FoodList extends Component {
  render() {
    return (
      <div>
        <Navbar />
        Food List. Restaurant Admin can add food and can see the details of the
        foods.
      </div>
    );
  }
}
