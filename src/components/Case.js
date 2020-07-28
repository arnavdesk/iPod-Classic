import React from 'react';
import "../css/Case.css"
import Wheel from './Wheel.js'
import Display from './Display.js'

class Case extends React.Component {
    render() {
        const {active,updateActiveMenu, currentMenu, changeMenu, menuItems, musicItems, setActiveOnMount,togglePlayPause, songItems,playing, songIndex,theme, audio, songUrl, songImgUrl, seekSongForward, seekSongReverse} = this.props;
        return (
            <div className="case-container">
                <div style={{backgroundColor:theme}} className="case">
                    <Display songIndex={songIndex} playing={playing} setActiveOnMount={setActiveOnMount} active={active} musicItems={musicItems} menuItems={menuItems} currentMenu={currentMenu} songItems={songItems} audio={audio} songUrl={songUrl} songImgUrl={songImgUrl} />
                    <Wheel theme={theme} active={active} menuItems={menuItems} currentMenu={currentMenu} changeMenu={changeMenu} updateActiveMenu={updateActiveMenu} togglePlayPause={togglePlayPause} seekSongForward={seekSongForward} seekSongReverse={seekSongReverse}/>
                </div>
            </div>
        )
    }
}

export default Case;