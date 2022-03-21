import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Movies.css";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/pagination/CustomPagination";
import { set_movies } from "../../redux/actions/MovieAction";
import { useDispatch } from "react-redux";
import Slider from "../../components/SingleContent/Slider";

function Movies() {
  const [page, setPage] = useState(1);

  const [numOfPages, setNumOfPages] = useState();
  const dispatch = useDispatch();

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
    );
    dispatch(set_movies(data.results));
    setNumOfPages(data.total_pages);
  };
  useEffect(() => {
    fetchMovies();
  }, [page]);
  return (
    <div>
      <Slider />

      <h1 className="text-center">Movies</h1>
      <div className="movies">
        <SingleContent />
      </div>
      <CustomPagination setPage={setPage} numOfPages={numOfPages} />
    </div>
  );
}

export default Movies;
