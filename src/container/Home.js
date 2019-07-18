import React from "react";
import "./Home.css";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Image from "./img/bground.png";

function Home() {
  return (
    <div
      className="container"
      style={{ backgroundImage: `url(${Image})`, height: "100%" }}
    >
      <div className="middle">
        <h1 style={{ color: "Black" }}>FUN KIDS</h1>
        <div className="button-box">
          <Link to="/login">
            <Button style={{ marginBottom: 2, width: 120 }} primary>
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button style={{ marginBottom: 2, width: 120 }} primary>
              Register
            </Button>
          </Link>
        </div>
        <h3>Programming for Kids</h3>
        <p />
        <hr />
        <h4>Join in to learn the fun new way</h4>
        <h4>kids are learning to program!</h4>
      </div>
    </div>
  );
}

export default Home;
