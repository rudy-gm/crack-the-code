import React, { Component } from "react";
import HintsComponent from "./Hints";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Col,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";


class GameComponent extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    isModalOpen: false,
    firstRigth: "inputNumberStyle",
    secondRigth: "inputNumberStyle ",
    thirdRigth: "inputNumberStyle ",
    wrongAnswer: false,
    blocked: 'locked',
    memes: [],
    isLoaded: false
  };

  handleFirstNumberChange = (event) => {
    if (event.target.value.length > 1) {
      event.target.value = event.target.value.slice(0, 1);
    }

    if (event.target.nextSibling) {
      event.target.nextSibling.focus();
    }

    this.setState({
      firstNumber: event.target.value,
    });
  };

  handleSecondNumberChange = (event) => {
    if (event.target.value.length > 1) {
      event.target.value = event.target.value.slice(0, 1);
    }

    if (event.target.nextSibling) {
      event.target.nextSibling.focus();
    }

    this.setState({
      secondNumber: event.target.value,
    });
  };

  handleThirdNumberChange = (event) => {
    if (event.target.value.length > 1) {
      event.target.value = event.target.value.slice(0, 1);
    }

    this.setState({
      thirdNumber: event.target.value,
    });
  };

  handleSubmit = (event) => {
 
    event.preventDefault();

  };

  sliceControlForm = (event) => {
    if (event.target.value.length > 1) {
      event.target.value = event.target.value.slice(0, 0);
    }
  };

  // Verifier for winning match 
  modalChange = () => {
    const s = this.state;
    const p = this.props.randomNum[0];

    if (
      s.firstNumber === p[0] &&
      s.secondNumber === p[1] &&
      s.thirdNumber === p[2]
    ) {
      console.log(p);
      this.setState({
        isModalOpen: !this.state.isModalOpen,
        blocked: 'unlocked'
      });
    } else {
      console.log("something wrong");

      this.setState({
        isModalOpen: this.state.isModalOpen,
        wrongAnswer: !this.state.wrongAnswer,
        isLoaded: !this.state.isLoaded

      });


    }
    this.compileRigthOrWrong();
  };

  compileRigthOrWrong = () => {
    this.firstRigthOrWrong();
    this.secondRigthOrWrong();
    this.thirdRigthOrWrong();
  };

  firstRigthOrWrong = () => {
    if (this.state.firstNumber === this.props.randomNum[0][0]) {
      this.setState({
        firstRigth: "inputNumberStyle green",
      });
    } else if (this.state.firstNumber !== this.props.randomNum[0][0]) {
      this.setState({
        firstRigth: "inputNumberStyle red",
      });
    }
  };

  secondRigthOrWrong = () => {
    if (this.state.secondNumber === this.props.randomNum[0][1]) {
      this.setState({
        secondRigth: "inputNumberStyle green",
      });
    } else if (this.state.secondNumber !== this.props.randomNum[0][1]) {
      this.setState({
        secondRigth: "inputNumberStyle red",
      });
    }
  };

  thirdRigthOrWrong = () => {
    if (this.state.thirdNumber === this.props.randomNum[0][2]) {
      this.setState({
        thirdRigth: "inputNumberStyle green",
      });
    } else if (this.state.thirdNumber !== this.props.randomNum[0][2]) {
      this.setState({
        thirdRigth: "inputNumberStyle red",
      });
    }
  };

  componentDidMount(){

    fetch('https://api.imgflip.com/get_memes')
      .then(data => data.json())
      .then(json =>{
        this.setState({
          memes: json.data.memes[Math.floor(Math.random()*json.data.memes.length)],
        })
      })
  }

  render() {

    const tryAgainMsg = this.state.wrongAnswer;
    const isLoaded = this.state.isLoaded;
    const memesImg = this.state.memes;

    return (
      <React.Fragment>
        <hr></hr>
        <div className="container mt-3">
          <div className="row">
            <div className="col header-game-style">
              <h3>A Numeric Lock has a 3-Digit Key</h3>
              <h4>Can You solve it?</h4>
            </div>

          </div>
          <div className="row">
            <div className="col">
              <h3 className={this.state.blocked}>{this.props.randomNum[0]}</h3>
            </div>
          </div>
        </div>

        <Form onSubmit={this.handleSubmit}>
          <center>
            <input
              autoFocus={true}
              className={this.state.firstRigth}
              type="number"
              value={this.state.firstNumber}
              onChange={this.handleFirstNumberChange}
              // onKeyUp = {this.sliceControlForm}
            ></input>

            <input
              className={this.state.secondRigth}
              type="number"
              value={this.state.secondNumber}
              onChange={this.handleSecondNumberChange}
              //onKeyUp = {this.sliceControlForm}
            ></input>

            <input
              className={this.state.thirdRigth}
              type="number"
              value={this.state.thirdNumber}
              onChange={this.handleThirdNumberChange}
            ></input>
          </center>

          <FormGroup>
            <Button className="guess-button" type="submit" onClick={this.modalChange}>
              Guess Number
            </Button>
          </FormGroup>
        </Form>

        <div>
          { tryAgainMsg && (<h5 className="white-color">Sorry but your answer is wrong. Try again!</h5>)}
        </div>

        <div className="wrapper">
          <Modal
            className="modal--congratulations"
            isOpen={this.state.isModalOpen}
            toggle={this.modalChange}
          >
            <ModalHeader toggle={this.modalChange}></ModalHeader>
            <ModalBody className="modal-top">
              <img
                className="modal-icon u-imgResponsive"
                src="https://dl.dropboxusercontent.com/s/e1t2hhowjcrs7f5/100daysui_100icon.png"
                alt="Trophy"
              />
              <div className="modal-header">Congratulations</div>
              <div className="modal-subheader">
                You have successfully cracked the code!
              </div>
            </ModalBody>
            <ModalFooter className="modal-bottom">
              <button className="modal-btn u-btn u-btn--share">Share</button>
              <button className="modal-btn u-btn u-btn--success">
                Have a beer
              </button>
            </ModalFooter>
          </Modal>
        </div>

        <div className="container">
          {isLoaded && (
            <div>
              <p className="white-color">Watch a meme so you laugh a little...</p>
              <img src={memesImg.url} alt={memesImg.name} key={memesImg.id} height='400' width='400'></img>
            </div>)}
        </div>

        <HintsComponent gameNumbers={this.props.randomNum}></HintsComponent>

        <Button className='mt-3'>Give Up?</Button>
      </React.Fragment>
    );
  }
}

export default GameComponent;
