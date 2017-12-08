import React, { Component } from 'react';
import './App.css';
import CharacterList from './components/CharacterList/CharacterList';
import CharacterProfile from './components/CharacterProfile/CharacterProfile';
import CharacterWorld from './components/CharacterWorld/CharacterWorld';
import CharacterMovies from './components/CharacterMovies/CharacterMovies';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Star Wars Redux Tutorial</h1>
        <div id="wrapper">
          <CharacterList />
          <CharacterProfile />
          <CharacterWorld />
          <CharacterMovies />
        </div>
      </div>
    );
  }
}

export default App;
