import React, { Component } from 'react'

export default class NavBar extends Component {
    render() {
        const { setTop, setIPL, setStock, setPolitics } = this.props;
        return (
            <div>
                <nav>
                    <h1>News Room</h1>
                    <a href="#" onClick={setTop}>Home</a>
                    <a href="#" onClick={setIPL}>IPL</a>
                    <a href="#" onClick={setStock}>Stock Market</a>
                    <a href="#" onClick={setPolitics}>Politics</a>
                </nav>
            </div>
        )
    }
}
