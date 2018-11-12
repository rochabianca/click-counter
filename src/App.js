import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    counter: 0
  };
  incrementButton = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };
  decrementButton = () => {
    const { counter } = this.state;
    this.setState({ counter: counter - 1 });
  };
  render() {
    const { counter } = this.state;
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently {counter}</h1>
        <button onClick={this.incrementButton} data-test="increment-button">
          +
        </button>

        <button onClick={this.decrementButton} data-test="decrement-button">
          -
        </button>
      </div>
    );
  }
}

export default App;
