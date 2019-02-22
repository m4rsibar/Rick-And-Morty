import React, { Component } from "react";
import { Link } from "react-router-dom";

class Next extends Component {
  render() {
    return (
      <span className="nextArrow">
        <Link
          to="/"
          onClick={() => {
            this.props.fetchSomeData(this.props.next, "characters");
          }}
        >
          <img
            src="https://img.icons8.com/material/30/000000/circled-chevron-right.png"
            alt="Next Page"
            title="Next Page"
          />
        </Link>
      </span>
    );
  }
}

export default Next;
