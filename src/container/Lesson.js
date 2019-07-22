import React from "react";
import "./Lesson.css";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";

function Lesson() {
  return (
    <div className="body" style={{ backgroundColor: "#F3F3F3" }}>
      <div className="lesson-header">
        <h1>Lessons</h1>
        <span className="line" />
      </div>
      <div className="lessons">
        <div className="lesson-box">
          <div className="lesson-number">
            <h2>1</h2>
          </div>
          <div className="lesson-description">
            <h2>Variables</h2>
            <h3>
              Java uses variables in order to remember the data that it's using.
              We cover making these variables, what type they should be, and how
              to set them to something.
            </h3>
          </div>
          <div className="lesson-buttons">
            <Link to="/lessons/VariableLesson">
              <Button style={{ marginBottom: 2, width: 100 }} primary>
                Go to lesson!
              </Button>
            </Link>
          </div>
        </div>
        <div className="lesson-box">
          <div className="lesson-number">
            <h2>2</h2>
          </div>
          <div className="lesson-description">
            <h2>Operators</h2>
            <h3>
              Operators are the basis to perform basic math on numbers or our
              previously created variables. Addition, Subtraction,
              Multiplication and Division will all be visited in this lesson.
            </h3>
          </div>
          <div className="lesson-buttons">
            <Link to="/lessons/OperatorLesson">
              <Button style={{ marginBottom: 2, width: 100 }} primary>
                Go to lesson!
              </Button>
            </Link>
          </div>
        </div>
        <div className="lesson-box">
          <div className="lesson-number">
            <h2>3</h2>
          </div>
          <div className="lesson-description">
            <h2>Strings</h2>
            <h3>
              In this lesson we tackle Strings, a data type Java uses to
              represent things like words and sentences. Strings can contain
              almost anything, and have many methods that can be used on them
              that will be covered.
            </h3>
          </div>
          <div className="lesson-buttons">
            <Link to="/lessons/StringLesson">
              <Button style={{ marginBottom: 2, width: 100 }} primary>
                Go to lesson!
              </Button>
            </Link>
          </div>
        </div>
        <div className="lesson-box">
          <div className="lesson-number">
            <h2>4</h2>
          </div>
          <div className="lesson-description">
            <h2>Loops</h2>
            <h3>
              Many times in coding you'll find yourself needing to do something
              multiple times. Loops are a way for your code to repeat itself,
              allowing for the code to be repeated based on logic you set.
            </h3>
          </div>
          <div className="lesson-buttons">
            <Link to="/lessons/LoopLesson">
              <Button style={{ marginBottom: 2, width: 100 }} primary>
                Go to lesson!
              </Button>
            </Link>
          </div>
        </div>
        <div className="lesson-box">
          <div className="lesson-number">
            <h2>5</h2>
          </div>
          <div className="lesson-description">
            <h2>Arrays</h2>
            <h3>
              While programming, you may have variables that are structured like
              a list. Arrays are what Java uses to represent these lists in a
              single variable. Creating arrays and their common uses are
              explored in this lesson.
            </h3>
          </div>
          <div className="lesson-buttons">
            <Link to="/lessons/ArrayLesson">
              <Button style={{ marginBottom: 2, width: 100 }} primary>
                Go to lesson!
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lesson;
