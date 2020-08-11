import React from 'react';
import NewSlider from './NewSlider'
import Music from './Music'
import PlaySong from '../general/PlaySong'

function NewSliderParent(props){
            return (
                  <div className='new-parent'>
                      <div className="d-block">
                      <NewSlider>
                          {Music.map(musicItem => {
                              return (
                                <PlaySong key={musicItem.key}
                                id={musicItem.key}
                                name={musicItem.name}
                                artist={musicItem.artist}
                                imgSrc={musicItem.musicImage}
                                musicUrl={musicItem.musicUrl}
                                fun={props.fun}/>
                              );
                          })}
                      </NewSlider>
                      </div>
                </div>
        );
    }

export default NewSliderParent;