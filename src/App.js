import React, {Component} from 'react';
import './App.css';
import DogListContainer from './components/DogListContainer'

export default class App extends Component {

  render() {
    return (
      <main>
        <DogListContainer />
      </main>
    );
  }
}

