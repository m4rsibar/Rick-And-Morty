import React, { Component } from "react";
import Character from "./Character";
import { exists } from "fs";

class Favorites extends Component {
  componentDidMount() {
    this.props.getFavorites();
  }

  render() {
    {
      if (localStorage.getItem("favs") == "[]") {
        return (
          <div style={{ top: "8em", position: "absolute" }}>
            "You have no favorites..."
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
}

export default Favorites;
