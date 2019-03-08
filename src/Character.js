import React, { Component } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class Character extends Component {
  state = {
    isExpanded: false
  };

  toggleExpanded = () => {
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  };

  render() {
    let type = this.props.character.type;

    return (
      <TransitionGroup>
        <CSSTransition appear={true} timeout={400} classNames="fade">
          <div className="cardContainer">
            <img
              className="characterIcon"
              src={this.props.character.image}
              alt="Character Icon"
            />

            <div
              className={`extended ${this.state.isExpanded ? "show" : "hide"}`}
            >
              <div className="extendedInfo">
                <ul className="extendedInfoList">
                  <li>{this.props.character.gender}</li>
                  <li>{this.props.character.species}</li>
                  <li>Origin:{this.props.character.origin.name}</li>
                </ul>
              </div>
              <div className="typeBox">
                {type !== "" ? <span className="typeText">{type}</span> : null}
              </div>
            </div>

            <div className="topBox">
              <span className="name">{this.props.character.name}</span>
              <div className="infoContainer">
                <div className="locationBox">
                  <img
                    className="location"
                    src="https://img.icons8.com/material/24/000000/marker.png"
                    alt="Location Icon"
                  />
                  <span className="locationText">
                    {this.props.character.location.name}
                  </span>
                </div>

                <div className="statusBox">
                  <span>Status: </span>
                  <span className="status">{this.props.character.status}</span>
                </div>

                {this.state.loved ? (
                  <span
                    className="heart"
                    style={{
                      fontSize: "20px",
                      color: "#ba102f"
                    }}
                    onClick={() => {
                      this.props.updateFavsState(this.props.character);
                      this.setState(prevState => ({
                        loved: !prevState.loved
                      }));
                    }}
                  >
                    <span className="heart">
                      <i className="fas fa-heart" />
                    </span>
                  </span>
                ) : (
                  <span
                    className="heart"
                    style={{
                      fontSize: "20px"
                    }}
                    onClick={() => {
                      this.props.updateFavsState(this.props.character);
                      this.setState(prevState => ({
                        loved: !prevState.loved
                      }));
                    }}
                  >
                    <i className="far fa-heart" />
                  </span>
                )}

                <span
                  onClick={this.toggleExpanded}
                  className="downArrowContainer"
                >
                  <img
                    className={`downArrow ${
                      this.state.isExpanded ? "rotate" : ""
                    }`}
                    src="https://img.icons8.com/material/48/000000/expand-arrow.png"
                    alt="expand arrow"
                  />
                </span>
              </div>
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  }
}

export default Character;
