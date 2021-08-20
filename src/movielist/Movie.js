const Movie = ({title, overview, image, relaseDate}) => {
    return(
    <div className="movie_box">
        <h1>{title}, {relaseDate}</h1>
        <img src={image}/>
        <p>{overview}</p>
    </div>
    )
}

export default Movie