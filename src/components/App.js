import React from 'react';
import '../css/App.css';
import Case from './Case.js';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      active: 0,
      menuItems:["Cover Flow", "Music", "Games","Settings"],
      musicItems:["All Songs", "Artist", "Albums"],
      lengthMenuKey:{"-1":3,1:2},
      menuMapping:{"-1":[0,1,2,3],1:[4,5,6]},
      currentMenu:-1,
      navigationStack:[],
    }
  }

  updateActiveMenu = (direction, menu) => {

    if(menu!=-1&&menu!=1){
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

    if(fromMenu!="-1"&&fromMenu!="1"){
      return;
    }

    const currentMenuID = this.state.menuMapping[fromMenu][id];
    navigationStack.push(this.state.currentMenu);
    if(fromMenu=="-1"){
      this.setState({currentMenu:currentMenuID,navigationStack:navigationStack,active:0});
      return;
    }
    this.setState({currentMenu:currentMenuID,navigationStack:navigationStack});
  }


  setActiveOnMount=(count)=>{
    this.setState({active:count});
  }

  render() {
    const { active, currentMenu, menuItems, musicItems } = this.state;
    return (
      <div className="App">
        <Case active={active} menuItems={menuItems} musicItems={musicItems} currentMenu={currentMenu} changeMenu={this.changeMenu} setActiveOnMount={this.setActiveOnMount} updateActiveMenu={this.updateActiveMenu} />
      </div>
    );
  }
}

export default App;
