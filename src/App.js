import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    counter: 0,
    error: {}
  };
  incrementButton = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };
  decrementButton = () => {
    const { counter } = this.state;
    if (counter > 0) {
      this.setState({ counter: counter - 1 });
    } else {
      this.setState({
        error: { type: "danger", message: "you can't decrement zero!" }
      });
    }
  };
  render() {
    const { counter, error } = this.state;
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently {counter}</h1>
        <p data-test="error-message">{error.message}</p>
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
