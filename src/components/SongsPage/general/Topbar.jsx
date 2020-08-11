import React, { Component } from 'react';

class Topbar extends Component {
    render() {
        return (
            <div className="row no-gutters">
                <div className="col-12 pt-3 py-4 song-topbar">
                    <div className="clearfix">
                        <input type="text" className="float-left form-search1 ml-2" placeholder="&#xf002;"/>
                        <div className="float-right align-middle pr-3">
                            <i className="fas fa-bars fa-xl song-icons" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Topbar;