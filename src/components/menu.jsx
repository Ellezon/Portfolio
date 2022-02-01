import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isToggleOn: false
        };
        this.showDropdown = this.showDropdown.bind(this);
      }
    
    showDropdown(e) {
        e.preventDefault();
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }

       

    render() {
        let classDropdownMenu = this.state.isToggleOn ? 'show ' : ''
        let page = window.location.pathname;
        return (
            <nav className="navbar navbar-expand-sm navbar-dark blue-section">
                <button onClick={(e) => {this.showDropdown(e)}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={classDropdownMenu + "collapse navbar-collapse"} id="navbarNav">
                    <ul className="navbar-nav"> 
                        <li className="nav-item">
                            <a className={page === "/" ? "current nav-link" : "nav-link"} href="/">About</a>
                        </li>
                        <li className="nav-item">
                            {page === "/" && 
                                <AnchorLink offset='30' className="nav-link" href="#cv">CV</AnchorLink>}
                            {page === "/portfolio" && 
                                <a className="nav-link" href="/#cv">CV</a>}
                        </li>
                        <li className="nav-item">
                            <a className={page === "/portfolio" ? "current nav-link" : "nav-link"} href="/portfolio">Portfolio</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Menu;
