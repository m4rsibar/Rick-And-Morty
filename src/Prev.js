import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Prev extends Component {
    render() {
        return (
            <span className="previousArrow">
                <Link to="/"
                    onClick={() => { this.props.fetchSomeData(this.props.prev, "characters") }}><img className="prevIcon" src="../prevPage.png" alt="previous page" title="Previous Page" />
                </Link>
            </span>
        );
    }
}

export default Prev