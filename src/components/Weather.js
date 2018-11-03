import React, { Component } from 'react';
import '../scss/Weather.scss';

class Weather extends Component {
    constructor() {
        super();
        this.state = {
            hour: new Date().getHours(),
            minutes: new Date().getMinutes(),
            apiKey: '&appid=660ca7883daebef4c461e0fe71682b13',
        }
    }
    render() {
        setTimeout(() => {
            this.setState({ minutes: new Date().getMinutes() })
        }, 60000);
        return (
            <div className="Weather">
                <div id="weather">

                    <div className="time">
                        <h5 id="time">{this.state.hour + ':' + this.state.minutes}</h5>
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