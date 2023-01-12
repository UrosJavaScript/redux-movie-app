import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { getAllMovies, getAllSeries } from "../../features/movies/movieSlice";
import MovieCard from '../MovieCard/MovieCard';
import { Settings } from "./SettingSlide";
import "./MovieListing.scss";

const MovieListing = () => {
    const movies = useSelector(getAllMovies);
    const series = useSelector(getAllSeries);
    let renderMovies, renderSeries = "";

    renderMovies = movies.Response === "True" ? (
        movies?.Search.map((movie, index) => {
            return <MovieCard key={index} data={movie} />
        })
    ) : (<div className="movies-error"><h3>{movies.Error}</h3></div>);

    renderSeries = series.Response === "True" ? (
        series?.Search.map((series, index) => {
            return <MovieCard key={index} data={series} />
        })
    ) : (<div className="series-error"><h3>{series.Error}</h3></div>);


    

    return (
        <>
            <div className="movie-wrapper">
                <div className="movie-list">
                    <h2>Movies</h2>
                    <div className="movie-container"> <Slider {...Settings}>{renderMovies}</Slider></div>
                </div>
                <div className="series-list">
                    <h2>Series</h2>
                    <div className="movie-container"> <Slider {...Settings}>{renderSeries}</Slider></div>
                </div>
            </div>
        </>
    );
}
 
export default MovieListing;