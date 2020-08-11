import React from 'react';
import Playlists from './Playlists'
import SongSliderParent from '../general/SongSliderParent'

function PlaylistSongs(props){
    var aid=props.match.params.playlistid;
  var arr= Playlists.filter((musicItem) => {
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
export default PlaylistSongs;