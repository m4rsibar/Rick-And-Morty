import React, { Component } from "react";
import Character from "./Character";

class Favorites extends Component {
  componentDidMount() {
    this.props.getFavorites();
    this.props.closeMenu();
  }

  render() {
    if (
      localStorage.getItem("favs") === "[]" ||
      window.localStorage.length < 1
    ) {
      return (
        <div
          style={{
            position: "absolute",
            top: "40%",
            left: "30%",
            fontFamily: "Poppins",
            fontSize: "2em"
          }}
        >
          You have no favorites...
        </div>
      );
    } else {
      return (
        <div className="charactersBox">
          {this.props.getFavorites().map(f => (
            <Character character={f} />
          ))}
        </div>
      );
    }
  }
}

export default Favorites;
