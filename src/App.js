import React, { Component } from 'react';
import Header from './component/Header/Header';
import Products from './component/Products/Products';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  add = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };
  render() {
    return (
      <main className="app">
        <Header number={this.state.number}></Header>
        <Products add={this.add}></Products>
      </main>
    );
  }
}

export default App;
