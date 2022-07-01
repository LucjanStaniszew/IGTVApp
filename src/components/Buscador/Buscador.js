import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import './Buscador.css';
import { addMovieFavorite, getMovies } from '../../actions'


export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
    this.setState({title: ""})
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2 className="ser">Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">
              Película:{" "}
              </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit" className="btn">
            <img src="https://img.icons8.com/emoji/344/magnifying-glass-tilted-left-emoji.png" height="20" width="20" />
          </button>
        </form>
        <ul className="movies">
         {this.props.moviesLoaded.map((movie) => (
            <li key={movie.imdbID}>
              <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
              <button type="button" className="btn"
                onClick={() => {
                  this.props.addMovieFavorite({
                    title: movie.Title,
                    id: movie.imdbID,
                  });
                }}
              >
                    <img src="https://img.icons8.com/doodle/344/star.png" height="20" width="20" />
              </button>
           </li>
           ))}
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: title => dispatch(addMovieFavorite(title)),
    getMovies: title => dispatch(getMovies(title))
  }
}

export default connect(
  (state) => ({moviesLoaded: state.moviesLoaded}), {
    getMovies,
    addMovieFavorite,
  })(Buscador);