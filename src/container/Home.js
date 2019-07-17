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
          <button style={{ width: "auto" }}>Login</button>
          <Link to="/register">
            <button style={{ width: "auto" }}>Register</button>
          </Link>
        </div>
        <h3>Programming for Kids</h3>
        <p />
        <hr />
        <h4>Join in to learn the fun new way</h4>
        <h4>Kids are learning to program!</h4>
      </div>
      <div id="id01" className="modal">
        <form className="modal-content animate">
          <div className="imgcontainer">
            <span
              onclick="document.getElementById('id01').style.display='none'"
              className="close"
              title="Close Modal"
            >
              ×
            </span>
            <img src="css/img/avatar.png" alt="Avatar" className="avatar" />
          </div>
          <div className="container">
            <label htmlFor="uname">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              id="userName"
              required
            />
            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              id="psw"
              required
            />
            <button type="submit" onclick="check()">
              Login
            </button>
            <label>
              <input type="checkbox" defaultChecked="checked" name="remember" />{" "}
              Remember me
            </label>
          </div>
          <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
            <button
              type="button"
              onclick="document.getElementById('id01').style.display='none'"
              className="cancelbtn"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
