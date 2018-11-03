import React, { Component } from 'react';
import '../scss/Calendar.scss';

class Calendar extends Component {
    constructor() {
        super();
        this.state = {
            currentDate: new Date().getDate(),
        }
    }
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

                    {/* 7 columns */}
                    <div className="weekdays">
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                        <span>Sun</span>
                    </div>

                    {/* 5 rows x 7 columns */}
                    <div id="days" className="month-days">
                        <div className="day empty">28</div>
                        <div className="day empty">29</div>
                        <div className="day empty">30</div>
                        <div className="day empty">31</div>
                        <div className={`day ${1 === this.state.currentDate ? 'current' : ''}`}>1</div>
                        <div className={`day ${2 === this.state.currentDate ? 'current' : ''}`}>2</div>
                        <div className={`day ${3 === this.state.currentDate ? 'current' : ''}`}>3</div>
                        <div className={`day ${4 === this.state.currentDate ? 'current' : ''}`}>4</div>
                        <div className={`day ${5 === this.state.currentDate ? 'current' : ''}`}>5</div>
                        <div className={`day ${6 === this.state.currentDate ? 'current' : ''}`}>6</div>
                        <div className={`day ${7 === this.state.currentDate ? 'current' : ''}`}>7</div>
                        <div className={`day ${8 === this.state.currentDate ? 'current' : ''}`}>8</div>
                        <div className={`day ${9 === this.state.currentDate ? 'current' : ''}`}>9</div>
                        <div className={`day ${10 === this.state.currentDate ? 'current' : ''}`}>10</div>
                        <div className={`day ${11 === this.state.currentDate ? 'current' : ''}`}>11</div>
                        <div className={`day ${12 === this.state.currentDate ? 'current' : ''}`}>12</div>
                        <div className={`day ${13 === this.state.currentDate ? 'current' : ''}`}>13</div>
                        <div className={`day ${14 === this.state.currentDate ? 'current' : ''}`}>14</div>
                        <div className={`day ${15 === this.state.currentDate ? 'current' : ''}`}>15</div>
                        <div className={`day ${16 === this.state.currentDate ? 'current' : ''}`}>16</div>
                        <div className={`day ${17 === this.state.currentDate ? 'current' : ''}`}>17</div>
                        <div className={`day ${18 === this.state.currentDate ? 'current' : ''}`}>18</div>
                        <div className={`day ${19 === this.state.currentDate ? 'current' : ''}`}>19</div>
                        <div className={`day ${20 === this.state.currentDate ? 'current' : ''}`}>20</div>
                        <div className={`day ${21 === this.state.currentDate ? 'current' : ''}`}>21</div>
                        <div className={`day ${22 === this.state.currentDate ? 'current' : ''}`}>22</div>
                        <div className={`day ${23 === this.state.currentDate ? 'current' : ''}`}>23</div>
                        <div className={`day ${24 === this.state.currentDate ? 'current' : ''}`}>24</div>
                        <div className={`day ${25 === this.state.currentDate ? 'current' : ''}`}>25</div>
                        <div className={`day ${26 === this.state.currentDate ? 'current' : ''}`}>26</div>
                        <div className={`day ${27 === this.state.currentDate ? 'current' : ''}`}>27</div>
                        <div className={`day ${28 === this.state.currentDate ? 'current' : ''}`}>28</div>
                        <div className={`day ${29 === this.state.currentDate ? 'current' : ''}`}>29</div>
                        <div className={`day ${30 === this.state.currentDate ? 'current' : ''}`}>30</div>
                        <div className="day empty">1</div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Calendar;