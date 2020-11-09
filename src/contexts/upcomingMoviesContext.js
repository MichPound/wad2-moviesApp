/*
import React, { useEffect, createContext, useReducer } from "react";
import { getUpcomingMovies } from "../api/tmdb-api";

export const UpcomingMoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-watchList":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, watchList: true } : m
        ),
      };
    case "load":
      return { movies: action.payload.movies };
    case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
      };
    default:
      return state;
  }
};

const UpcomingMoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [] });

  const addToWatchList = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-watchList", payload: { movie: state.movies[index] } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  }; 
  useEffect(() => {
    getUpcomingMovies().then((movies) => {
      dispatch({ type: "1", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UpcomingMoviesContext.Provider
      value={{
        movies: state.movies,
        watchList: state.watchList,
        addToWatchList: addToWatchList,
        addReview: addReview,
      }}
    >
      {props.children}
    </UpcomingMoviesContext.Provider>
  );
};

export default UpcomingMoviesContextProvider;
*/