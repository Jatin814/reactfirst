import React from 'react';
import Home from './components/home/index';
import './App.css';

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      color: "white",
      userName: ['kapil', 'monu', 'sonu']
    };
  }

  componentDidMount(){
    this.setState({color: 'blue'});
  }

  changeValue(){
    this.setState({color: 'pink'});
  }

  render() {
    return(
      <div>
          <h2>I am a {this.state.color} Car!</h2>
          <button onClick={ () => this.changeValue() }>Submit</button>
          <Home></Home>
      </div>
    );
  }
}

export default App;
