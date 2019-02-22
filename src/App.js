import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import CharacterList from "./CharacterList";
import Header from "./Header";
import PlanetsList from "./PlanetsList";

class App extends Component {
  state = {
    characters: [],
    planets: [],
    search: "",
    selectedCharacter: null
  };

  toTitleCase = str => {
    return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  randomizeCharacters = () => {
    let randomNumber = Math.floor(Math.random() * 25) + 1;
    this.fetchSomeData(
      `https://rickandmortyapi.com/api/character/?page=${randomNumber}`,
      "characters"
    );
  };

  componentDidMount() {
    this.fetchSomeData(
      "https://rickandmortyapi.com/api/character/",
      "characters"
    );
    this.fetchSomeData("https://rickandmortyapi.com/api/location", "planets");
  }

  // componentDidUpdate() {
  //   this.scroll()
  // }

  fetchSomeData = (url, stateToSet) => {
    fetch(url)
      .then(res => res.json())
      .then(data =>
        this.setState({
          [stateToSet]: data.results,
          [`${stateToSet}Next`]: data.info.next,
          [`${stateToSet}Prev`]: data.info.prev
        })
      )
      .catch(err => alert(err));
  };

  scroll = () => {
    var element = document.querySelector(".prevIcon");
    element.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    console.log(this.state.charactersNext);
    return (
      <BrowserRouter>
        <div className="App">
          <Header
            randomizeCharacters={this.randomizeCharacters}
            next={this.state.charactersNext}
            prev={this.state.charactersPrev}
            fetchSomeData={this.fetchSomeData}
          />
          <div className="search">
            <Route
              exact
              path="/"
              component={() => (
                <CharacterList characters={this.state.characters} />
              )}
            />
            <Route
              path="/planets"
              component={() => <PlanetsList planets={this.state.planets} />}
            />
          </div>

          {this.state.selectedCharacter && (
            <div className="result">
              <img
                className="characterImage"
                src={this.state.selectedCharacter.results[0].image}
                alt={this.selectedCharacter.name}
              />
              <p>Species:{this.state.selectedCharacter.results[0].species}</p>
              <p>Status:{this.state.selectedCharacter.results[0].status}</p>
            </div>
          )}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// onSearchChange = event => {
//   this.setState({search: event.target.value})
// }

// generateSearchResults=(search)=>{
//   if(search===""){
//     return this.state.characters
//   }else{
//     return this.state.characters.filter(p=>p.name.includes(this.toTitleCase(search)))
//   }
// }

// selectCharacter= async (name)=>{
//   const res= await fetch(`https://rickandmortyapi.com/api/character/?name=${name}`,
//   {cache: "force-cache"})
//   const json= await res.json()
//   this.setState({selectedCharacter:json, search:name})
// }

/* <input
              onChange={this.onSearchChange}
              type="text"
              value={this.state.search}/> */
