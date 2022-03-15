import React, { Component } from "react";
import { Button } from "reactstrap";

class VerifyNumber extends Component {
  constructor(props) {
    super(props);

    this.state = {
      numbers: 0
    };
  }

  render() {

    const generateRandomNumber =() =>{

      let verifier = this.state.numbers;
      let randomNumber = Math.floor(Math.random()*9);
      let numberGenerated = randomNumber.toString();

      while(numberGenerated.includes(verifier)){

        generateRandomNumber()
      }

      return numberGenerated;

    };

    const xyz = () => {
       this.setState({
         numbers: [generateRandomNumber(),generateRandomNumber(),generateRandomNumber()]
       })
    };

    return (
      <div>
        <Button onClick={xyz}>function</Button>
        <div>{this.state.numbers}</div>
      </div>
    );
  }
}

export default VerifyNumber;
