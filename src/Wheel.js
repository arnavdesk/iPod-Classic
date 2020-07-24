import React from 'react';
import "./Wheel.css"
import ZingTouch from 'zingtouch';
class Wheel extends React.Component {
    constructor(){
        super();
        this.angle = 0;
    }
    render() {
        return (
            <div className="wheel-container" id="wheel-container">
                <div className="wheel" id="wheel" >
                    <div className="controll" id="menu">
                        MENU
                    </div>
                    <div className="controll" id="forward">
                        <i className="fas fa-fast-forward"></i>
                    </div>
                    <div className="controll" id="play-pause">
                        <i className="fas fa-play"></i>
                        <i className="fas fa-pause"></i>
                    </div>
                    <div className="controll" id="reverse">
                        <i className="fas fa-fast-backward"></i>
                    </div>
                </div>

                <div className="blank" id="blank"></div>
            </div>
        )
    }

    doSomething = (e) =>{ 
        const {updateActiveMenu} = this.props;
        console.log(this.angle);
        if(e.detail.distanceFromOrigin===0){
            this.angle = e.detail.angle;
        }

        if(Math.abs(this.angle - e.detail.angle)>15){
            this.angle = e.detail.angle;
            updateActiveMenu(1);
        }
    }

    componentDidMount() {
        var doSomething = this.doSomething;
        const wheel = document.getElementById("wheel");
        const activeRegion = ZingTouch.Region(wheel);

        activeRegion.bind(wheel, 'rotate', function (e) {
            doSomething(e);
        });

        

    }

}


export default Wheel;