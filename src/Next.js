import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Next extends Component {
    render() {
        return (
            <span className="nextArrow">
                <Link to="/"
                    onClick={() => { this.props.fetchSomeData(this.props.nextPage, "characters") }}><img src="../next.png" alt="next arrow" />
                </Link>
            </span>
        );
    }
}

export default Next