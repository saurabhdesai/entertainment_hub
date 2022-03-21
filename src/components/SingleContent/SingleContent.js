import React from "react";
import { Badge } from "@mui/material";
import "./SingleContent.css";
import { img_300, unavailable } from "../Config";
import DetailModal from "../Modal/DetailModal";
import { useSelector } from "react-redux";

function SingleContent() {
  const movies = useSelector((state) => state.allMovies.movies);

  const movieList = movies?.map((movie) => {
    return (
      <DetailModal id={movie.id}>
        <Badge
          badgeContent={movie.vote_average}
          color={movie.vote_average > 6 ? "primary" : "secondary"}
        ></Badge>
        <img
          className="poster"
          src={
            movie.poster_path ? `${img_300}${movie.poster_path}` : unavailable
          }
          alt={movie.title}
        />
        <b className="title">{movie.title}</b>
        <span className="subTitle">
          {movie.media_type === "tv" ? "TV Series" : "Movie"}
          <span className="subTitle">{movie.release_date}</span>
        </span>
      </DetailModal>
    );
  });

  return movieList;
}

export default SingleContent;
