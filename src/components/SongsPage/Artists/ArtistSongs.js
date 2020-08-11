import React from 'react';
import Artists from './Artists'
import SongSliderParent from '../general/SongSliderParent'

function ArtistSongs(props){
    var aid=props.match.params.artistid;
  var arr= Artists.filter((musicItem) => {
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
export default ArtistSongs;