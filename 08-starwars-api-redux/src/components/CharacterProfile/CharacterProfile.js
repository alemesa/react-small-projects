import React, { Component } from 'react';
import { connect } from 'react-redux';

class CharacterProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    let profile = this.props.profile;
    return (
      <div className="CharacterProfile">
        {profile.name && <h2>Character Profile</h2>}
        <ul>
          {profile.name && <li>Name: {profile.name}</li>}
          {profile.height && <li>Height: {profile.height}cm</li>}
          {profile.mass && <li>Weight: {profile.mass}kg</li>}
          {profile.gender && <li>Gender: {profile.gender}</li>}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ character: { profile } }) => ({
  profile
});

export default connect(mapStateToProps)(CharacterProfile);
