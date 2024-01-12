import React from 'react';

const MovieCard = ({ movie }) => {
    // Check if movie is defined
    if (!movie) {
        return <div>Error: Movie data not available</div>;
    }

    return (
        <div className='movie'>
            <div>
                <p>{movie.Year || 'N/A'}</p>
            </div>

            <div>
                <img
                    src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'}
                    alt={movie.Title}
                />
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    );
}

export default MovieCard;
