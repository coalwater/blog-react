import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return(
      <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
        <div className="container-fluid">
          {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header page-scroll">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                Menu
                <i className="fa fa-bars"></i>
              </button>
              <a className="navbar-brand" href="index.html">Start Bootstrap</a>
            </div>

          {/* Collect the nav links, forms, and other content for toggling */}
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="about.html">About</a>
              </li>
              <li>
                <a href="post.html">Sample Post</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
          {/* /.navbar*/}
        </div>
        {/* /.container */}
      </nav>
    )
  }
}

export default Nav;
