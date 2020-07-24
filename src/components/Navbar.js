import React from 'react';
import "../css/Navbar.css"

class Navbar extends React.Component {
    constructor() {
        super();

        this.state = {
            time: this.getCurrentTime(),
        }
        console.log(this.state.time);
        console.log("hello");
    }

    getCurrentTime() {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        return time;
    }

    render() {
        const {time}= this.state;
        return (
            <div className="bar">
                <h5>iPod <i className="fas fa-wifi"></i></h5>
                <h3>{time}</h3>
                <img className="battery" src="https://image.flaticon.com/icons/svg/3103/3103446.svg" alt="Battery"></img>
            </div>
        )
    }
}


export default Navbar;