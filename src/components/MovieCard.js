import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

export const MovieCard = ({ movie }) => {
  const {
    addMovieToWatchlist,
    addMovieToWatched,
    id,
    watchlist,
    watched,
  } = useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.id === movie.id);
  let storedMovieWatched = watched.find((o) => o.id === movie.id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div>
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>

      <div>
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h3 className="title">{movie.vote_average}</h3>
          <h4 className="release-date">
          {movie.release_date ? movie.release_date.substring(0,4) : '-'}
          </h4>
        </div>

        <div className="btncenter">
          <button
            className="btn"
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
            Add to Watchlist
          </button>
          </div>
          <div className="btncenter">
          <button
            className="btntop"
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(movie)}
          >
            Add to Watched
          </button>
          </div>
          <div className="btncenter">
          <Link to={`/popular/${id}`} className="btntopbottom link">
                Movie Detail
              </Link>
          </div>
      </div>
    </div>
  );
};