import React from 'react';
import "../css/Playing.css"

class Playing extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentTime: 0,
        }
        this.intervalId = "";


    }

    componentDidMount() {
        const { audio } = this.props;
        this.setState({ currentTime: audio.currentTime });
        this.intervalId = setInterval(() => {
            this.setState({ currentTime: this.props.audio.currentTime });
        }, 100);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        const { songItems, playing, songIndex, audio, songImgUrl } = this.props;
        const currentTimeRender = Math.floor(this.state.currentTime / 60) + ":" + Math.floor(this.state.currentTime % 60);
        const durationRender = Math.floor(audio.duration / 60) + ":" + Math.floor(audio.duration % 60);
        const percentageComplete = { width: (audio.currentTime / audio.duration * 100) + "%" };
        return (
            <div className="now-playing-container">
                <div className="song-details">
                    <img src={songImgUrl}></img>
                    <div>
                        <h1>{songItems[songIndex]}</h1>
                        {playing && <h5 className="play-pause-nav">Playing</h5>}
                        {!playing && <h5 className="play-pause-nav">Paused</h5>}
                    </div>
                </div>
                <div className="status">
                    {currentTimeRender}
                    <div id="progress">
                        <div style={percentageComplete} id="progress-bar"></div>
                    </div>
                    {durationRender}
                </div>
            </div>
        )
    }
}


export default Playing;