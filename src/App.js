import React, { Component } from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    ethCount: 0
  }
  fetchData = () =>
    axios.get('https://api.etherscan.io/api?module=account&action=balance&address=0xd0219454ee78d4d7f9c4169c29549c210f59dc64&tag=latest&apikey=YourApiKeyToken')
  .then((response) => {
    let eth = response.data.result.slice(0,4)
    this.setState({ ethCount : eth})
    if(eth!=='2932') {
      alert('当前ETH发生了转账')
    }
    console.log('[ETH count]',eth);
  })
  .catch(function (error) {
    console.log(error);
  });
  render() {
    this.fetchData()
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">当前ETH数量: <span className="eth">{this.state.ethCount}</span></h1>
        </header>
        <h2 className="App-intro">
          地址0xd0219454ee78d4d7f9c4169c29549c210f59dc64监测中
        </h2>
      </div>
    );
  }
}

export default App;
