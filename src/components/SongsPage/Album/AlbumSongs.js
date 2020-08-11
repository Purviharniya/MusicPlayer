import React from 'react';
import Albums from './Albums'
import SongSliderParent from '../general/SongSliderParent'

function AlbumSongs(props){
    var aid=props.match.params.albumid;
  var arr= Albums.filter((musicItem) => {
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