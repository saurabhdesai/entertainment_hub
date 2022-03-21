import { ActionTypes } from "../constants/Action.types";

export const set_movies = (movies) => {
  return {
    type: ActionTypes.SET_MOVIES,
    payload: movies,
  };
};

export const set_search_movies = (movie) => {
  return {
    type: ActionTypes.SET_SEARCH_MOVIES,
    payload: movie,
  };
};
export const set_trending_movies = (trending_movies) => {
  return {
    type: ActionTypes.SET_TRENDING_MOVIES,
    payload: trending_movies,
  };
};
export const set_user = (user) => {
  return {
    type: ActionTypes.SET_USER,
    payload: user,
  };
};
