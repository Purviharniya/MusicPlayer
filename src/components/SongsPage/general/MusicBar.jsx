import React, { useState, useRef } from "react";
    
function MusicBar(props)
{
  const [isPlaying,musicPlayPause]=useState(true);
  const audio=useRef('audio_tag');
  const [timeduration,setDuration]=useState(0);
  const [currenttime,setCurrTime]=useState(0);
  
  function playPause()
  {
   if(audio.current.paused)
   {
   audio.current.play();
   }
   else
   audio.current.pause();

   musicPlayPause(!isPlaying);
  }

 
  function end()
  {
    musicPlayPause(!isPlaying)
  }   

  const handleProgress = (e) => {
    let compute = (e.target.value * timeduration) / 100;
    setCurrTime(compute);
    audio.current.currentTime = compute
  }

  const fmtMSS = (s) => { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~(s) }
  
  return (
  
    <div className="row no-gutters py-5 text-center">

    <div className="col-12 col-md-4">
        <div className="d-flex flex-row justify-content-center">
            <img id="playerimg" width="70px" height="70px" src={props.musicImg} alt=" " className="img-thumbnail"/>
            <div className="d-flex flex-column pl-3">
                <span className="row no-gutters"  id="songname">{props.songname}</span>
                <span className="row no-gutters" id="artistname">{props.artist}</span>
            </div>
        </div>
    </div>

    <div className="col-12 col-md-2" >
        <div className="col d-flex justify-content-center">
            <div onClick={props.prevSong}  data-toggle="tooltip" title="Previous" className='my-3 theme-dark'>
                <span className="fas fa-step-backward fa-sm"></span>
            </div>
            <div onClick={playPause}  data-toggle="tooltip" title="Play" className="ml-3 mr-3 my-2 theme-purple">
                <span className={isPlaying?'fas fa-pause fa-lg padd-play-pause':'fas fa-play fa-lg padd-play-pause'}></span>
            </div>
            <div  onClick={props.nextSong}  data-toggle="tooltip" title="Next" className=" my-3 theme-dark">
                <span className="fas fa-step-forward fa-sm"></span>
            </div>
        </div>
    </div>

    <div className="col-12 col-md-6">
        <div className="slidecontainer">
            <span className=" mt-2 ml-1 pr-2 overflow-auto">{fmtMSS(currenttime)}</span>

                <audio  autoPlay loop ref={audio} src={props.musicurl} 
                onLoadedData={()=>musicPlayPause(true)} 
                onCanPlay={(e)=>{setDuration(e.target.duration) }} 
                preload="auto"    
                onTimeUpdate={(e)=> setCurrTime(e.target.currentTime)} 
                onEnded={()=>{end()}}
                type="audio/mp3" />

            <input  onChange={handleProgress} value={timeduration ? (currenttime * 100) / timeduration : 0}  type="range"  min="0" step="0.2" className="songbar mt-3 cursor" id="myRange"/>  
        </div>
    </div>
</div>

);
 


}
export default MusicBar;