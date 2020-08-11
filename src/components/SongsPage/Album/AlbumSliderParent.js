import React, { Component } from 'react';
import ChildSlider from '../general/ChildSlider';
import Albums from './Albums'
import {Link} from 'react-router-dom'

class AlbumSliderParent extends Component {
    render() {
              return (
                  <div className='new-parent'>
                      <div className="d-block">
                      <ChildSlider>
                          {Albums.map(album => {
                              return (
                                  <div key={album.id} className='new-child'>
                                        <Link to={"albumlist/"+album.id}>
                                            <img src={album.albumimg} className="new-img" alt=" "/>
                                            <div className="album-name">{album.albumname}</div>
                                            <div className="song-length">
                                                {album.songs.length===1
                                                    ?<div>{album.songs.length} Song</div>
                                                    :<div>{album.songs.length} Songs</div>
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

export default AlbumSliderParent;