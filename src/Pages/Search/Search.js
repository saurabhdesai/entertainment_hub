import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleContent from "../../components/SingleContent/SingleContent";
import CustomPagination from "../../components/pagination/CustomPagination";
import { Button, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { set_search_movies } from "../../redux/actions/MovieAction";

import "./Search.css";
function Search() {
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState();
  const [numOfPages, setNumOfPages] = useState();
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const api = process.env.REACT_APP_API_KEY;
  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${api}&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );

      setContent(data.results);

      console.log("inside data");
      setNumOfPages(data.total_pages);
      console.log("seaccrh data", data);
      dispatch(set_search_movies(data.results));
    } catch (error) {
      console.error("error in search os", error);
    }
  };
  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
  }, [page]);
  console.log("content", content);

  return (
    <>
      <h1 className="search-text">Search your movies here</h1>
      <div className="search">
        <TextField
          style={{ flex: 1 }}
          id="outlined"
          label="search"
          variant="outlined"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button
          disabled={searchText.length < 1}
          onClick={fetchSearch}
          variant="contained"
          style={{ marginLeft: 10 }}
        >
          <SearchIcon fontSize="large" />
        </Button>
      </div>
      <div className="trending">
        {content && <SingleContent />}
        {!content && <h2>Nothing to display</h2>}
      </div>
      <CustomPagination setPage={setPage} numOfPages={numOfPages} />
    </>
  );
}

export default Search;
