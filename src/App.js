import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import CharacterList from "./CharacterList";
import Header from "./Header";
import PlanetsList from "./PlanetsList";
import NotFound from "./NotFound";
import EpisodeList from "./EpisodeList";
import Search from "./Search";
import Loading from "./Loading";
import Favorites from "./Favorites";
import OutsideAlerter from "./OutsideAlerter";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class App extends Component {
  state = {
    allCharacters: [],
    characters: [],
    planets: [],
    episodes: [],
    search: "",
    isLoading: true,
    menuOpen: false,
    favorites: []
  };

  componentDidMount() {
    this.fetchSomeData(
      "https://rickandmortyapi.com/api/character/",
      "characters"
    );
    this.fetchSomeData("https://rickandmortyapi.com/api/location", "planets");
    this.fetchSomeData("https://rickandmortyapi.com/api/episode/", "episodes");
    this.gatherAllCharacters();

    localStorage.getItem("favs") &&
      this.setState({
        favorites: JSON.parse(localStorage.getItem("favs"))
      });
  }

  removeFromFavs = id => {
    const newFavorites = this.state.favorites.filter(i => {
      return i.id !== id;
    });

    this.setState({
      favorites: [...newFavorites]
    });
  };
  //everytime a heart is clicked, the "favorites" state updates (via the updateFavsState function), and sends the updated version of itself to local storage.
  componentDidUpdate = () => {
    localStorage.setItem("favs", JSON.stringify(this.state.favorites));
  };

  closeMenu = () => {
    if (window.innerWidth <= 768) {
      this.setState({ menuOpen: false });
    }
  };

  //when a card's heart gets clicked, the previous state of "favorites" gets added to with the object containing the information of the character card clicked, the object information is passed upstream from the Character's component into I.D argument

  updateFavsState = id => {
    const favorites = this.state.favorites;
    const checkUsername = obj => obj.id === id.id;

    if (favorites.some(checkUsername) === false) {
      this.setState(prevState => ({
        favorites: prevState.favorites.concat(id)
      }));
    } else alert(`you've already favorited that character`);
  };

  //goes to local storage and retrieves the "favs" (which is an object of all of the <3'd  characters) then parses them from a string, to JSON so it can be mapped over and displayed in the Favorites Component.
  getFavorites = () => {
    return JSON.parse(localStorage.getItem("favs"));
  };

  //Capitalizes the first letter of every word.
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

  scroll = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  toggleMenu = () => {
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen
    }));
  };

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
      <HashRouter>
        <div className="App">
          <OutsideAlerter
            menuOpen={this.state.menuOpen}
            toggleMenu={this.toggleMenu}
          >
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
              scroll={this.scroll}
              closeMenu={this.closeMenu}
              location={this.props.location}
            />
          </OutsideAlerter>
          {this.state.menuOpen ? (
            ""
          ) : (
            <span className="menuIcon">
              <img
                alt="Menu Icon"
                src="https://img.icons8.com/material/34/000000/menu.png"
                style={{ marginTop: "1em" }}
                onClick={this.toggleMenu}
              />
            </span>
          )}

          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.pathname}
                  timeout={800}
                  classNames="fade"
                >
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
                            nextCharacter={this.state.charactersNext}
                            prevCharacter={this.state.charactersPrev}
                            fetchSomeData={this.fetchSomeData}
                            scroll={this.scroll}
                            updateFavsState={this.updateFavsState}
                            closeMenu={this.closeMenu}
                            removeFromFavs={this.removeFromFavs}
                          />
                        )
                      }
                    />
                    <Route
                      path="/planets"
                      render={() =>
                        this.state.isLoading ? (
                          <Loading />
                        ) : (
                          <PlanetsList
                            planets={this.state.planets}
                            nextPlanet={this.state.planetsNext}
                            prevPlanet={this.state.planetsPrev}
                            fetchSomeData={this.fetchSomeData}
                            toggleMenu={this.toggleMenu}
                            scroll={this.scroll}
                            closeMenu={this.closeMenu}
                          />
                        )
                      }
                    />
                    <Route
                      path="/episodes"
                      render={() =>
                        this.state.isLoading ? (
                          <Loading />
                        ) : (
                          <EpisodeList
                            episodes={this.state.episodes}
                            nextEpisode={this.state.episodesNext}
                            prevEpisode={this.state.episodesPrev}
                            fetchSomeData={this.fetchSomeData}
                            toggleMenu={this.toggleMenu}
                            scroll={this.scroll}
                            closeMenu={this.closeMenu}
                          />
                        )
                      }
                    />
                    <Route
                      exact
                      path="/favorites"
                      render={() => (
                        <Favorites
                          favorites={this.state.favorites}
                          getFavorites={this.getFavorites}
                          closeMenu={this.closeMenu}
                          removeFromFavs={this.removeFromFavs}
                        />
                      )}
                    />
                    <Route
                      path="/search"
                      render={() =>
                        this.state.isLoading ? (
                          <Loading />
                        ) : (
                          <Search
                            characters={this.state.allCharacters}
                            handleSubmit={this.handleSubmit}
                            updateFavsState={this.updateFavsState}
                            closeMenu={this.closeMenu}
                          />
                        )
                      }
                    />

                    <Route component={NotFound} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </div>
      </HashRouter>
    );
  }
}

export default App;
