import React, { Component } from "react";
import { Button } from "reactstrap";
import GameInfo from "../GameInfo";
import VerifyNumber from "../NumberComponent";



class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      test: [1, 2, 3, 4, 5, 6, 7, 8],
    };
  }
  render() {
    const Display = this.state.test.map((element) => {
      return <div className="row">{element}</div>;
    });

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col mt-2">
              <h1>Welcome to Crack The Code</h1>
            </div>
            <div className="row">
              <GameInfo></GameInfo>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col mt-2">
              <Button color="primary" >Start Game</Button>
                <VerifyNumber></VerifyNumber>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
