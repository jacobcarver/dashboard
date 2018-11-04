import React, { Component } from 'react';
import '../scss/Weather.scss';

class Weather extends Component {
    constructor() {
        super();
        this.state = {
            hour: new Date().getHours(),
            minutes: new Date().getMinutes(),
            weekdays: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
        }
        this.current = {
            currentDay: this.state.weekdays[new Date().getDay()],
            day2: this.state.weekdays[new Date().getDay() + 1],
            day3: this.state.weekdays[new Date().getDay() + 2],
        }
    }
    render() {
        setTimeout(() => {
            this.setState({ minutes: new Date().getMinutes() });
        }, 10000);
        return (
            <div className="Weather">
                <div id="weather">

                    <div className="time">
                        <h5 id="time">
                            {`${12 < this.state.hour ? this.state.hour - 12 + ':' : this.state.hour + ':'}`}
                            {`${10 > this.state.minutes ? '0' + this.state.minutes : this.state.minutes }`}
                        </h5>
                        <div className="am-pm">
                            <span>{`${12 < this.state.hour ? 'PM' : 'AM'}`}</span>
                        </div>
                    </div>

                    <div className="forecast">
                        <div className="col">
                            <span className="day">{this.current.currentDay}</span>
                            <i className="fas fa-cloud"></i>
                            <span className="high-low">43 / 34</span>
                        </div>
                        <div className="col">
                            <span className="day">{this.current.day2}</span>
                            <i className="fas fa-tint"></i>
                            <span className="high-low">55 / 37</span>
                        </div>
                        <div className="col">
                            <span className="day">{this.current.day3}</span>
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