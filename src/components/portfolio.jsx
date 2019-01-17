import React from 'react';
import Intro from './intro';
import Menu from './menu';

class Portfolio extends React.Component {
  render() {
    return ( 
        <React.Fragment>
        <Intro/>
        <Menu/>
        <div className="container">
          <div className="row">
            <div className="d-flex flex-column col-12">
              <h1 id="portfolio" className="section-title">Portfolio</h1>
            </div>
          </div>
        </div>
        </React.Fragment>
    );
  }
}

export default Portfolio;