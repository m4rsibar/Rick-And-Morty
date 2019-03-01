import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CharacterList from "./CharacterList";
import Header from "./Header";
import PlanetsList from "./PlanetsList";
import NotFound from "./NotFound";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class App extends Component {
  state = {
    characters: [],
    planets: [],
    search: "",
    selectedCharacter: null,
    appearHome: true
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
      .catch(err => alert(err));
  };

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="App">
          <Header
            randomizeCharacters={this.randomizeCharacters}
            nextCharacter={this.state.charactersNext}
            prevCharacter={this.state.charactersPrev}
            nextPlanet={this.state.planetsNext}
            prevPlanet={this.state.planetsPrev}
            fetchSomeData={this.fetchSomeData}
          />

          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <CharacterList characters={this.state.characters} />
              )}
            />
            <Route
              path="/planets"
              render={() => <PlanetsList planets={this.state.planets} />}
            />

            {/* <Route path="/planets/:planetId" render={() => <Planet />} /> */}

            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
