import React, {useState } from 'react';
import Sidebar from '../../components/SongsPage/general/Sidebar';
import Topbar from '../../components/SongsPage/general/Topbar';
import NewSliderParent from '../../components/SongsPage/NewReleases/NewSliderParent';
import AlbumSliderParent from '../../components/SongsPage/Album/AlbumSliderParent';
import PlaylistSliderParent from '../../components/SongsPage/Playlist/PlaylistSliderParent';
import AlbumSongs from '../../components/SongsPage/Album/AlbumSongs';
import PlaylistSongs from '../../components/SongsPage/Playlist/PlaylistSongs';
import ArtistSliderParent from '../../components/SongsPage/Artists/ArtistSliderParent';
import ArtistSongs from '../../components/SongsPage/Artists/ArtistSongs';
import GenreSliderParent from '../../components/SongsPage/Genres/GenreSliderParent';
import GenreSongs from '../../components/SongsPage/Genres/GenreSongs';
import Navbar from '../../components/SongsPage/general/Navbar';
import MusicBar from '../../components/SongsPage/general/MusicBar';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import './SongsPage.css';

function SongsPage(){
    const [playsong,toggleSong]=useState(false);
    const [music,setSongs]=useState([]);    
    function deleteSong(id)
    {
        setSongs(prevSongs=> {
            return prevSongs.filter((songItem) => {
              return songItem.id !== id;
            });
          });
    }
    
    function addSong(songs)
    { 
      deleteSong(songs.id)
      setSongs(prevSongs=>{
          return [...prevSongs,songs];
      }) 
      toggleSong(true);
    }
    function addprevSong(songs)
    { 
      deleteSong(songs.id)
      setSongs(prevSongs=>{
          return [songs,...prevSongs];
      }) 
      toggleSong(true);
    }
    
    function nextSong()
    {
        
        var arr=music.slice(0,1);
             arr.map((newItem)=>{
            return addSong(newItem)  
        })
        
    }
    function prevSong()
    {
        var music1=music.slice(music.length-1,music.length);
        music1.map((newItem1)=>{    
            return addprevSong(newItem1)  
        })
        
    }
    var arr=music.slice(music.length-1,music.length);

        return (
        <BrowserRouter>
                 <div className="bg-bluishgreen">
                    <div className="light-theme">
                        <div className="row no-gutters">
                            <Sidebar/>     
                            <div className="col-10 col-md-11">
                                <Topbar/>
                                <div className="row no-gutters">
                                    <div className="col-12">
                                        <NewSliderParent fun={addSong}/>
                                    </div>
                                </div>

                                <div className="row no-gutters mt-2">
                                    <div className="col-12">
                                        <Navbar />
                                    </div>
                                    
                                    <div className="col-12">
                                    <Switch>
                                        <Route exact path="/" component={AlbumSliderParent} />
                                        <Route path="/albumlist/:albumid" exact render={(props) => <AlbumSongs fun={addSong} {...props} />} />
                                        <Route exact path="/playlist" component={PlaylistSliderParent} />
                                        <Route path="/playlist/:playlistid" exact render={(props) => <PlaylistSongs fun={addSong} {...props} />} />
                                        <Route exact path="/artists" component={ArtistSliderParent} />
                                        <Route path="/artists/:artistid" exact render={(props) => <ArtistSongs fun={addSong} {...props} />} />
                                        <Route exact path="/genres" component={GenreSliderParent} />
                                        <Route path="/genres/:genreid" exact render={(props) => <GenreSongs fun={addSong} {...props} />} />
                                    </Switch>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={playsong===false?"hide":"show"}> 
                        { 
                            arr.map((songs)=>{
                        return  <MusicBar key={songs.id} songname={songs.songname} artist={songs.artistname}
                            musicurl={songs.songurl}
                            musicImg={songs.imgurl}
                            state={false}
                            nextSong={nextSong}
                            prevSong={prevSong} />
                        })} 
                    </div>  
                </div>
        </BrowserRouter>
        );
    }

export default SongsPage;