import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAsyncShowDetailsMovies,
  getShowDetails,
  removeSelectedMovieShow,
} from "../../features/movies/movieSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faVoteYea } from "@fortawesome/free-solid-svg-icons";
import { faRunning } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import "./MovieDetail.scss";

const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getShowDetails);
  
  useEffect(() => {
    dispatch(fetchAsyncShowDetailsMovies(imdbID));
    return () => {
      dispatch(removeSelectedMovieShow());
    };
  }, [dispatch, imdbID]);


  console.log(data)

  return (
    <div className="movie-section">
        <>
          <div className="section-left" key="key1">
            <div className="movie-title">{data.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <FontAwesomeIcon icon={faStar} className="star" /> : {data.Ratings?.map(v => v.Value).join(", ") || "5"}
              </span>
              <span>
                IMDB Votes <FontAwesomeIcon icon={faVoteYea} className="vote" /> : {data.imdbVotes}
              </span>
              <span>
                Runtime <FontAwesomeIcon icon={faRunning} className="run" /> : {data.Runtime}
              </span>
              <span>
                Year <FontAwesomeIcon icon={faCalendar} className="year" /> : {data.Year}
              </span>
            </div>
            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director: </span>
                <span>{data.Director}</span>
              </div>
              <div>
                <span>Stars: </span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Generes: </span>
                <span>{data.Genre}</span>
              </div>
              <div>
                <span>Languages: </span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards: </span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>

          <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
    </div>
  );
};

export default MovieDetails;
