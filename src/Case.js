import React from 'react';
import "./Case.css"
import Wheel from './Wheel.js'
import Display from './Display.js'

class Case extends React.Component {
    render() {
        const {active,updateActiveMenu} = this.props;
        return (
            <div className="case-container">
                <div className="case">
                    <Display active={active} />
                    <Wheel active={active} updateActiveMenu={updateActiveMenu}/>
                </div>
            </div>
        )
    }
}

export default Case;