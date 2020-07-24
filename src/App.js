import React from 'react';
import './App.css';
import Case from './Case.js';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      active: 2,
    }
  }

  updateActiveMenu = (direction)=>{
    if(direction ===1){
      if(this.state.active===4){
        this.setState({active:1})
      }else{
        this.setState({active:this.state.active+1})
      }
    }
  }


  render() {
    const {active} = this.state;
    return (
      <div className="App">
        <Case active={active}  updateActiveMenu={this.updateActiveMenu} />
      </div>
    );
  }
}

export default App;
