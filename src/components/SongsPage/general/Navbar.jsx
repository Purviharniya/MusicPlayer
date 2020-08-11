import React from 'react';
import {NavLink} from 'react-router-dom';

function Navbar(props){

    return(
        <nav className="navbar navbar-expand song-navbar">
            <ul className="navbar-nav">
                <li className="nav-item song-item-nav active">
                    <NavLink to="/" className="nav-link music-links">ALBUMS</NavLink>
                </li>

                <li className="nav-item song-item-nav">
                    <NavLink to="/playlist" className="nav-link music-links">PLAYLISTS</NavLink>
                </li>

                <li className="nav-item song-item-nav">
                    <NavLink to="/artists" className="nav-link music-links">ARTISTS</NavLink>
                </li>

                <li className="nav-item song-item-nav">
                    <NavLink to="/genres" className="nav-link music-links">GENRES</NavLink>
                </li>
                
            </ul>
        </nav>
    )
}

export default Navbar;