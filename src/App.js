import React from "react";
import "./App.css";

import Challenge from "./container/Challenge";
import Lesson from "./container/Lesson";
import OperatorLesson from "./container/lessons/Operatorlesson"
import ArrayLesson from "./container/lessons/Arraylesson"
import StringLesson from "./container/lessons/Stringlesson"
import VariableLesson from "./container/lessons/Variableslesson"
import LoopLesson from "./container/lessons/Loopslesson"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <h3>FunKids</h3>
        <ul style={{ marginLeft: 250 }} className="nav-links">
          <li>
            <Link style={{ color: "white" }} to="/lessons/">
              Lessons
            </Link>
          </li>
          <li>
            <Link style={{ color: "white" }} to="/challenge/0">
              User
            </Link>
          </li>
        </ul>
      </nav>
      <Route path="/" exact />
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

export default App;
