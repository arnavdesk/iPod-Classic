import React from 'react';
import "../css/Menu.css"
import game from "../static/game.jpg"
import music from "../static/music.jpg"
import settings from "../static/settings.png"
import ipod from "../static/ipod.jpg"
class Menu extends React.Component {
    render() {
        const { active } = this.props;
        return (

            <div className="menu-container">
                <div className="menu">
                    <ul>
                        {active === 1 ? <li className="active">&nbsp;Cover Flow</li> : <li>&nbsp;Cover Flow</li>}
                        {active === 2 ? <li className="active">&nbsp;Music</li> : <li>&nbsp;Music</li>}
                        {active === 3 ? <li className="active">&nbsp;Games</li> : <li>&nbsp;Games</li>}
                        {active === 4 ? <li className="active">&nbsp;Settings</li> : <li>&nbsp;Settings</li>}
                    </ul>
                </div>
                <div className="leaf">
                    {active === 1 && <img className="leaf-img" src={ipod}></img>}
                    {active === 2 && <img className="leaf-img" src={music}></img>}
                    {active === 3 && <img className="leaf-img" src={game}></img>}
                    {active === 4 && <img className="leaf-img" src={settings}></img>}
                </div>
            </div>
        )
    }
}


export default Menu;