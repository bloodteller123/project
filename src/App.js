import React, { Component } from "react";
import "./App.css";

import Challenge from "./container/Challenge";
import Lesson from "./container/Lesson";
import Login from "./container/Login";
import OperatorLesson from "./container/lessons/Operatorlesson";
import ArrayLesson from "./container/lessons/Arraylesson";
import StringLesson from "./container/lessons/Stringlesson";
import VariableLesson from "./container/lessons/Variableslesson";
import LoopLesson from "./container/lessons/Loopslesson";
import Home from "./container/Home";
import Register from "./container/Register";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class App extends Component {
  state = { loggedIn: true };
  email = {};
  password = {};

  onLogout = () => {
    this.setState({ loggedIn: false });
  };

  onLogin = (email, pass) => {
    this.setState({ loggedIn: true });
    this.setState({ email: email });
    this.setState({ password: pass });
  };

  render() {
    const { loggedIn } = this.state;

    return (
      <Router>
        <nav>
          <Link to="/" style={{ color: "white" }}>
            <h3>FunKids</h3>
          </Link>
          <ul style={{ marginLeft: 250 }} className="nav-links">
            <li>
              <Link style={{ color: "white" }} to="/lessons/">
                Lessons
              </Link>
            </li>
            {loggedIn ? (
              <li>
                <Link
                  style={{ color: "white" }}
                  to="/"
                  onClick={() => this.onLogout()}
                >
                  Logout
                </Link>
              </li>
            ) : (
              /* CLEAR USERNAME/PASSWORD WHEN ITS IMPLEMETNED*/

              <li>
                <Link
                  style={{ color: "white" }}
                  to="/login"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/register" exact component={Register} />
        <Route
          path="/login"
          render={props => <Login {...props} onLogin={this.onLogin} />}
        />
        <Route path="/lessons/" exact component={Lesson} />
        <Route path="/challenge/:number" component={Challenge} />
        <Route path="/lessons/ArrayLesson" component={ArrayLesson} />
        <Route path="/lessons/LoopLesson" component={LoopLesson} />
        <Route path="/lessons/StringLesson" component={StringLesson} />
        <Route path="/lessons/VariableLesson" component={VariableLesson} />
        <Route path="/lessons/OperatorLesson" component={OperatorLesson} />
      </Router>
    );
  }
}
