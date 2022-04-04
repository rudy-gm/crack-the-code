import React, { Component } from "react";

class Test extends Component {
  render() {
    return (
      <div className="container">
        <h1>TESTING</h1>
        <div className="email-holder">
          <input className="form-control" placeholder="Enter Email" />
          <input type='text'></input>
          <button type="submit" class="btn">
            {" "}
            Register{" "}
          </button>
          <div />
        </div>
      </div>
    );
  }
}

export default Test