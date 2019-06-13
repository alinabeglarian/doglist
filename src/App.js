import React, {Component} from 'react';
import './App.css';
import DogListContainer from './components/DogListContainer'
import { Route } from 'react-router-dom'
import DogBreedImagesContainer from './components/DogBreedImagesContainer'


export default class App extends Component {

  render() {
    return (
      <main>
        <Route exact path="/" component={DogListContainer} />
        <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
        
      </main>
    );
  }
}

