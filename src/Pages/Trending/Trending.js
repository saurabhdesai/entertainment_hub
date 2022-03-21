import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Trending.css";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/pagination/CustomPagination";
import { set_movies } from "../../redux/actions/MovieAction";
import { useDispatch } from "react-redux";
import Slider from "../../components/SingleContent/Slider";

function Trending() {
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=14dc5887929c72b4898b7faac0fd7b8a&page=${page}`
    );
    dispatch(set_movies(data.results));
  };

  useEffect(() => {
    fetchTrending();
  }, [page]);
  return (
    <div>
      <Slider />
      <h1 className="pageTitle">Movies</h1>
      <div className="trending">
        <SingleContent />
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
}

export default Trending;
