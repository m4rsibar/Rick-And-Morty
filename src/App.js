import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CharacterList from "./CharacterList";
import Header from "./Header";
import PlanetsList from "./PlanetsList";
import NotFound from "./NotFound";
import EpisodeList from "./EpisodeList";
import Search from "./Search";
import Loading from "./Loading";

class App extends Component {
  state = {
    allCharacters: [],
    characters: [],
    planets: [],
    episodes: [],
    search: "",
    isLoading: true,
    menuOpen: false
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
    this.fetchSomeData("https://rickandmortyapi.com/api/episode/", "episodes");
    this.gatherAllCharacters();
  }

  gatherAllCharacters = () => {
    fetch(`https://rickandmortyapi.com/api/character/`)
      .then(res => res.json())
      .then(data => {
        let characters = data.results;
        const totalPages = data.info.pages;
        if (totalPages > 1) {
          for (let i = 2; i <= totalPages; i++) {
            let page = i;
            fetch(`https://rickandmortyapi.com/api/character/?page=${i}`)
              .then(res => res.json())
              .then(data => {
                characters = characters.concat(data.results);
                if (page === totalPages) {
                  this.setState({
                    allCharacters: characters,
                    isLoading: false
                  });
                }
              });
          }
        } else {
          console.log("none");
        }
      });
  };

  toggleMenu = () => {
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen
    }));
  };

  componentDidUpdate() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }

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
      .then()
      .catch(err => console.log(err));
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header
            randomizeCharacters={this.randomizeCharacters}
            nextCharacter={this.state.charactersNext}
            prevCharacter={this.state.charactersPrev}
            nextPlanet={this.state.planetsNext}
            prevPlanet={this.state.planetsPrev}
            nextEpisode={this.state.episodesNext}
            prevEpisode={this.state.episodesPrev}
            fetchSomeData={this.fetchSomeData}
            menuOpen={this.state.menuOpen}
            toggleMenu={this.toggleMenu}
          />

          {this.state.menuOpen ? (
            ""
          ) : (
            <span className="menuIcon">
              <img
                src="https://img.icons8.com/material/34/000000/menu.png"
                style={{ marginTop: "1em" }}
                onClick={this.toggleMenu}
              />
            </span>
          )}

          <Switch>
            <Route
              exact
              path="/"
              render={() =>
                this.state.isLoading ? (
                  <Loading />
                ) : (
                  <CharacterList
                    characters={this.state.characters}
                    search={this.state.search}
                  />
                )
              }
            />
            <Route
              path="/planets"
              render={() => <PlanetsList planets={this.state.planets} />}
            />
            <Route
              path="/episodes"
              render={() => <EpisodeList episodes={this.state.episodes} />}
            />
            <Route
              path="/search"
              render={() => (
                <Search
                  characters={this.state.allCharacters}
                  handleSubmit={this.handleSubmit}
                />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
