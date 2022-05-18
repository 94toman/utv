import React from 'react'; // { useState, useEffect }
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Porady from './pages/Porady';
import Epizody from './pages/Epizody';
import Epizoda from './pages/Epizoda.jsx';
import Naladit from './pages/Naladit';
import Kontakt from './pages/Kontakt';
import ErrorPage from './pages/ErrorPage';
import './App.scss';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { programmes, videos } from './components/db.js';


// RSC -> stateless component skeleton
// RCC -> 	class component skeleton
// https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets&ssr=false#overview

// https://youtu.be/UjHT_NKR_gU?t=494
// https://reactrouter.com/docs/en/v6/getting-started/tutorial


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/utv/' element={<Home />}/>
          <Route path='/porady/' element={<Porady dbPorady={programmes}/>}/>
          <Route path='/porady/:poradURL' element={<Epizody/>}/>
          <Route path='/porady/:poradURL/:epizodaURL' element={<Epizoda />}/>
          <Route path='/naladit' element={<Naladit />}/>
          <Route path='/kontakt' element={<Kontakt />}/>
          <Route path='*' element={<ErrorPage />}/>
        </Routes>     
      </Router>
      <Footer />
    </div>

  );
}

export default App;


/* 

*/
