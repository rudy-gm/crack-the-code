import React, { Component } from "react";

class VerifyNumber extends Component {
  constructor(props) {
    super(props);

    this.state = {

        number1: Math.floor(Math.random()*9),
        number2: Math.floor(Math.random()*9),
        number3: Math.floor(Math.random()*9),
        
    }
}
  

  render() {
   
    function xyz(numbers){

        let numbersArray = this.numbers.map(number => number +2)

        return(
            <div>{numbersArray}</div>
        )
    }


    return <div>{this.state.number1}</div>
  }
}

export default VerifyNumber;
