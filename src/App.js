import './App.css';
// Home Page
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './components/requests'
import Nav from './components/Nav';

// Landing Page
import Header from './components/Header';
import HomeBanner from './components/HomeBanner';
import Login from './components/Login';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path='/' element={
            <React.Fragment>
              <Header />
              <HomeBanner />
            </React.Fragment>
          }/>
          <Route path='/login' element={
            <React.Fragment>
              <Header />
              <Login page={true}/>
            </React.Fragment>
          }/>
          <Route path='/register' element={
            <React.Fragment>
              <Header />
              <Login page={false}/>
            </React.Fragment>
          }/>
          <Route path='/dashboard' element={
            <React.Fragment>
              <Nav />
              <Banner />
              <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
              isLargeRow
              />
              <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
              <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
              <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
              <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
              <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
              <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
              <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
            </React.Fragment>
          }/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
