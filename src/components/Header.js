import React, { Component } from 'react';
import '../scss/Header.scss';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            userName: 'Jeremy',
        }
    }

    handleChange(e) {
        const userName = e.target.value;
        this.changename(userName);
    }
    changename(userName) {
        this.setState({userName});
    }

    render() {
        function toggleMenu() {
            document.getElementById('menu').classList.toggle('active');
            document.getElementById('arrow').classList.toggle('active');

        }
        function editName() {
            document.getElementById('edit-name').classList.toggle('active');
        }
        function changePicture() {
            var colors = [
                '#ff7e43',
                '#aa6aff',
                '#ff5252',
                '#ff9ff2',
                '#50c05f',
                '#60d9dd'
            ];
            var randomNum = Math.floor(Math.random() * 6);  
            document.querySelectorAll('.img')[0].style.backgroundColor = colors[randomNum];
        }
        return (
            <div className="Header">
                <div id="header">
                    <div className="logo">
                        <h4>Dashboard</h4>
                    </div>
                    <div className="profile">
                        <div className="img">{this.state.userName.charAt(0)}</div>
                        <div className="edit" onClick={toggleMenu}>
                            {this.state.userName} <i className="fas fa-caret-down" id="arrow"></i>
                        </div>
                    </div>
                </div>
                <div id="menu">
                    <span onClick={changePicture}>Change color</span>
                    <span onClick={editName}>Edit name</span>
                    <div id="edit-name">
                        <input type="text" placeholder="Enter Name" onChange={this.handleChange.bind(this)}></input>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;