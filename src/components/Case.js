import React from 'react';
import "../css/Case.css"
import Wheel from './Wheel.js'
import Display from './Display.js'

class Case extends React.Component {
    render() {
        const {active,updateActiveMenu, currentMenu, changeMenu} = this.props;
        return (
            <div className="case-container">
                <div className="case">
                    <Display active={active} currentMenu={currentMenu} />
                    <Wheel active={active} currentMenu={currentMenu} changeMenu={changeMenu} updateActiveMenu={updateActiveMenu}/>
                </div>
            </div>
        )
    }
}

export default Case;