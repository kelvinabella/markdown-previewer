import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

const marked = require("marked");

class App extends Component {
  constructor(props) {
    super(props);
    const initialText =
      "Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in Manila.\n\n *[Kelvin Abella](https://freecodecamp.com/kelvinabella)*";

    this.state = {
      value: initialText,
      markedup: marked(initialText),
    };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({
      value: e.target.value,
      markedup: marked(e.target.value),
    });
  }

  render() {
    return (
      <div className="app">
        <textarea
          className="input"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <div className="output">
          <div dangerouslySetInnerHTML={{ __html: this.state.markedup }} />
        </div>
      </div>
    );
  }
}

export default App;
