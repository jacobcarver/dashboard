import React, { Component } from 'react';
import '../scss/Events.scss';

class Events extends Component {
    render() {
        return (
            <div className="Events">

                <div id="events-top">
                    <div className="header">
                        <div className="title">
                            <h2>Coming Up</h2>
                        </div>
                        <div className="event-types">
                            <div className="business">
                                <span>2</span>
                            </div>
                            <div className="school">
                                <span>2</span>
                            </div>
                            <div className="personal">
                                <span>1</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="events-content">
                    <div className="event">
                        <div className="type blue">Business</div>
                        <h2>Analyze article submission</h2>
                        <span>Oct. 30, 2018</span>
                    </div>
                    <div className="event">
                        <div className="type purple">Personal</div>
                        <h2>Finish 3D clay art piece</h2>
                        <span>Oct. 31, 2018</span>
                    </div>
                    <div className="event">
                        <div className="type blue">Business</div>
                        <h2>Final revision of article</h2>
                        <span>Nov. 5, 2018</span>
                    </div>
                    <div className="event">
                        <div className="type yellow">School</div>
                        <h2>Section #4 comprehension test</h2>
                        <span>Nov. 8, 2018</span>
                    </div>
                    <div className="event">
                        <div className="type yellow">School</div>
                        <h2>Unit Quiz: Structural Architecture</h2>
                        <span>Nov. 17, 2018</span>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Events;