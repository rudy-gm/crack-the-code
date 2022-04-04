import React, {Component} from "react";
import {Link} from 'react-router-dom'

class Footer extends Component{

    render(){
        return (
            <footer className="site-footer">
              <div className="container">
                <div className="row">
                  <div className="col-4 col-sm-2 offset-1">
                    <h5 className="footer-links">Links</h5>
                    <ul className="list-unstyled">
                      <li>
                        <Link to="/home">Home</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/contact-me">Contact Me</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-6 col-sm-3 text-center">
                    <h5 className="footer-links">Social</h5>
                    <a
                      className="btn btn-social-icon btn-instagram icons-background"
                      href="http://instagram.com/"
                    >
                      <i className="fa fa-instagram" />
                    </a>{" "}
                    <a
                      className="btn btn-social-icon btn-facebook icons-background"
                      href="http://www.facebook.com/"
                    >
                      <i className="fa fa-facebook" />
                    </a>{" "}
                    <a
                      className="btn btn-social-icon btn-twitter icons-background"
                      href="http://twitter.com/"
                    >
                      <i className="fa fa-twitter" />
                    </a>{" "}
                    <a
                      className="btn btn-social btn-google icons-background"
                      href="http://youtube.com/"
                    >
                      <i className="fa fa-youtube icons-background" />
                    </a>
                  </div>
                  <div className="col-sm-4 text-center">
                    <a role="button" className="btn btn-link" href="tel:+12065551234">
                      <i className="fa fa-phone" /> 123-456-789
                    </a>
                    <br />
                    <a
                      role="button"
                      className="btn btn-link"
                      href="mailto:notreal@notreal.co"
                    >
                      <i className="fa fa-envelope-o" /> gutierrezrodolfo80@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          );
    }

}

export default Footer