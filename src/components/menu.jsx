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
            <nav className="navbar navbar-expand-sm navbar-dark">
                <button onClick={(e) => {this.showDropdown(e)}} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={classDropdownMenu + "collapse navbar-collapse"} id="navbarNav">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item">
                            <a className={page === "/" ? "current nav-link" : "nav-link"} href="/">About</a>
                        </li>
                        <li className="nav-item">
                            {
                                page === "/"
                                ?  <AnchorLink offset='30' className="nav-link" href="#cv">CV</AnchorLink>
                                : <a className="nav-link" href="/#cv">CV</a>
                            }
                        </li>
                        <li className="nav-item">
                            <a className={page === "/thesis" ? "current nav-link" : "nav-link"} href="/thesis">Thesis</a>
                        </li>
                        <li className="nav-item">
                            <a className={page === "/games-portfolio" ? "current nav-link" : "nav-link"} href="/games-portfolio">Games Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className={page === "/websites-portfolio" ? "current nav-link" : "nav-link"} href="/websites-portfolio">Websites Portfolio</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Menu;
