import { combineReducers } from "redux";
import { MovieReducer, setuserdata } from "./MovieReducer";
const reducers = combineReducers({
  allMovies: MovieReducer,
  userdata: setuserdata,
});
export default reducers;
