import React, { Component } from 'react';
import { connect } from 'react-redux';
import './CharacterMovies.css';
import posters from '../../data/images.json';

class CharacterMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {}
  render() {
    let movies = this.props.movies;
    let images = posters.images;

    return (
      <div className="CharacterMovies">
        {movies[0] && <h2>Character Movies</h2>}
        <ul>
          {movies.map((movie, i) => (
            <div key={i}>
              <h3>{movie.title}</h3>
              <h4>
                Episode #: {movie.episode_id} | Release Date:{' '}
                {movie.release_date}
              </h4>
              <p>{movie.opening_crawl}</p>
              {<img src={images[i + 1].poster} alt="" />}
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ character: { movies } }) => ({
  movies
});

export default connect(mapStateToProps)(CharacterMovies);
