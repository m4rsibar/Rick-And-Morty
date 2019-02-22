import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Prev extends Component {
    render() {
        return (
            <span className="nextArrow">
                <Link to="/"
                    onClick={() => { this.props.fetchSomeData(this.props.prevPage, "characters") }}><img className="prevIcon" src="../prev.png" alt="next arrow" />
                </Link>
            </span>
        );
    }
}

export default Prev