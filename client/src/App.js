import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import UserForm from "./components_new/UserForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <br />
        <br />
        <br />
        <div className="container">
          <Form />

          {/* <UserForm /> */}
        </div>
      </div>
    );
  }
}

export default App;
