import React, { Component } from "react";

class GameInfo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col mt-2">
            Crack the Code are the puzzles in which there is a lock that has 3
            digit key to open it. There are 3 digit hints given and it is told
            how many of these three digits are correct. If these numbers are
            correct then how many of these correct numbers are correctly placed.
          </div>
        </div>
      </div>
    );
  }
}

export default GameInfo;
