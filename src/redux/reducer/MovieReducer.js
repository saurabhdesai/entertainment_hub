import { ActionTypes } from "../constants/Action.types";

const intitialstate = {
  movies: [],
  trending_movies: [],
  // user: [],
};
const secondstate = {
  user: [],
};

export const MovieReducer = (state = intitialstate, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_MOVIES:
      return { ...state, movies: payload };
    case ActionTypes.SET_TRENDING_MOVIES:
      return { ...state, trending_movies: payload };
    case ActionTypes.SET_SEARCH_MOVIES:
      return { state, movies: payload };
    // case ActionTypes.SET_USER:
    //   return { state, user: payload };

    default:
      return state;
  }
};
export const setuserdata = (state = secondstate, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USER:
      return { state, user: payload };

    default:
      return state;
  }
};
