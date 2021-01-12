import logo from "./logo.png";
import "./App.css";
import React, { Component } from "react";

import Search from "./Search";

class App extends Component {
  synth = window.speechSynthesis;

  paws() {
    console.log("clicked!");
  }
  render() {
    if ("speechSynthesis" in window) {
      // Speech Synthesis supported 🎉
      return (
        <div className="App">
          <header className="App-header">
            <img
              src={logo}
              className="App-logo"
              style={{ pointerEvents: "all" }}
              onClick={() =>
                this.synth.paused ? this.synth.resume() : this.synth.pause()
              }
              alt="logo"
            />
            <p>This is ReditReader! Click Snuu to pause and play!</p>
            <Search></Search>
          </header>
        </div>
      );
    } else {
      // Speech Synthesis Not Supported 😣
      alert("Sorry, your browser doesn't support text to speech!");
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Sorry, your browser doesn't support text to speach!</p>
          </header>
        </div>
      );
    }
  }
}

export default App;
