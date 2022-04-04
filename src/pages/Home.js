import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import GameComponent from "../components/Game";
import GameInfo from "../components/GameInfo";
import HintsComponent from "../components/Hints";
import randomThreeDigits from "../components/NumberComponent";
import Test from "../components/test";
import CssExplanation from "../components/css-explanation";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      randomNum: randomThreeDigits(10),
      isOpen: false,
    };
  }

  render() {
    const newGame = () => {
      this.setState({
        randomNum: randomThreeDigits(10),
      });
    };

    const handleChange = (event) => {
      this.setState({
        isOpen: !this.state.isOpen,
      });
      newGame();
    };

    const openOrClose = this.state.isOpen;

    console.log(this.state.randomNum[0]);

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col mt-2 main-title">
              <h1>Welcome to Crack The Code</h1>
            </div>

            <CssExplanation></CssExplanation>

            <GameInfo></GameInfo>
          </div>
        </div>

        <div className="container">
          <div className="row">

            <div className="col mt-4">
              <Button color="primary" onClick={handleChange} className="start-button">
                <span class="transition"></span>
                <span class="gradient"></span>
                <span class="label"> {openOrClose ? "New Game" : "Start The Game"}</span>
              </Button>

              {openOrClose && (
                <GameComponent randomNum={this.state.randomNum}></GameComponent>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
