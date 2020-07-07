import React from "react";
import "../src/App.css";
import Nav from "./Nav";
import About from "./About";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

let Home = () => {
  return (
    <div>
      <h1 className="Title">Home</h1>
    </div>
  );
};

export default App;
