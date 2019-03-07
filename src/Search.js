import React, { Component } from "react";
import Character from "./Character";

class Search extends Component {
  state = {
    searchText: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
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
      <div className>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="searchText"
            placeholder="Search For a Character..."
            onChange={this.handleChange}
            className="searchbar"
            autocomplete="off"
          />
        </form>
        {/* needs work, not the best way of optimizing */}
        {results.length < 100 ? (
          <div className="charactersBox">
            {results.map((c, index) => (
              <Character
                key={index}
                character={c}
                updateFavsState={this.props.updateFavsState}
              />
            ))}
          </div>
        ) : null}
      </div>
    );
  }
}

export default Search;
