import React, { Component } from 'react';
import ChildSlider from '../general/ChildSlider'
import Playlists from './Playlists'
import {Link} from 'react-router-dom'

class PlaylistSliderParent extends Component {
    render() {
        return (
            <div className='new-parent'>
                    <div className="d-block">
                      <ChildSlider>
                          {Playlists.map(playlist => {
                              return (
                                  <div key={playlist.id} className='new-child linked-child'>
                                        <Link to={"playlist/"+playlist.id}>
                                            <img src={playlist.playlistimg} className="new-img" alt=" "/>
                                            <div className="playlist-name">{playlist.playlistname}</div>
                                            <div className="song-length">
                                                {playlist.songs.length===1
                                                    ?<div>{playlist.songs.length} Song</div>
                                                    :<div>{playlist.songs.length} Songs</div>
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

export default PlaylistSliderParent;