import React,{useState} from 'react';

function PlaySong(props) {
    const [songs,setSongs]=useState({
        id:props.id,
        songname:props.name,
        artistname:props.artist,
        songurl:props.musicUrl,
        imgurl:props.imgSrc
      });
      
         function playSong()
         {  
            setSongs({
                 id:props.id,
                 songname:props.name,
                 artistname:props.artist,
                 songurl:props.musicUrl,
                 imgurl:props.imgSrc
            });
             props.fun(songs);
         }
         
     return (
        <div key={props.id} className='new-child' onClick={playSong}>
               <img src={props.imgSrc} className="new-img" alt=" "/>
               <div className="song-name-s">{props.name}</div>
               <div className="artist-name-s">{props.artist} </div>
        </div>
        );
    }

export default PlaySong;