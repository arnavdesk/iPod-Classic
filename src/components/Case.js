import React from 'react';
import "../css/Case.css"
import Wheel from './Wheel.js'
import Display from './Display.js'

class Case extends React.Component {
    render() {
        const {active,updateActiveMenu, currentMenu, changeMenu, menuItems, musicItems, setActiveOnMount} = this.props;
        return (
            <div className="case-container">
                <div className="case">
                    <Display setActiveOnMount={setActiveOnMount} active={active} musicItems={musicItems} menuItems={menuItems} currentMenu={currentMenu} />
                    <Wheel active={active} menuItems={menuItems} currentMenu={currentMenu} changeMenu={changeMenu} updateActiveMenu={updateActiveMenu}/>
                </div>
            </div>
        )
    }
}

export default Case;