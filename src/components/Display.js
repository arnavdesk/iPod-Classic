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
import LockScreen from './LockScreen';
import Wallpaper from './Wallpaper';

class Display extends React.Component {
    render() {
        const { active, currentMenu, menuItems, musicItems,songItems, playing, songIndex, audio, songUrl ,songImgUrl,wallpaper,wallpaperItems, noty, setNoty,notifyText} = this.props;
        
        return (
            <div style={{backgroundImage:`url(${wallpaperItems[wallpaper]})`}} className="display">
                <Navbar noty={noty} setNoty={setNoty} playing={playing} notifyText ={notifyText} />
                {currentMenu===-2&&<LockScreen/>}
                {currentMenu === -1 && <Menu songImgUrl={songImgUrl} menuItems={menuItems} active={active} />}
                {currentMenu === 1 && <Music musicItems={musicItems} active={active} />}
                {currentMenu === 2 && <div className="blank-div"><h1>Games</h1></div>}
                {currentMenu === 3 && <Settings active={active}/>}
                {currentMenu === 4 && <Songs songItems={songItems} active={active} />}
                {currentMenu === 5 && <div className="blank-div"><h1>Artists</h1></div>}
                {currentMenu === 6 && <div className="blank-div"><h1>Albums</h1></div>}
                {(currentMenu === 0 ||currentMenu===7) && <Playing songImgUrl={songImgUrl} audio={audio} songUrl={songUrl} playing={playing} songIndex={songIndex} songItems={songItems} />}
                {currentMenu===8&&<Themes active={active}/>}
                {currentMenu===9&&<WheelColor active={active}/>}
                {currentMenu===10&&<Wallpaper active={active}/>}
            </div>
        )
    }
}


export default Display;