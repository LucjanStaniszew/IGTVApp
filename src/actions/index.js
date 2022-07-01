import axios from "axios"

export const ADD_MOVIE_FAVORITE = 'ADD_MOVIE_FAVORITE';
export const REMOVE_MOVIE_FAVORITE = 'REMOVE_MOVIE_FAVORITE';
export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE_DETAIL = 'GET_MOVIE_DETAIL';

// ----------------------------------------------------------------------------------- \\

export function addMovieFavorite(payload) {
    return { type: ADD_MOVIE_FAVORITE, payload };
  }

export function removeMovieFavorite(payload) {
    return { type: REMOVE_MOVIE_FAVORITE, payload };
  }

export function getMovieDetail(payload) {
    return async function(dispatch) {
      const response = await axios.get('http://www.omdbapi.com/?apikey=50c97352&i=' + payload)
      dispatch({ type: GET_MOVIE_DETAIL, payload: response.data })
    }
  }

export function getMovies(titulo) {
  return async function(dispatch) {
    const response = await axios.get('http://www.omdbapi.com/?apikey=50c97352&s=' + titulo)
    dispatch({ type: GET_MOVIES, payload: response.data})
  }
}