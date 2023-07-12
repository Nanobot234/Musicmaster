
import React, {Component} from "react";
import Artist from "./Artist";
import Tracks from "./Tracks";
import Search from "./Search";

class RegularClass {}
class ComponentClass extends Component {}

const regularClassInstance = new RegularClass
const componentClassInstance = new ComponentClass
const API_ADDRESS = "https://spotify-api-wrapper.appspot.com" //used in the fetch
//curly braces allow us  to bring javascript logic in HTML to be used!!

//stateless component to get the artisty

class App extends Component {

  componentDidMount() {
    this.searchArtist('Khalid');
  }

  //artist object and toptracks stored in app components array
    state = {artistQuery: '', tracks: []};

    //function here sets the stat
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

  
    //now will render the artist that I got
    
    //artist query is passed down to it, and then it is used
    searchArtist = artistQuery => {
      console.log('this.state', this.state);

      fetch(`${API_ADDRESS}/artist/${artistQuery}`)
        .then(response => response.json())
        .then(json => {
            console.log('json', json);
        

        if (json.artists.total > 0){
          const artist = json.artists.items[0]; //gets the first artist

         // console.log('artist', artist);
          this.setState({artist});

          //nests fetch for the top tracks
          //in the concatenation, it seems that forward slash is used
          fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
              .then(response => response.json())
              .then(json => this.setState({ tracks: json.tracks }))
              .catch(error => alert(error.message));
        }
      })
      //catch here is for the inital artist info , to get the errors that may appear
      .catch(error => alert(error.message));
    } 

  render() {
    //what is rendered here is the MAIN application 
      //the following is what you return , that will be rendered, m

      console.log('this.state',this.state)
    return (
      //HTM goes in here
      //profile is imported, using import statement
      <div>
      <h2>Music Master</h2>
      
      <Search searchArtist={this.searchArtist}></Search>
      <Artist artist={this.state.artist}></Artist>
      <Tracks tracks ={this.state.tracks}></Tracks> 
      
     </div>   
    );
  }
}
  export default App


