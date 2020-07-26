import React from 'react';
import "../css/Settings.css"

class Settings extends React.Component {
    render() {
        const {active} = this.props;
        return (
            <div className="music">
                <h2>Settings</h2>
                <ul>
                    <li className="active">Themes</li>
                </ul>
            </div>

        )
    }

}


export default Settings;