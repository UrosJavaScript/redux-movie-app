import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import user from '../../images/user.png';
import { fetchAsyncMovies, fetchAsyncSeries } from "../../features/movies/movieSlice";
import "./Header.scss";

const Header = () => {
    const [term, setSearch] = useState("");
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        if (term === "") return alert("Please enter search term!");
        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncSeries(term));
        setSearch("");
    };

    return (
        <div className="header">
            <div className="logo"><Link to="/"> Movie App </Link></div>
            <div className="search-bar">
                <form onSubmit={submitHandler}>
                    <input type="text" value={term} placeholder="Search Movies" onChange={(e) => setSearch(e.target.value)}  />
                    <button type="submit"> <FontAwesomeIcon icon={faSearch} className="search" /></button>
                </form>
            </div>
            <div className="user-image">
                <img src={user} alt="user" />
            </div>
            
        </div>
    );
}
 
export default Header;