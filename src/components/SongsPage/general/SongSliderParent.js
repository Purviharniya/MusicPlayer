import React, { Component } from 'react';
import SongSlider from './SongSlider.js'
import PlaySong from './PlaySong'

class SongSliderParent extends Component {
    // constructor(props){
    //     super(props);
    // };    

    render() {
        console.log(this.props.songsarr);
              return (
                <div className='new-parent'>
                <div className="d-block">
                <SongSlider>
                    {this.props.songsarr.map(musicItem => {
                        return (
                            <PlaySong key={musicItem.key}
                                id={musicItem.key}
                                name={musicItem.name}
                                artist={musicItem.artist}
                                imgSrc={musicItem.musicImage}
                                musicUrl={musicItem.musicUrl}
                                fun={this.props.fun}/>
                        );
                    })}
                </SongSlider>
                </div>

                
                </div>
        );
    }
}

export default SongSliderParent;