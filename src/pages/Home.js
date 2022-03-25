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

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
      randomNum: randomThreeDigits(10),
      isOpen: false
    };
  }


  render() {

    const newGame = (event) =>{

      this.setState({
        randomNum: randomThreeDigits(10)
      })
    }

    const handleChange = (event) =>{

      this.setState({
        isOpen: !this.state.isOpen
      })
    }

    const openOrClose = this.state.isOpen

    console.log(this.state.randomNum[0]);

    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col mt-2">
              <h1>Welcome to Crack The Code</h1>
            </div>
            <div className="row">
              <div className="col">
                <GameInfo></GameInfo>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col mt-4">
              <Button color="primary" onClick={handleChange}>{openOrClose ? "New Game": 'Start The Game'}</Button>

              {
                openOrClose && (
                  <GameComponent randomNum={this.state.randomNum}></GameComponent>
                )
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
