import React from "react";
import "./Register.css";
import { Button } from "semantic-ui-react";
import { Link, History, withRouter } from "react-router-dom";
import Image from "./img/bground.png";

function Register() {
  return (
    <div>
      <title> Fun Kids</title>
      <div style={{ paddingLeft: "16px" }}>
        <form
          style={{
            border: "1px solid #ccc",
            marginTop: 25,
            maxWidth: "70%",
            marginLeft: "13%"
          }}
        >
          <div className="container">
            <h1>Get Started Today!</h1>
            <hr />
            <label htmlFor="username">
              <b>Username</b>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              id="userName"
              required
            />
            <label htmlFor="fname">
              <b>First Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter First Name"
              id="fname"
              required
            />
            <label htmlFor="lname">
              <b>Last Name</b>
            </label>
            <input
              type="text"
              placeholder="Enter Last Name"
              id="lname"
              required
            />
            <label htmlFor="bday">
              <b>Date of Birth</b>
            </label>
            <input type="date" id="bday" required />
            <p />
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input type="text" placeholder="Enter Email" id="email" required />
            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              id="psw"
              required
            />
            <div className="clearfix">
              <Link to="/">
                <button type="button" className="cancelbtn">
                  Cancel
                </button>
              </Link>
              <Link to="/lessons/">
                <button type="submit" className="signupbtn">
                  Submit
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
