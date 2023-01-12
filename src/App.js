import * as React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageNotFound from './components/PageNotFound/PageNotFound';
import MovieDetail from './components/MovieDetail/MovieDetail';
import './App.scss';

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
