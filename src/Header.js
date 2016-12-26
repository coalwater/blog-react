import React, { Component } from 'react';

class Header extends Component {
  render() {
    const title = 'Mohammad AbuShady';
    const subtitle = 'A backend developer';

    return(
    <header className="intro-header">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                    <div className="site-heading">
                        <h1>{title}</h1>
                        <hr className="small" />
                        <span className="subheading">{subtitle}</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
  }
}

export default Header;
