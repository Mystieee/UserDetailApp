import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="pageName">Personal Info Page</div>
        <div className="container">
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
