import React from 'react';

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isToggleOn: false
        };
      }
      showDropdown(e) {
        e.preventDefault();
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }
    render() {
        let classDropdownMenu = this.state.isToggleOn ? 'show ' : ''
        return (
            <nav className="navbar navbar-expand-sm navbar-dark blue-section">
             <a className="navbar-brand" href="/">Ellezon</a>
                <button onClick={(e) => {this.showDropdown(e)}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={classDropdownMenu + "collapse navbar-collapse"} id="navbarNav">
                    <ul className="navbar-nav"> 
                        <li className="nav-item">
                            <a className="nav-link" href="/#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#cv">CV</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/portfolio">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Menu;
