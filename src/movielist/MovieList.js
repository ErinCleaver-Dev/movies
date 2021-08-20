import {useState, useEffect} from 'react'
import Movie from './Movie'

const MovieList = () => {

    const [movieList, setMovieList] = useState([])
    const [error, setError] = useState (null);
    const [isLoading, setIsLoading] = useState (true);

    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/4/list/7104454?page=1&api_key=adb52275d3d270d93ecec3186d43437e`)
        .then(response => response.json())
        .then(data => setMovieList(data.results))
        .catch(error => setError(error));
    })

    console.log(movieList)
    
    console.log(error)

return (
    <div>
        {
            movieList.length > 0 ? (<div className="movie_list">
               {movieList.map(movie=> <Movie
               title = {movie.title}
               relaseDate = {movie.release_date}
               image = { "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/" + movie.poster_path}
               overview = {movie.overview}
               />)}
               
            </div>) : (<h1>Is Loading...</h1>)
        }
    </div>
)


}

export default MovieList