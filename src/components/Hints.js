import React, { Component } from "react";

class HintsComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const hasCorrectNum = this.props.gameNumbers[0];
    const fillSpace = this.props.gameNumbers[1];
    const oppositeNum = this.props.gameNumbers[2];

    return (
      <React.Fragment>
        <div className="container mt-3 hint-design">
          <div className="row">
            <div className="col">
              {fillSpace[0]}
              {hasCorrectNum[1]}
              {fillSpace[2]}
            </div>{" "}
            {/* 1st Line */}
          </div>
          <div className="row">
            <div className="col">One Number is Correct and Well Placed</div>
          </div>
        </div>

        <div className="container mt-3 hint-design">
          <div className="row">
            <div className="col">
              {fillSpace[2]}
              {fillSpace[1]}
              {hasCorrectNum[2]}
            </div>{" "}
            {/* 2nd Line */}
          </div>
          <div className="row ">
            <div className="col">One Number is Correct and Well Placed</div>
          </div>
        </div>

        <div className="container mt-3 hint-design">
          <div className="row">
            <div className="col">
              {fillSpace[0]}
              {hasCorrectNum[0]}
              {fillSpace[1]}
            </div>{" "}
            {/* 3rd Line */}
          </div>
          <div className="row">
            <div className="col">One Number is Correct but Wrongly Placed</div>
          </div>
        </div>
        <div className="container mt-3 hint-design">
          <div className="row">
            <div className="col">
              {oppositeNum[2]}
              {hasCorrectNum[0]}
              {hasCorrectNum[2]}
            </div>{" "}
            {/* 4th Line */}
          </div>
          <div className="row">
            <div className="col">
              Two Numbers are Correct. Only one is well placed
            </div>
          </div>
        </div>
        <div className="container mt-3 hint-design">
          <div className="row">
            <div className="col">
              {oppositeNum[0]}
              {oppositeNum[1]}
              {oppositeNum[2]}
            </div>{" "}
            {/* 5th Line */}
          </div>
          <div className="row">
            <div className="col">Nothing is Correct</div>
          </div>
        </div>

       
      </React.Fragment>
    );
  }
}

export default HintsComponent;
