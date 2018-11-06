import React, { Component } from 'react';
import '../scss/Calendar.scss';

class Calendar extends Component {
    constructor() {
        super();
        this.state = {
            // array of 12 months (calendar year)
            months: ['January 2018', 'February 2018', 'March 2018', 'April 2018', 'May 2018', 'June 2018', 'July 2018', 'August 2018', 'September 2018', 'October 2018', 'November 2018', 'Devember 2018', 'January 2019']
        }
        this.current = {
            // current day of the month
            currentDate: new Date().getDate(),
            // current month
            currentMonth: this.state.months[new Date().getMonth()],
        }
    }
    render() {
        return (
            <div className="Calendar">
                <div id="calendar">

                    <div className="month-selection">
                        <div className="active-month">
                            {/* current month */}
                            <h2>{this.current.currentMonth}</h2>
                        </div>
                        <i className="far fa-calendar"></i>
                    </div>

                    {/* 7 columns */}
                    <div className="weekdays">
                        <span>Sun</span>
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                    </div>

                    {/* 5 rows x 7 columns */}
                    <div id="days" className="month-days">
                        <div className="day empty">28</div>
                        <div className="day empty">29</div>
                        <div className="day empty">30</div>
                        <div className="day empty">31</div>
                        <div className={`day ${1 === this.current.currentDate ? 'current' : ''}`}>1</div>
                        <div className={`day ${2 === this.current.currentDate ? 'current' : ''}`}>2</div>
                        <div className={`day ${3 === this.current.currentDate ? 'current' : ''}`}>3</div>
                        <div className={`day ${4 === this.current.currentDate ? 'current' : ''}`}>4</div>
                        <div className={`day ${5 === this.current.currentDate ? 'current' : ''}`}>5</div>
                        <div className={`day ${6 === this.current.currentDate ? 'current' : ''}`}>6</div>
                        <div className={`day ${7 === this.current.currentDate ? 'current' : ''}`}>7</div>
                        <div className={`day ${8 === this.current.currentDate ? 'current' : ''}`}>8</div>
                        <div className={`day ${9 === this.current.currentDate ? 'current' : ''}`}>9</div>
                        <div className={`day ${10 === this.current.currentDate ? 'current' : ''}`}>10</div>
                        <div className={`day ${11 === this.current.currentDate ? 'current' : ''}`}>11</div>
                        <div className={`day ${12 === this.current.currentDate ? 'current' : ''}`}>12</div>
                        <div className={`day ${13 === this.current.currentDate ? 'current' : ''}`}>13</div>
                        <div className={`day ${14 === this.current.currentDate ? 'current' : ''}`}>14</div>
                        <div className={`day ${15 === this.current.currentDate ? 'current' : ''}`}>15</div>
                        <div className={`day ${16 === this.current.currentDate ? 'current' : ''}`}>16</div>
                        <div className={`day ${17 === this.current.currentDate ? 'current' : ''}`}>17</div>
                        <div className={`day ${18 === this.current.currentDate ? 'current' : ''}`}>18</div>
                        <div className={`day ${19 === this.current.currentDate ? 'current' : ''}`}>19</div>
                        <div className={`day ${20 === this.current.currentDate ? 'current' : ''}`}>20</div>
                        <div className={`day ${21 === this.current.currentDate ? 'current' : ''}`}>21</div>
                        <div className={`day ${22 === this.current.currentDate ? 'current' : ''}`}>22</div>
                        <div className={`day ${23 === this.current.currentDate ? 'current' : ''}`}>23</div>
                        <div className={`day ${24 === this.current.currentDate ? 'current' : ''}`}>24</div>
                        <div className={`day ${25 === this.current.currentDate ? 'current' : ''}`}>25</div>
                        <div className={`day ${26 === this.current.currentDate ? 'current' : ''}`}>26</div>
                        <div className={`day ${27 === this.current.currentDate ? 'current' : ''}`}>27</div>
                        <div className={`day ${28 === this.current.currentDate ? 'current' : ''}`}>28</div>
                        <div className={`day ${29 === this.current.currentDate ? 'current' : ''}`}>29</div>
                        <div className={`day ${30 === this.current.currentDate ? 'current' : ''}`}>30</div>
                        <div className="day empty">1</div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Calendar;