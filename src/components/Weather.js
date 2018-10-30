import React, { Component } from 'react';
import '../scss/Weather.scss';

class Weather extends Component {
    render() {
        return (
            <div className="Weather">
                <div id="weather">
                    <div className="time">
                        <h5 id="time">6:24</h5>
                        <div className="am-pm">
                            <span>AM</span>
                            <span>PM</span>
                        </div>
                    </div>
                    <div className="forecast">
                        <div className="col">
                            <span className="day">TODAY</span>
                            <i className="fas fa-cloud"></i>
                            <span className="high-low">43 / 34</span>
                        </div>
                        <div className="col">
                            <span className="day">TUE</span>
                            <i className="fas fa-tint"></i>
                            <span className="high-low">55 / 37</span>
                        </div>
                        <div className="col">
                            <span className="day">WED</span>
                            <i className="far fa-snowflake"></i>
                            <span className="high-low"> 38 / 16</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Weather;