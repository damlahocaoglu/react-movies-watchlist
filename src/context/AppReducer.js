export default (state, action) => {
  switch (action.type) {
    case "ADD_MOVIE_TO_WATCHLIST":
      return {
        ...state,
        watchlist: [action.payload, ...state.watchlist]
      };
    case "ADD_MOVIE_TO_WATCHED":
      return {
        ...state,
        watchlist: state.watchlist.filter(
          movie => movie.id !== action.payload.id
        ),
        watched: [action.payload, ...state.watched]
      };
    case "MOVE_TO_WATCHLIST":
      return {
        ...state,
        watched: state.watched.filter(movie => movie.id !== action.payload.id),
        watchlist: [action.payload, ...state.watchlist]
      };

    default:
      return state;
  }
};
