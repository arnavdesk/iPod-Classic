import React from 'react';
import "../css/Navbar.css"
import BatImg from "../static/battery.png"
class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            time: this.getCurrentTime(),
        }
        this.stateId = "";
    }

    componentDidMount(){
        this.stateId = setInterval(()=>{
            this.setState({time:this.getCurrentTime()});
        },60000);
    }

    componentWillMount(){
        clearInterval(this.stateId);
    }

    getCurrentTime() {
        const today = new Date();
        var time = today.getHours() + ":" + today.getMinutes();
        if(today.getMinutes()<10){
            time = today.getHours() + ":0" + today.getMinutes();
        }
        return time;
    }

    render(){
        const {time} = this.state;
        return (
            <div className="bar">
                <h5 className="heading">iPod <i className="fas fa-wifi"></i></h5>
                <h3 className="time">{time}</h3>
                <img className="battery" src={BatImg} alt="Battery"/>
            </div>
        )
    }
}


export default Navbar;