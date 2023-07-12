//make this component here to display the artist info to the screen

import React, {Component} from "react";




//dont need state, since this is just dissplaying
const Artist = ({ artist }) => {

    if (!artist) {return null}

    const { images, name, followers, genres } = artist

    return (
        <div>
            <h3>{name}</h3>
            <p>{followers.total} followers</p>
            <p>{genres.join()}</p>
            <img 
            src={images[0] && images[0].url} 
            alt='artist-profile'
            style={{
                width: 200,
                height: 200,
                borderRadius: 100,
                objectFit: 'cover'
            }}
        /> { /* The and helps to have a gaurd */ }
            
        </div>
    )
}

export default Artist