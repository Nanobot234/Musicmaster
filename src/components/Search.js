import React, {Component} from "react";
import Artist from "./Artist";
import Tracks  from "./Tracks";

class Search extends Component {
    
    state = {artistQuery: "", tracks: []}
    updateArtistQuery = event => {
        console.log('event.target.value', event.target.value);
        this.setState({artistQuery: event.target.value})
      }
        //function that will check what key whs pressed by user and run anothe function as a result
  
      handleKeyPress = event => {
        if(event.key === 'Enter'){
          this.searchArtist();
        }
      }

      searchArtist = () => {
        this.props.searchArtist(this.state.artistQuery)
      }
    
    
    render() {
        return (
            //HTM goes in here
            //profile is imported, using import statement
            <div>
            <input 
            onChange={this.updateArtistQuery} //this here will call the code everytime the input enterted by the user is changd
            onKeyUp={this.handleKeyPress}
            placeholder="Search For An Artist"></input>
            <button onClick={this.searchArtist}>Search</button>
            <Artist artist={this.state.artist}></Artist>
            <Tracks tracks ={this.state.tracks}></Tracks> 
            
           </div>   
          );
    }

}
export default Search;