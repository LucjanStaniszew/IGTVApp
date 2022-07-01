import React, { Component } from "react";
import { connect } from "react-redux";
import { removeMovieFavorite } from "../../actions";
import { Link } from 'react-router-dom';
import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div className="fav">
        <h2>Películas Favoritas</h2>
        <ul className="favs">
        {this.props.moviesFavourites.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
              <button className="btnr" onClick={() => this.props.removeMovieFavorite(movie)}>
                <img src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/344/external-heineken-a-pale-lager-beer-with-alcohol-by-volume-produced-with-red-star-logotype-food-filled-tal-revivo.png" height="20" width="20" />
              </button>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}
/*
function mapStateToProps(state) {
  return {
    movies: state.moviesFavorites
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: movieID => dispatch(removeMovieFavorite(movieID))
  }
}
*/
export default connect((state) => ({moviesFavourites: state.moviesFavourites}), {removeMovieFavorite})(ConnectedList)
//export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
