import React, { Component } from 'react';
import '../scss/Weather.scss';
var request = require('request');

class Weather extends Component {
    constructor() {
        super();
        this.state = {
            hour: new Date().getHours(),
            minutes: new Date().getMinutes(),
            weekdays: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
            apiKey: '&APPID=660ca7883daebef4c461e0fe71682b13',
            unit: '&units=imperial',
            lat: '',
            lng: '',
        }
        this.current = {
            currentDay: this.state.weekdays[new Date().getDay()],
            day2: this.state.weekdays[new Date().getDay() + 1],
            day3: this.state.weekdays[new Date().getDay() + 2],
            url: 'http://api.openweathermap.org/data/2.5/forecast?',
        }
    }

    componentWillMount() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                // set latitude
                let lat = position.coords.latitude
                // set longitude
                let lng = position.coords.longitude
                // update latitude and longitude
                this.setState({
                    lat: lat,
                    lng: lng
                })
                request(this.current.url + 'lat=' + this.state.lat + '&lon=' + this.state.lng + this.state.apiKey + this.state.unit, function (error, response, body) {
                    if (!error && response.statusCode === 200) {

                        // parse api data
                        var data = JSON.parse(body);
                        // console.log(data);

                        // image icon links
                        document.getElementById('day1').childNodes[0].attributes[0].nodeValue = 'http://openweathermap.org/img/w/' + data.list[0].weather[0].icon + '.png';
                        document.getElementById('day2').childNodes[0].attributes[0].nodeValue = 'http://openweathermap.org/img/w/' + data.list[1].weather[0].icon + '.png';
                        document.getElementById('day3').childNodes[0].attributes[0].nodeValue = 'http://openweathermap.org/img/w/' + data.list[2].weather[0].icon + '.png';

                        // image alt values
                        document.getElementById('day1').childNodes[0].attributes[1].nodeValue = 'alt change';
                        document.getElementById('day2').childNodes[0].attributes[1].nodeValue = 'alt change';
                        document.getElementById('day3').childNodes[0].attributes[1].nodeValue = 'alt change';

                        // highs and lows
                        document.getElementById('day1').childNodes[1].innerHTML = Math.round(data.list[0].main.temp_max) + ' / ' + Math.round(data.list[0].main.temp_min);
                        document.getElementById('day2').childNodes[1].innerHTML = Math.round(data.list[1].main.temp_max) + ' / ' + Math.round(data.list[1].main.temp_min);
                        document.getElementById('day3').childNodes[1].innerHTML = Math.round(data.list[2].main.temp_max) + ' / ' + Math.round(data.list[2].main.temp_min);
                    } else {
                        console.log('Error Getting Weather');
                    }
                });
            },
            (error) => {
                console.log('Error Getting Loaction: ' + error)
            },
        );
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
                            {/* 12 hour format */}
                            {`${12 < this.state.hour ? this.state.hour - 12 + ':' : this.state.hour + ':'}`}
                            {/* if minutes is a single digit, a '0' is added before */}
                            {`${10 > this.state.minutes ? '0' + this.state.minutes : this.state.minutes }`}
                        </h5>
                        <div className="am-pm">
                            {/* checks if the time is am or pm */}
                            <span>{`${12 < this.state.hour ? 'PM' : 'AM'}`}</span>
                        </div>
                    </div>

                    <div className="forecast">
                        <div className="col" id="day1">
                            <img src="http://openweathermap.org/img/w/10d.png" alt="Weather Icon"></img>
                            <span className="high-low">h / l</span>
                        </div>
                        <div className="col" id="day2">
                            <img src="http://openweathermap.org/img/w/10d.png" alt="Weather Icon"></img>
                            <span className="high-low">h / l</span>
                        </div>
                        <div className="col" id="day3">
                            <img src="http://openweathermap.org/img/w/10d.png" alt="Weather Icon"></img>
                            <span className="high-low">h / l</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Weather;