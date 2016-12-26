import React, { Component } from 'react';
import './App.css';
import './clean-blog.css';
import './index.css';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';

class App extends Component {
  render() {
    return(
      <div>
      {/* Navigation */}
      <Nav />
      {/* Page Header */}
      {/* Set your background image for this header on the line below. */}
      <Header />

      {/* Main Content */}
      <MainContent />

      <hr />

      {/* Footer */}
      <Footer />

      {/* jQuery */}
      <script src="vendor/jquery/jquery.min.js"></script>

      {/* Bootstrap Core JavaScript */}
      <script src="vendor/bootstrap/js/bootstrap.min.js"></script>

      {/* Contact Form JavaScript */}
      <script src="js/jqBootstrapValidation.js"></script>
      <script src="js/contact_me.js"></script>

      {/* Theme JavaScript */}
      <script src="js/clean-blog.min.js"></script>
      </div>
    )
  }
}

export default App;
