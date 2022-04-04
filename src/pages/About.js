import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container white-color">
        <div className="row">
          <div className="col">
            <p>
              Crack The Code is a game about logic, you're basically given a
              ceratin amount of hints of 3-digits numbers and based on that you
              have to figure out what is the correct combination.<br></br><br></br>

              This application has a certain amount of features in order to make the game work. The most important one is mentioning it's build with React, which allows us to storage data in the state of each component. 
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
