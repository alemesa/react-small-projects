import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  setCurrentCharacter,
  getCharacterProfile,
  getCharacterWorld,
  getCharacterMovies
} from '../../reducers/character/actions';

class CharacterList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: this.props.characters
    };
  }

  componentDidMount() {}
  render() {
    let characterList = this.props.characters;
    let setCharacter = this.props.setCharacter;
    return (
      <div className="CharacterList">
        <h2>Characters</h2>
        <ul>
          {characterList.map((character, i) => (
            <li key={character.name}>
              <a
                onClick={setCharacter(
                  i + 1,
                  character.homeworld,
                  character.films
                )}
              >
                {character.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ characters }) => ({
  characters
});

const mapDispatchToProps = dispatch => ({
  setCharacter(id, url, movies) {
    console.log(url);
    return () => {
      dispatch(setCurrentCharacter(id));
      dispatch(getCharacterProfile(id));
      dispatch(getCharacterWorld(url));
      dispatch(getCharacterMovies(movies));
    };
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
