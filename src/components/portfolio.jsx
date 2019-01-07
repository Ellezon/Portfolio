import React from 'react';
import Intro from './intro';
import Menu from './menu';

class Portfolio extends React.Component {
  render() {
    return ( 
        <React.Fragment>
        <Intro/>
        <Menu/>
        <h1>Portfolio</h1>
        </React.Fragment>
    );
  }
}

export default Portfolio;