import React from 'react'; // { useState, useEffect }
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Porady from './pages/Porady';
import Epizody from './pages/Epizody'
import Naladit from './pages/Naladit';
import ErrorPage from './pages/ErrorPage';
import './App.scss';
import Footer from './components/Footer';
import MenuTop from './components/MenuTop';
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
        <MenuTop />
        <h1>Plzeň TV</h1>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/porady/' element={<Porady dbPorady={programmes}/>}/>
          <Route path='/porady/:poradId' element={<Epizody />}/>
          <Route path='/naladit' element={<Naladit />}/>
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
