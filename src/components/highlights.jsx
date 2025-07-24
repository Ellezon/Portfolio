import React from 'react';
import GitHubCalendar from './calendar';



class Highlights extends React.Component {
    constructor(props) {
        super(props);
        this.state = { width: window.screen.width };
        this.updateDimensions = this.updateDimensions.bind(this);
      }

    updateDimensions() {
        this.setState({width: window.screen.width});
    }
    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    render() {
        return (
            <div className="row blue-section" id="highlights">
                <React.Fragment>
                    <GitHubCalendar username="Ellezon" />
                </React.Fragment>
            </div>
        )
    }
}

export default Highlights;
