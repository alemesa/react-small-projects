import React, { Component } from 'react';
import { connect } from 'react-redux';

class CharacterWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    let world = this.props.world;
    return (
      <div className="CharacterWorld">
        {world.name && <h2>Character World</h2>}
        <ul>
          {world.name && <li>Name: {world.name}</li>}
          {world.climate && <li>Climate: {world.climate}cm</li>}
          {world.population && <li>Population: {world.population}kg</li>}
          {world.terrain && <li>Terrain: {world.terrain}</li>}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ character: { world } }) => ({
  world
});

export default connect(mapStateToProps)(CharacterWorld);
