import React from 'react';
import { motion } from 'framer-motion';

class Intro extends React.Component {
  render() {
    return (
      <React.Fragment>
          <div id="hero">
            <div className="container title d-flex align-items-center flex-nowrap justify-content-center">
                    <motion.div
                        initial={{ rotateY: 90, opacity: 0 }}
                        animate={{ rotateY: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        style={{ transformStyle: 'preserve-3d' }}
                        className="img-wrapper"
                    >
                        <img alt="headshot" src="/img/headshot.jpg" />
                    </motion.div>
                    <h1 className="section-title">Michelle Falzon</h1>
            </div>
            <div className="slogan">
              <div className="container">
                Hard work is the bridge between goals and accomplishment          
              </div>
            </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Intro;
