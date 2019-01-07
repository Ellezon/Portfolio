import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <React.Fragment>
          <div id="contact" className="blue-section">
           <a target="__blank" href="https://www.linkedin.com/in/michelle-falzon/"> 
                <img alt="linkedIn" src="/img/linkedin.png"/>
            </a>
            <a target="__blank" href="https://github.com/Ellezon"> 
                <img alt="github" src="/img/github.png"/>
            </a>
            <a target="__blank" href="mailto:michelle_falzon@hotmail.com"> 
                <img alt="email" src="/img/email.png"/>
            </a>
           
          </div>
       
      </React.Fragment>
    )
  }
}

export default Contact;