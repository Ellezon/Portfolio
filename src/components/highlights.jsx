import React from 'react';
import { Carousel, CarouselCaption, CarouselInner, CarouselItem } from "mdbreact";
import Fade from 'react-reveal/Fade';



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
                {this.state.width <= 768 &&
                    <Carousel activeItem={1} length={3} showControls={true} showIndicators={true} className="z-depth-1">
                        <CarouselInner>
                            <CarouselItem itemId="1">
                                <img alt="trophy" src="/img/trophy.png" />
                                <CarouselCaption>
                                    <p className="award-caption">Raketech Ownership Award Winner</p>
                                </CarouselCaption>
                            </CarouselItem>
                            <CarouselItem itemId="2">
                                <img alt="podium" src="/img/podium.png" />
                                <CarouselCaption>
                                    <p className="award-caption">Raketech Innovation Day Winning Team</p>
                                </CarouselCaption>
                            </CarouselItem>
                            <CarouselItem itemId="3">
                                <img alt="medal" src="/img/medal.png" />
                                <CarouselCaption>
                                    <p className="award-caption">Raketech Teamwork Award Winner</p>
                                </CarouselCaption>
                            </CarouselItem>
                        </CarouselInner>
                    </Carousel>
                }
                {this.state.width > 768 &&
                    <React.Fragment>
                        <Fade left opposite cascade>
                        <div className="col-sm-4 col-md-3">
                            <img alt="trophy" src="/img/trophy.png" />
                            <p className="award-caption">Raketech Ownership Award</p>
                        </div>
                        </Fade>
                        <Fade left opposite cascade>
                        <div className="col-sm-4 col-md-3">
                            <img alt="podium" src="/img/podium.png" />
                            <p className="award-caption">Raketech Innovation Day Winning Team</p>
                        </div>
                        </Fade>
                        <Fade left opposite cascade>
                        <div className="col-sm-4 col-md-3">
                            <img alt="medal" src="/img/medal.png" />
                            <p className="award-caption">Raketech Teamwork Award</p>
                        </div>
                        </Fade>
                    </React.Fragment>
                }
            </div>
        )
    }
}

export default Highlights;