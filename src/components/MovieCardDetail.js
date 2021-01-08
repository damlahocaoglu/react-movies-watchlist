import React from "react";

export const MovieCardDetail = () => {

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const API_KEY = '891bd8493da50156ff1c26f76e69ca34';
  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  return (
    <div className="col-sm-6 offset-sm-3">
      <nav aria-label="breadcrumb" className="mb-5">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{movie.title}</li>
        </ol>
      </nav>
      <div>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="card-img-top" alt="..." />
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <p>{movie.vote_average}</p>
      </div>
    </div>
  );
};