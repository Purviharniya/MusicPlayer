import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class Sidebar extends Component {
    render() {
        return (
            <div className="col-2 col-md-1 song-sidebar">
                        <div className="d-flex flex-column text-center">
                            <div className="logo-png">
                                <img src={require('../../../assets/Songspage/logo.png')} className="side-logo" alt="logo" />
                            </div>
                            <Link to="/">
                                <i className="fas fa-home song-icons py-4" />
                            </Link>
                            <Link to="/">
                                <i className="fas fa-star song-icons py-4" />
                            </Link>
                            <Link to="/">
                                <i className="fas fa-heart song-icons py-4" />
                            </Link>
                            <Link to="/">
                                <i className="fas fa-folder song-icons py-4"/>
                            </Link>
                            <Link to="/">
                                <i className="fas fa-cog song-icons py-4" />
                            </Link>
                        </div>
                    </div>
        );
    }
}

export default Sidebar;