import React from 'react';
import Genres from './Genres'
import SongSliderParent from '../general/SongSliderParent'

function AlbumSongs(props){
    var aid=props.match.params.genreid;
  var arr= Genres.filter((musicItem) => {
    return musicItem.id === parseInt(aid);
  });

  arr.map((musicItems) => console.log(musicItems.songs));
//   console.log(arr); 

  return(
      <div>
          {
             arr.map((musicItems)=>{
                   return <SongSliderParent songsarr={musicItems.songs} fun={props.fun} key={musicItems.id}/>
              })
         }

      </div>
  );
}
export default AlbumSongs;