import React, { Component } from 'react';
import ChildSlider from '../general/ChildSlider'
import Artists from './Artists'
import {Link} from 'react-router-dom'

class ArtistSliderParent extends Component {
    render() {
              return (
                  <div className='new-parent'>
                      <div className="d-block">
                      <ChildSlider>
                          {Artists.map(artist => {
                              return (
                                  <div key={artist.id} className='new-child'>
                                        <Link to={"artists/"+artist.id}>
                                            <img src={artist.artistimg} className="new-img" alt=" "/>
                                            <div className="artist-name">{artist.artistname}</div>
                                            <div className="song-length">
                                                {artist.songs.length===1
                                                    ?<div>{artist.songs.length} Song</div>
                                                    :<div>{artist.songs.length} Songs</div>
                                                }
                                            </div>
                                        </Link>

                                  </div>
                                
                              );
                          })}
                      </ChildSlider>
                      </div>

                      </div>
        );
    }
}

export default ArtistSliderParent;