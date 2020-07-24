import React from 'react';
import Navbar from '../components/Navbar';
import "../css/Display.css"

class Display extends React.Component {
    render() {
        const {active} = this.props;
        return (
            <div className="screen">
                <div className="menu">
                    <Navbar/>
                    <ul>
                        {active===1?<li className="active">&nbsp;Cover Flow</li>:<li>&nbsp;Cover Flow</li>}
                        {active===2?<li className="active">&nbsp;Music</li>:<li>&nbsp;Music</li>}
                        {active===3?<li className="active">&nbsp;Games</li>:<li>&nbsp;Games</li>}
                        {active===4?<li className="active">&nbsp;Settings</li>:<li>&nbsp;Settings</li>}
                    </ul>
                </div>

            </div>
        )
    }
}


export default Display;