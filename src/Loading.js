import React, { Component } from "react";

export default class Loading extends Component {
  render() {
    return (
      <div className="spinner">
        <div className="lds-ellipsis">
          <div />
          <div />
          <div />
          <div />
        </div>{" "}
      </div>
    );
  }
}
