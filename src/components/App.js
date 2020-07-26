import React from 'react';
import '../css/App.css';
import Case from './Case.js';
import song1 from "../static/songs/Laung Gwacha.mp3"
import song2 from "../static/songs/Shape of you.mp3"


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      active: 0,
      menuItems:["Cover Flow", "Music", "Games","Settings"],
      musicItems:["All Songs", "Artist", "Albums"],
      songItemsUrl:[song1,song2],
      songItems:["Laung Gwacha","Shape of you"],
      songIndex:0,
      lengthMenuKey:{"-1":3,1:2,4:1,8:3,3:0},
      menuMapping:{"-1":[0,1,2,3],1:[4,5,6],3:[8]},
      currentMenu:-1,
      navigationStack:[],
      songUrl:song1,
      playing:false,
      theme:"rgb(210, 210, 210)",
    }
    this.audio=new Audio(song1);
  }


  togglePlayPause=()=>{
    if(this.state.playing===true){
      this.setState({playing:false});
      this.audio.pause();
    }
    else{
      this.setState({playing:true});
      this.audio.play();
    }
  }
  

  updateActiveMenu = (direction, menu) => {

    if(menu!=-1&&menu!=1&&menu!=4&&menu!=8&&menu!=3){
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

  changeMenu=(id,fromMenu)=>{
    
    const navigationStack = this.state.navigationStack.slice();

    if(id===-1){
      if(this.state.currentMenu===-1)
        return;
      else{
        const prevId = navigationStack.pop();
        this.setState({currentMenu:prevId,navigationStack:navigationStack});
        return;
      }
    }

    if(fromMenu!="-1"&&fromMenu!="1"&&fromMenu!=4&&fromMenu!=3&&fromMenu!=8){
      return;
    }


    navigationStack.push(this.state.currentMenu);

    if(fromMenu===8){
      if(id==0){
        this.setState({theme:"#FDDCD7"});
      }
      else if(id==1){
        this.setState({theme:"rgb(210, 210, 210)"});
      }else if(id==2){
        this.setState({theme:"#F5DDC5"});
      }else if(id==3){
        this.setState({theme:"#D1CDDA"})
      }
      return;
    }

    if(fromMenu===4){
      const songUrl=this.state.songItemsUrl[id];
      this.setState({currentMenu:7,songUrl:songUrl,navigationStack:navigationStack,active:0,playing:true, songIndex:id},()=>{
        this.audio.pause();
        this.audio = new Audio(this.state.songUrl);
        this.audio.play();
      });
      
      return;
    }
    const currentMenuID = this.state.menuMapping[fromMenu][id];
    this.setState({currentMenu:currentMenuID,navigationStack:navigationStack,active:0});
  }


  setActiveOnMount=(count)=>{
    this.setState({active:count});
  }

  render() {
    const { active, currentMenu, menuItems, musicItems, songItems ,playing, songIndex ,theme} = this.state;
    return (
      <div className="App">
        <Case songIndex={songIndex} active={active} menuItems={menuItems} musicItems={musicItems} currentMenu={currentMenu} changeMenu={this.changeMenu} setActiveOnMount={this.setActiveOnMount} updateActiveMenu={this.updateActiveMenu} togglePlayPause={this.togglePlayPause} songItems={songItems} playing={playing} theme={theme}/>
      </div>
    );
  }
}

export default App;
