import React from "react";
import "./App.css";

import Challenge from "./container/Challenge";
import Lesson from "./container/Lesson";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <h3>FunKids</h3>
        <ul style={{ marginLeft: 250 }} className="nav-links">
          <li>
            <Link style={{ color: "white" }} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link style={{ color: "white" }} to="/lessons/">
              Lessons
            </Link>
          </li>
          <li>
            <Link style={{ color: "white" }} to="/challenge/0">
              Challenge
            </Link>
          </li>
        </ul>
      </nav>
      <Route path="/" exact />
      <Route path="/lessons/" component={Lesson} />
      <Route path="/challenge/:number" component={Challenge} />
    </Router>
  );
}

export default App;
