import React from 'react';
import '../css/App.css';
import Case from './Case.js';
import song2 from "../static/songs/Laung Gwacha.mp3"
import song1 from "../static/songs/Shape of you.mp3"
import song2Img from "../static/laung_gwacha.jpg";
import song1Img from "../static/shape_of_you.png";



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      active: 0,
      menuItems: ["Now Playing", "Music", "Games", "Settings"],
      musicItems: ["All Songs", "Artist", "Albums"],
      songItemsUrl: [song1, song2],
      songImgItemsUrl:[song1Img,song2Img],
      songItems: ["Shape of You","Laung Gwacha"],
      songIndex: 0,
      lengthMenuKey: { "-1": 3, 1: 2, 4: 1, 8: 4, 3: 1, 9:3 },
      menuMapping: { "-1": [0, 1, 2, 3], 1: [4, 5, 6], 3: [8,9] },
      currentMenu: -1,
      navigationStack: [],
      songUrl: song1,
      playing: false,
      theme: "rgb(210, 210, 210)", 
      audio: new Audio(song1),
      songImgUrl:song1Img,
      wheelColor:"white"
    }
  }

  seekSongForward=(e)=>{
    if(this.state.playing===false){
      return;
    }
    if(e.detail.interval<250){
      this.state.audio.pause();
      let songIndex = this.state.songIndex;
      if(songIndex===this.state.songItemsUrl.length-1){
        songIndex=0;
      }else{
        songIndex++;
      }
      const songUrl = this.state.songItemsUrl[songIndex];
      const songImgUrl = this.state.songImgItemsUrl[songIndex];
      this.setState({songIndex:songIndex,songImgUrl:songImgUrl,songUrl:songUrl,audio:new Audio(songUrl)},()=>{
        this.state.audio.play();
      });
    }else if(e.detail.interval>250&&e.detail.interval<10000){
      const interval = e.detail.interval/100;
      this.state.audio.currentTime+=interval;
    }
  }

  seekSongReverse=(e)=>{
    if(this.state.playing===false){
      return;
    }
    console.log(e.detail.interval);
    if(e.detail.interval<250){
      this.state.audio.pause();
      let songIndex = this.state.songIndex;
      if(songIndex===0){
        songIndex=this.state.songItemsUrl.length-1;
      }else{
        songIndex--;
      }
      const songUrl = this.state.songItemsUrl[songIndex];
      const songImgUrl = this.state.songImgItemsUrl[songIndex];
      this.setState({songIndex:songIndex,songImgUrl:songImgUrl,songUrl:songUrl,audio:new Audio(songUrl)},()=>{
        this.state.audio.play();
      });
    }else if(e.detail.interval>250&&e.detail.interval<10000){
      const interval = e.detail.interval/100;
      this.state.audio.currentTime-=interval;
    }
  }

  togglePlayPause = () => {
    if (this.state.playing === true) {
      this.setState({ playing: false });
      this.state.audio.pause();
    }
    else {
      this.setState({ playing: true });
      this.state.audio.play();
    }
  }


  updateActiveMenu = (direction, menu) => {

    if (menu != -1 && menu != 1 && menu != 4 && menu != 8 && menu != 3&&menu!=9) {
      return;
    }
    let min = 0;
    let max = 0;

    max = this.state.lengthMenuKey[menu];

    if (direction === 1) {
      if (this.state.active >= max) {
        this.setState({ active: min })
      } else {
        this.setState({ active: this.state.active + 1 })
      }
    } else {
      if (this.state.active <= min) {
        this.setState({ active: max })
      } else {
        this.setState({ active: this.state.active - 1 })
      }
    }
  }

  changeMenu = (id, fromMenu) => {

    const navigationStack = this.state.navigationStack.slice();

    if (id === -1) {
      if (this.state.currentMenu === -1)
        return;
      else {
        const prevId = navigationStack.pop();
        this.setState({ currentMenu: prevId, navigationStack: navigationStack, active: 0 });
        return;
      }
    }

    if (fromMenu != "-1" && fromMenu != "1" && fromMenu != 4 && fromMenu != 3 && fromMenu != 8 &&fromMenu!=9) {
      return;
    }


    if (fromMenu === 8) {
      if (id === 0) {
        this.setState({ theme: "#FDDCD7" });
      }
      else if (id === 1) {
        this.setState({ theme: "rgb(210, 210, 210)" });
      } else if (id === 2) {
        this.setState({ theme: "#F5DDC5" });
      } else if (id == 3) {
        this.setState({ theme: "#D1CDDA" })
      } else if (id == 4) {
        this.setState({ theme: "black" })
      }
      return;
    }

    if (fromMenu === 9) {
      if (id === 0) {
        this.setState({ wheelColor: "Black" });
      }
      else if (id === 1) {
        this.setState({ wheelColor: "white" });
      } else if (id === 2) {
        this.setState({ wheelColor: "#616161" });
      } else if (id === 3) {
        this.setState({ wheelColor: "#3D5AFE" })
      }
      return;
    }

    navigationStack.push(this.state.currentMenu);

    if (fromMenu === 4) {
      const songUrl = this.state.songItemsUrl[id];
      const songImgUrl = this.state.songImgItemsUrl[id];
      this.state.audio.pause();
      this.setState({ currentMenu: 7, songUrl: songUrl, navigationStack: navigationStack, active: 0, playing: true, songIndex: id, audio:new Audio(songUrl) , songImgUrl:songImgUrl}, () => {
        this.state.audio.play();
      });

      return;
    }
    const currentMenuID = this.state.menuMapping[fromMenu][id];
    this.setState({ currentMenu: currentMenuID, navigationStack: navigationStack, active: 0 });
  }


  setActiveOnMount = (count) => {
    this.setState({ active: count });
  }

  render() {
    const { audio, active, currentMenu, menuItems, musicItems, songItems, playing, songIndex, theme, songUrl, songImgUrl, wheelColor } = this.state;
    return (
      <div className="App">
        <Case songIndex={songIndex} active={active} menuItems={menuItems} musicItems={musicItems} currentMenu={currentMenu} changeMenu={this.changeMenu} setActiveOnMount={this.setActiveOnMount} updateActiveMenu={this.updateActiveMenu} togglePlayPause={this.togglePlayPause} songItems={songItems} playing={playing} theme={theme} audio={audio} songUrl={songUrl} songImgUrl={songImgUrl} seekSongForward={this.seekSongForward} seekSongReverse={this.seekSongReverse} wheelColor={wheelColor} />
      </div>
    );
  }
}

export default App;
