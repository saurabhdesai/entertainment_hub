import React, { useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import axios from "axios";
import { img_300, noPicture } from "../Config";
import "./slider.css";
import { set_trending_movies } from "../../redux/actions/MovieAction";

import DetailModal from "../Modal/DetailModal";
import { useDispatch, useSelector } from "react-redux";
const handleDragStart = (e) => e.preventDefault();

const Slider = ({ id }) => {
  const dispatch = useDispatch();
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=14dc5887929c72b4898b7faac0fd7b8a`
    );
    dispatch(set_trending_movies(data.results));
  };

  useEffect(() => {
    fetchTrending();
  }, []);
  const movies = useSelector((state) => state.allMovies.trending_movies);

  const items = movies?.map((c) => (
    <DetailModal id={c.id}>
      <div className="carouselItem">
        <img
          src={c.poster_path ? `${img_300}/${c.poster_path}` : noPicture}
          alt={c?.title}
          onDragStart={handleDragStart}
          className="carouselItem__img"
        />
        <b className="carouselItem__txt">{c?.title}</b>
      </div>
    </DetailModal>
  ));
  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 3,
    },
    1024: {
      items: 5,
    },
  };

  return (
    <div className="slider">
      <h1 className="trending_slider">Trending</h1>
      <AliceCarousel
        autoPlay
        responsive={responsive}
        mouseTracking
        infinite
        disableDotsControls
        items={items}
      />
    </div>
  );
};
export default Slider;
