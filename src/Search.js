import React, { Component } from "react";
import Character from "./Character";

class Search extends Component {
  state = {
    searchText: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    let results = this.props.characters;
    let searchText = this.state.searchText.trim().toLowerCase();
    if (searchText.length > 0) {
      results = results.filter(result => {
        return result.name.toLowerCase().includes(searchText);
      });
      console.log(results);
    }

    return (
      <div>
        <form>
          <input
            type="text"
            name="searchText"
            placeholder="search"
            onChange={this.handleChange}
          />
        </form>
        {results.length < 100 ? (
          <div className="charactersBox">
            {results.map((c, index) => (
              <Character key={index} character={c} />
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Search;
