import React, { Component } from "react";

/**
 * Component that alerts if you click outside of it
 */
class OutsideAlerter extends Component {
  constructor(props) {
    super(props);

    this.handleClickOutside = this.handleClickOutside.bind(this);
  }
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  /**
   * Set the wrapper ref
   */

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside(event) {
    if (
      this.wrapperRef &&
      !this.wrapperRef.contains(event.target) &&
      this.props.menuOpen === true &&
      window.innerWidth <= 600
    ) {
      this.props.toggleMenu();
    }
  }

  render() {
    return (
      <div ref={node => (this.wrapperRef = node)}>{this.props.children}</div>
    );
  }
}

export default OutsideAlerter;
