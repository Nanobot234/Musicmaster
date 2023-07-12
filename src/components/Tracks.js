import React, { Component } from "react";

class Tracks extends Component {

    state = {playing: false, audio: null, playingPreviewUrl: null}; //add audio as state since you want to use the same audio object!
    //now healper method
    playAudio = previewUrl => () => {
        const audio = new Audio(previewUrl);

        audio.addEventListener("canplaythrough", (event) => {
           if(!this.state.playing) {
            audio.play()
            this.setState({playing: true, audio, playingPreviewUrl: previewUrl}) //puts the url thats playing into the state!
           } else {
            this.state.audio.pause();
            this.setState({playing:false})
           
            //this checks if you are pausing
            if(this.state.playingPreviewUrl = previewUrl) {
                this.setState({playing:false})
            } else {
                //if no, then
                audio.play()
                this.setState({audio, playingPreviewUrl: previewUrl}) //dont ned to set playing since its already false
            }
           
        }
        }

        
        )

        //need to see howt to  promoise??


    }

        //callback
    trackIcon = track => {

        if(!track.preview_url) {
            return <span>N/A</span>
        }

        if(this.state.playing && this.state.playingPreviewUrl == track.preview_url) {
            return <span>| |</span>
        }

        return <span>&#9654;</span> //play button
    }

     
    render() {
        const {tracks} = this.props //will get the tracks, from the parent class

        return (
            <div>
                {
                    tracks.map( track => {
                        const {id, name, album, preview_url} = track //coomes from json
                        
                        //will have return here , becuasse want to get image of each track too

                        return (
                            //get image
                            <div key={id}
                            onClick={this.playAudio(preview_url)}
                            className="track"
                            >
                                <img src={album.images[0].url} 
                                alt="track-imaqe"
                                className="track-image"
                                 ></img>
                                <p className="track-text">{name}</p>

                                <p className="track-text">{name}</p>
                                <p className="track-icon">{this.trackIcon(track)}</p>
                            </div>


                        )
                    })
                }
            </div>
        )
    }

}

export default Tracks //to send the tracks to the app class