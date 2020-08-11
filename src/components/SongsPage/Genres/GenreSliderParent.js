import React, { Component } from 'react';
import ChildSlider from '../general/ChildSlider'
import Genres from './Genres'
import {Link} from 'react-router-dom'

class GenreSliderParent extends Component {
    render() {
              return (
                  <div className='new-parent'>
                      <div className="d-block">
                      <ChildSlider>
                          {Genres.map(genre => {
                              return (
                                  <div key={genre.id} className='new-child'>
                                        <Link to={"genres/"+genre.id}>
                                            <img src={genre.genreimg} className="new-img" alt=" "/>
                                            <div className="genre-name">{genre.genrename}</div>
                                            <div className="song-length">
                                                {genre.songs.length===1
                                                    ?<div>{genre.songs.length} Song</div>
                                                    :<div>{genre.songs.length} Songs</div>
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

export default GenreSliderParent;