import { GET_MOVIES, ADD_MOVIE_FAVORITE, GET_MOVIE_DETAIL, REMOVE_MOVIE_FAVORITE } from '../actions'

const initialState = {
    moviesFavourites: [],
    moviesLoaded: [],
    movieDetail: {}
  };

const cases = {};

cases[GET_MOVIES] = (state, payload) => ({
    ...state,
    moviesLoaded: payload.Search,
});

cases[GET_MOVIE_DETAIL] = (state, payload) => ({
    ...state,
    movieDetail: payload,
});

cases[ADD_MOVIE_FAVORITE] = (state, payload) => ({
    ...state,
    moviesFavourites: [...state.moviesFavourites, payload],
});

cases[REMOVE_MOVIE_FAVORITE] = (state, payload) => ({
    ...state,
    moviesFavourites: state.moviesFavourites.filter(
        (movie) => movie.id !== payload.id),
});

export default function reducer(state = initialState, {type, payload}) {
    return cases[type] ? cases[type](state, payload) : state;
    /*
    switch (type) {
        case GET_MOVIES: return {
            ...state,
            moviesLoaded: payload.Search,
        };

        default: return state
    }*/
}