import React from 'react';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import Music from '../components/Music';
import "../css/Display.css"

class Display extends React.Component {
    render() {
        const { active , currentMenu, menuItems, musicItems, setActiveOnMount } = this.props;
        return (
            <div className="display">
                <Navbar/>
                {currentMenu===-1&&<Menu menuItems={menuItems} setActiveOnMount={setActiveOnMount} active={active}/>}
                {currentMenu===0&&<div className="blank-div"><h1> Cover Flow </h1> </div>}
                {currentMenu===1&&<Music musicItems={musicItems} setActiveOnMount={setActiveOnMount} active={active}/>}
                {currentMenu===2&&<div className="blank-div"><h1>Games</h1></div>}
                {currentMenu===3&&<div className="blank-div"><h1>Settings</h1></div>}
                {currentMenu===4&&<div className="blank-div"><h1>All Songs</h1></div>}
                {currentMenu===5&&<div className="blank-div"><h1>Artists</h1></div>}
                {currentMenu===6&&<div className="blank-div"><h1>Albums</h1></div>}
            </div>
        )
    }
}


export default Display;