import {useEffect, useState} from "react";
import {getMovies, getMovieById} from "../services/movieService.js";

const MovieList = () => {
    const [movies, setMovies] = useState([]); //state to hold movies.
    const [loading, setLoading] = useState(true); //state for loading indicator.

    useEffect(() => {
        const fetchMovies = async () => {
            const movies = await getMovies();
            setMovies(movies);
            setLoading(false);
        };
        fetchMovies();
    }, []);

    return (
        <div>
            <h1>Movie List</h1>
            {loading ? (
                <p>Loading movies...</p>
            ) : (
                <ul>
                    {movies.length > 0 ? (
                        movies.map((movie, index) => (
                            <li key={index}>
                                <h3>{movie?.title} ({movie?.releaseYear})</h3>
                                <p>Genre: {movie?.genre}</p>
                                <p>Director: {movie?.director}</p>
                                {movie?.posterUrl && (
                                    <img src={movie.posterUrl} alt={movie.title} width="150" />
                                )}
                            </li>
                        ))
                    ) : (
                        <p>No movies found.</p>
                    )}
                </ul>
            )}
        </div>
    );
};

export default MovieList;