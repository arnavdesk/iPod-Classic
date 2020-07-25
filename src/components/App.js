import React from 'react';
import '../css/App.css';
import Case from './Case.js';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      active: 1,
      currentMenu:0,
    }
  }

  updateActiveMenu = (direction) => {
    if (direction === 1) {
      if (this.state.active === 4) {
        this.setState({ active: 1 })
      } else {
        this.setState({ active: this.state.active + 1 })
      }
    } else {
      if (this.state.active === 1) {
        this.setState({ active: 4 })
      } else {
        this.setState({ active: this.state.active - 1 })
      }
    }
  }

  changeMenu=(id)=>{
    this.setState({currentMenu:id});
  }


  render() {
    const { active, currentMenu } = this.state;
    return (
      <div className="App">
        <Case active={active} currentMenu={currentMenu} changeMenu={this.changeMenu} updateActiveMenu={this.updateActiveMenu} />
      </div>
    );
  }
}

export default App;
