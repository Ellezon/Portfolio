import React from 'react';
import Unity from "react-unity-webgl";


class unityGame extends React.Component {
  constructor(props) {
    super(props);

    this.state = { 
      isLoading: true,
      play: false, 
    }

    this.props.content.on("loaded", () => {
      this.setState({
        isLoading: false
      });
    });  
  }
  render() {
    return (
          <div>
            <h3>{this.props.name} </h3>
            <p> {this.props.about} </p>
            <div className="d-flex flex-column justify-content-center align-items-center">
            {this.state.play === false &&
                <React.Fragment>
                  <div className="btn-wrapper d-flex flex-column justify-content-center align-items-center">
                    <div className="btn btn-primary" onClick={() => this.setState({play: true})}>
                        <div className="play-icon"></div>
                    </div>
                    <a target="_blank" rel="noopener noreferrer" href={"/games/"+this.props.name.replace(' ','')} onClick={() =>this.setState({isLoading: false, play: false})} className="btn btn-primary">Play in New Tab</a>    
                    {this.props.hasAPK === true &&
                      <a className="btn btn-primary" href={"/games/"+this.props.name.replace(' ','')+"/pacman.apk"} onClick={() =>this.setState({isLoading: false, play: false})}>Download APK </a>    
                    }
                </div>
                <img src={"/img/"+this.props.imgUrl} className="game-img" alt={this.props.name +" Screenshot"}/>
              </React.Fragment>
            }
            {this.state.isLoading === true &&  this.state.play === true &&
              <React.Fragment>
                <div className="btn btn-primary game-loader">
                    Loading...
                </div>
                <img src={"/img/"+this.props.imgUrl} className="game-img" alt={this.props.name +" Screenshot"}/>
                </React.Fragment>
            }
            {this.state.play === true && 
              <Unity className={this.state.isLoading === false?"":"d-none"} height="100%" width="1024px" unityContent={this.props.content}/>
            }
            </div>

          </div>
        );
      }
    }
    
export default unityGame;