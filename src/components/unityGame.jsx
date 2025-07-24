import React from 'react';
import { Unity } from "react-unity-webgl";

class UnityGame extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            play: false,
        };
    }

    componentDidMount() {
        const { addEventListener } = this.props;

        // Use the modern event listener API
        if (addEventListener) {
            addEventListener("loaded", () => {
                this.setState({ isLoading: false });
            });
        }
    }

    componentWillUnmount() {
        const { removeEventListener } = this.props;

        if (removeEventListener) {
            removeEventListener("loaded");
        }
    }

    render() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <div dangerouslySetInnerHTML={{ __html: this.props.about }} />
                <div className="d-flex flex-column justify-content-center align-items-center">
                    {!this.state.play &&
                        <React.Fragment>
                            <div className="btn-wrapper d-flex flex-column justify-content-center align-items-center">
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={`/games/${this.props.link}`}
                                    onClick={() => this.setState({ isLoading: false, play: false })}
                                    className="btn btn-primary"
                                >
                                    Play in New Tab
                                </a>
                                {this.props.hasAPK && (
                                    <a
                                        className="btn btn-primary"
                                        href={`/games/${this.props.link}/${this.props.link}.apk`}
                                        onClick={() => this.setState({ isLoading: false, play: false })}
                                    >
                                        Download APK
                                    </a>
                                )}
                                {this.props.hasEXE && (
                                    <a
                                        className="btn btn-primary"
                                        href={`/games/${this.props.link}/${this.props.link}.exe`}
                                        onClick={() => this.setState({ isLoading: false, play: false })}
                                    >
                                        Download Executable
                                    </a>
                                )}
                            </div>
                            <img
                                src={`/img/${this.props.imgUrl}`}
                                className="game-img"
                                alt={`${this.props.name} Screenshot`}
                            />
                        </React.Fragment>
                    }

                    {this.state.isLoading && this.state.play &&
                        <React.Fragment>
                            <div className="btn btn-primary game-loader">Loading...</div>
                            <img
                                src={`/img/${this.props.imgUrl}`}
                                className="game-img"
                                alt={`${this.props.name} Screenshot`}
                            />
                        </React.Fragment>
                    }

                    {this.state.play &&
                        <Unity
                            className={!this.state.isLoading ? "" : "d-none"}
                            style={{ width: "1024px", height: "100%" }}
                            unityProvider={this.props.unityProvider}
                        />
                    }
                </div>
            </div>
        );
    }
}

export default UnityGame;
