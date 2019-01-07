import React from 'react';
import Intro from './intro';
import Menu from './menu';
import About from './about';
import Cv from './cv';
import Contact from './contact';
import Highlights from './highlights';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Intro/>
        <Menu/>
        <About/>
        <Highlights/>
        <Cv/>
        <Contact/>
      </React.Fragment>
    )
  }
}

export default Home;