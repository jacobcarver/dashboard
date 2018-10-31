import React, { Component } from 'react';
import '../scss/Calendar.scss';

class Calendar extends Component {
    render() {
        return (
            <div className="Calendar">
                <div id="calendar">
                    <div className="month-selection">
                        <div className="left-arrow">
                            <i className="fas fa-arrow-left"></i>
                        </div>
                        <div className="active-month">
                            November 2018
                        </div>
                        <div className="right-arrow">
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </div>
                    <div className="weekdays">
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                        <span>Sun</span>
                    </div>
                    {/* 5 (height) x 7 (width) */}
                    <div id="days">
                        <div className="day empty">28</div>
                        <div className="day empty">29</div>
                        <div className="day empty">30</div>
                        <div className="day empty">31</div>
                        <div className="day">1</div>
                        <div className="day">2</div>
                        <div className="day">3</div>
                        <div className="day">4</div>
                        <div className="day">5</div>
                        <div className="day">6</div>
                        <div className="day">7</div>
                        <div className="day">8</div>
                        <div className="day">9</div>
                        <div className="day">10</div>
                        <div className="day current">11</div>
                        <div className="day">12</div>
                        <div className="day">13</div>
                        <div className="day">14</div>
                        <div className="day">15</div>
                        <div className="day">16</div>
                        <div className="day">17</div>
                        <div className="day">18</div>
                        <div className="day">19</div>
                        <div className="day">20</div>
                        <div className="day">21</div>
                        <div className="day">22</div>
                        <div className="day">23</div>
                        <div className="day">24</div>
                        <div className="day">25</div>
                        <div className="day">26</div>
                        <div className="day">27</div>
                        <div className="day">28</div>
                        <div className="day">29</div>
                        <div className="day">30</div>
                        <div className="day empty">1</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calendar;