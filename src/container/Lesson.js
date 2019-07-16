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
            <h2>Intro to the editor</h2>
            <h3>
              In this lesson we'll look at where we'll be working, the editor!
              The editor is where you write your code for it to be read by the
              computer. We'll be seeing line numbers, text colours and some
              basic code to demonstrate.
            </h3>
          </div>
          <div className="lesson-buttons">
            <Button
              style={{ marginBottom: 2, width: 100 }}
              component={Link}
              to={"/challenge/1"}
              primary
            >
              Go to lesson!
            </Button>
            <Button
              style={{ marginTop: 2, width: 100 }}
              primary
              onClick={console.log("hi")}
            >
              Try the challenge!
            </Button>
          </div>
        </div>
        <div className="lesson-box">
          <div className="lesson-number">
            <h2>2</h2>
          </div>
          <div className="lesson-description">
            <h2>What is Java?</h2>
            <h3>
              You may have seen "3 Billion Devices Run Java", and this is no
              exaggeration, it has been one of the most used languages for over
              20 years! This lesson will be a quick overview to answer "What is
              Java?".
            </h3>
          </div>
          <div className="lesson-buttons">
            <Button
              style={{ marginBottom: 2, width: 100 }}
              primary
              onClick={console.log("hi")}
            >
              Go to lesson!
            </Button>
            <Button
              style={{ marginTop: 2, width: 100 }}
              primary
              onClick={console.log("hi")}
            >
              Try the challenge!
            </Button>
          </div>
        </div>
        <div className="lesson-box">
          <div className="lesson-number">
            <h2>3</h2>
          </div>
          <div className="lesson-description">
            <h2>Simple Syntax</h2>
            <h3>
              In this lesson we tackle some of the basic syntax of Java, such a
              main() and system.out.println() to get a quick grasp of what's
              happening
            </h3>
          </div>
          <div className="lesson-buttons">
            <Button
              style={{ marginBottom: 2, width: 100 }}
              primary
              onClick={console.log("hi")}
            >
              Go to lesson!
            </Button>
            <Button
              style={{ marginTop: 2, width: 100 }}
              primary
              onClick={console.log("hi")}
            >
              Try the challenge!
            </Button>
          </div>
        </div>
        <div className="lesson-box">
          <div className="lesson-number">
            <h2>4</h2>
          </div>
          <div className="lesson-description">
            <h2>Commenting Code</h2>
            <h3>
              Sometimes when you're coding, you want to leave yourself or
              someone else a note that isn't part of your code. This lessons
              teaches you how to use comments to do just that.
            </h3>
          </div>
          <div className="lesson-buttons">
            <Button
              style={{ marginBottom: 2, width: 100 }}
              primary
              onClick={console.log("hi")}
            >
              Go to lesson!
            </Button>
            <Button
              style={{ marginTop: 2, width: 100 }}
              primary
              onClick={console.log("hi")}
            >
              Try the challenge!
            </Button>
          </div>
        </div>
        <div className="lesson-box">
          <div className="lesson-number">
            <h2>5</h2>
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
            <Button
              style={{ marginBottom: 2, width: 100 }}
              primary
              onClick={console.log("hi")}
            >
              Go to lesson!
            </Button>
            <Button
              style={{ marginTop: 2, width: 100 }}
              primary
              onClick={console.log("hi")}
            >
              Try the challenge!
            </Button>
          </div>
        </div>
        <div className="lesson-box">
          <div className="lesson-number">
            <h2>6</h2>
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
            <Button
              style={{ marginBottom: 2, width: 100 }}
              primary
              onClick={console.log("hi")}
            >
              Go to lesson!
            </Button>
            <Button
              style={{ marginTop: 2, width: 100 }}
              primary
              onClick={console.log("hi")}
            >
              Try the challenge!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lesson;
