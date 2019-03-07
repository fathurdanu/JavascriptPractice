import React, { Component } from 'react';
// import logo from './logo.svg';
import Orang from './Orang/Orang';
import './App.css';
//import { threadId } from 'worker_threads';

class App extends Component {
  x = 0;
  state = {
    manusia: [
      {nama: 'qwerty',age: 22},
      {nama: 'ytrewq',age: 31},
      {nama: 'yoman',age: 42}
    ]
  }
  
  hello = () => {
      this.setState({
        manusia: [
          {nama: 'ahzeeek',age: 14},
          {nama: 'kukur',age: 23},
          {nama: 'kerenne',age: 33}
        ]
      })    
  }

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <button onClick={this.hello}>Oke</button>
        <Orang nama={this.state.manusia[0].nama} age={this.state.manusia[0].age} />
        <Orang nama={this.state.manusia[1].nama} age={this.state.manusia[1].age} />
        <Orang nama={this.state.manusia[2].nama} age={this.state.manusia[2].age} />
      </div>
    );
  }
}

export default App;
