import React from 'react';
import "./Display.css"

class Display extends React.Component {
    render() {
        const {active} = this.props;
        return (
            <div className="screen">
                <div className="menu">
                    <h3>iPod.js</h3>
                    <ul>
                        {active===1?<li className="active">Cover Flow</li>:<li>Cover Flow</li>}
                        {active===2?<li className="active">Music</li>:<li>Music</li>}
                        {active===3?<li className="active">Games</li>:<li>Games</li>}
                        {active===4?<li className="active">Settings</li>:<li>Settings</li>}
                    </ul>
                </div>

            </div>
        )
    }
}


export default Display;