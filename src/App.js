import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';

class App extends Component {
  state = {
    newPost: '',
    posts: []
  };

  // Executado assim que o componente aparece em tela
  componentDidMount() {}

  // Executado sempre que houver alterações nas props (this.props) ou estado (this.state)
  //componentDidUpdate(prevProps, prevState) {
  componentDidUpdate(prevProps, prevState) {}

  // Executado quando o componente deixa de existir
  componentWillMount() {}

  render() {

    return (
      <Header/>
    )
  }
}

export default App;