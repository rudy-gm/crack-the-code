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
  };

  handleFirstNumberChange = (event) => {
    this.setState({
      firstNumber: event.target.value,
    });
  };

  handleSecondNumberChange = (event) => {
    this.setState({
      secondNumber: event.target.value,
    });
  };

  handleThirdNumberChange = (event) => {
    this.setState({
      thirdNumber: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(
      `${this.state.firstNumber} ${this.state.secondNumber} ${this.state.thirdNumber} and the result is: }`
    );
    event.preventDefault();
  };

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
      });
    } else {
      console.log("something wrong");

      this.setState({
        isModalOpen: this.state.isModalOpen,
      });
    }
  };

  render() {
    return (
      <React.Fragment>
        <hr></hr>
        <div className="container mt-3">
          <div className="row">
            <div className="col">
              <h3>{this.props.randomNum[0]}</h3>
            </div>
          </div>
        </div>

        <Form onSubmit={this.handleSubmit}>
            <center>
         
            <Input
              className="inputNumberStyle"
              type="number"
              value={this.state.firstNumber}
              onChange={this.handleFirstNumberChange}
            ></Input>

            <Input
              className="inputNumberStyle "
              type="number"
              value={this.state.secondNumber}
              onChange={this.handleSecondNumberChange}
            ></Input>
            <Input
              className="inputNumberStyle"
              type="number"
              value={this.state.thirdNumber}
              onChange={this.handleThirdNumberChange}
            ></Input>
 
          </center>
          <FormGroup>
          <Button type="submit" onClick={this.modalChange}>
            Guess Number
          </Button>
          </FormGroup>
        </Form>

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

        <HintsComponent gameNumbers={this.props.randomNum}></HintsComponent>
      </React.Fragment>
    );
  }
}

export default GameComponent;
