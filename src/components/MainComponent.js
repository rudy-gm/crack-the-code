import React, { Component } from "react";
import { Route, Redirect, Routes, Router } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Header from "./Header";

class MainComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header></Header>

        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contact-me" element={<Contact></Contact>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </React.Fragment>
    );
  }
}

export default MainComponent;
