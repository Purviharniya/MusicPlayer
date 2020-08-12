import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(props){

    return(
        <nav className="navbar navbar-expand song-navbar">
            <ul className="navbar-nav">
                <li className="nav-item song-item-nav active">
                    <Link to="/" className="nav-link music-links">ALBUMS</Link>
                </li>

                <li className="nav-item song-item-nav">
                    <Link to="/playlist" className="nav-link music-links">PLAYLISTS</Link>
                </li>

                <li className="nav-item song-item-nav">
                    <Link to="/artists" className="nav-link music-links">ARTISTS</Link>
                </li>

                <li className="nav-item song-item-nav">
                    <Link to="/genres" className="nav-link music-links">GENRES</Link>
                </li>
                
            </ul>
        </nav>
    )
}

export default Navbar;