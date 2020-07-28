import React from 'react';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import Music from '../components/Music';
import Songs from '../components/Songs';
import Settings from '../components/Settings';
import Playing from '../components/Playing';
import "../css/Display.css"
import Themes from './Themes';
import WheelColor from './WheelColor';

class Display extends React.Component {
    render() {
        const { active, currentMenu, menuItems, musicItems, setActiveOnMount, songItems, playing, songIndex, audio, songUrl ,songImgUrl} = this.props;
        return (
            <div className="display">
                <Navbar playing={playing} />
                {currentMenu === -1 && <Menu songImgUrl={songImgUrl} menuItems={menuItems} setActiveOnMount={setActiveOnMount} active={active} />}
                {currentMenu === 1 && <Music musicItems={musicItems} setActiveOnMount={setActiveOnMount} active={active} />}
                {currentMenu === 2 && <div className="blank-div"><h1>Games</h1></div>}
                {currentMenu === 3 && <Settings active={active}/>}
                {currentMenu === 4 && <Songs songItems={songItems} active={active} />}
                {currentMenu === 5 && <div className="blank-div"><h1>Artists</h1></div>}
                {currentMenu === 6 && <div className="blank-div"><h1>Albums</h1></div>}
                {(currentMenu === 0 ||currentMenu===7) && <Playing songImgUrl={songImgUrl} audio={audio} songUrl={songUrl} playing={playing} songIndex={songIndex} songItems={songItems} />}
                {currentMenu===8&&<Themes active={active}/>}
                {currentMenu===9&&<WheelColor active={active}/>}
            </div>
        )
    }
}


export default Display;