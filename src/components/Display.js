import React from 'react';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import "../css/Display.css"

class Display extends React.Component {
    render() {
        const { active , currentMenu } = this.props;
        return (
            <div className="display">
                <Navbar/>
                {currentMenu===0&&<Menu active={active}/>}
                {currentMenu===1&&<div className="blank-div"><h1> Cover Flow </h1> </div>}
                {currentMenu===2&&<div className="blank-div"><h1>Music</h1> </div>}
                {currentMenu===3&&<div className="blank-div"><h1>Games</h1></div>}
                {currentMenu===4&&<div className="blank-div"><h1>Settings</h1></div>}
            </div>
        )
    }
}


export default Display;