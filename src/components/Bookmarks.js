import React, { Component } from 'react';
import '../scss/Bookmarks.scss';

class Bookmarks extends Component {
    render() {
        return (
            <div className="Bookmarks">
                <div id="bookmarks">

                    <div className="header">
                        <div className="title">
                            <h2>Bookmarks</h2>
                        </div>
                        <div className="bookmark-add">
                            <span id="bookmark-add">Add Bookmark <i className="fas fa-plus"></i></span>
                        </div>
                    </div>

                    <div className="content">
                        <div className="bookmark">
                            <div className="top">
                                <div className="category school">School</div>
                                <span>Uploaded Oct. 17</span>
                            </div>
                            <div className="bottom">
                                <h3 className="title">Supporting Docs.</h3>
                                <h3 className="link"><i className="fas fa-cloud-download-alt"></i> Download PDF</h3>
                            </div>
                        </div>
                        <div className="bookmark">
                            <div className="top">
                                <div className="category business">Business</div>
                                <span>Uploaded Oct. 24</span>
                            </div>
                            <div className="bottom">
                                <h3 className="title">Updated Resume</h3>
                                <h3 className="link"><i className="far fa-file-alt"></i> View Doc</h3>
                            </div>
                        </div>
                        <div className="bookmark">
                            <div className="top">
                                <div className="category personal">Personal</div>
                                <span>Uploaded Nov. 1</span>
                            </div>
                            <div className="bottom">
                                <h3 className="title">Account Management</h3>
                                <h3 className="link"><i className="far fa-credit-card"></i> View Balance</h3>
                            </div>
                        </div>
                        <div className="bookmark">
                            <div className="top">
                                <div className="category school">School</div>
                                <span>Uploaded Nov. 9</span>
                            </div>
                            <div className="bottom">
                                <h3 className="title">Ch. 11 &bull; Psychology Notes</h3>
                                <h3 className="link"><i className="far fa-file-alt"></i> View Doc</h3>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Bookmarks;