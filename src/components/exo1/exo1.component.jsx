import React, { Component } from 'react'

export default class Exo1 extends Component {
    state = {
        click: ''
    }

    handleClick = (evt) => {
        this.setState({ click: evt.target.value })
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick} value='1'>click 1</button>
                <button onClick={this.handleClick} value='2'>click 2</button>
                <button onClick={this.handleClick} value='3'>click 3</button>
                <button onClick={this.handleClick} value='4'>click 4</button>
                <h3>Value click : {this.state.click}</h3>
            </div>
        )
    }
}
