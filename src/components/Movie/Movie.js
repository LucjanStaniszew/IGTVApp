import React from 'react';
import { useParams } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';


/*

//------------------------------FORMA_DE_HACERLO_CON_COMPONENTE_DE_CLASE-------------------------------\\
class Movie extends React.Component {
    componentDidMount(){
        this.props.getMovieDetail(this.props.match.params.id);
    }

    render() {
        return (
            <div className="movie-detail">
                {this.props.movieDetail && (
                <div className='detail' >
                    <label>
                        Title: <span>{this.props.movieDetail.Title}</span>
                    </label>
                    <br/>
                    <label>
                        Year: <span>{this.props.movieDetail.Year}</span>
                    </label>
                    <br/>
                    <label>
                        Rating: <span>{this.props.movieDetail.Rated}</span>
                    </label>
                    <br/>
                    <label>
                        Released: <span>{this.props.movieDetail.Released}</span>
                    </label>
                    <br/>
                    <label>
                        Genre: <span>{this.props.movieDetail.Genre}</span>
                    </label>
                    <br/>
                    <img src={this.props.movieDetail.Poster} alt="Poster"/>
                    </div>
                )}
                {!this.props.movieDetail == undefined && <h1>Cargando...</h1>} 
            </div>
        );
    }
}

export default connect((state) => ({ movieDetail: state.movieDetail}), {
    getMovieDetail
})(Movie); */
//-----------------------------------------------------------------------------------------------------\\

export default function Movie(props) {
    const { id } = useParams()
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(getMovieDetail(id))
    }, [dispatch, id])
    const movieDetail = useSelector((state) => state.movieDetail)
    return (
        <div className="movie-detail">
            {movieDetail && (
            <div className='detail' >
                <label>
                    Title: <span>{movieDetail.Title}</span>
                </label>
                <br/>
                <label>
                    Year: <span>{movieDetail.Year}</span>
                </label>
                <br/>
                <label>
                    Rating: <span>{movieDetail.Rated}</span>
                </label>
                <br/>
                <label>
                    Released: <span>{movieDetail.Released}</span>
                </label>
                <br/>
                <label>
                    Genre: <span>{movieDetail.Genre}</span>
                </label>
                <br/>
                <img src={movieDetail.Poster} alt="Poster"/>
                </div>
            )}
        {movieDetail === undefined && <h1>Cargando...</h1>} 
            </div>
    );
}