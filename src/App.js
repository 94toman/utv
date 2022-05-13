import React from 'react'; // { useState, useEffect }
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import Porady from './pages/Porady';
import Epizody from './pages/Epizody'
import Naladit from './pages/Naladit';
import ErrorPage from './pages/ErrorPage';
import './App.css';
import Footer from './components/Footer';
import MenuTop from './components/MenuTop';


// RSC -> stateless component skeleton
// RCC -> 	class component skeleton
// https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets&ssr=false#overview

// https://youtu.be/UjHT_NKR_gU?t=494
// https://reactrouter.com/docs/en/v6/getting-started/tutorial

const dbPorady = {
  "result": "success",
  "type": "programmes",
  "count": "35",
  "programmes": [
      {
          "id": "39",
          "lastchange": "1560326393",
          "status": "current",
          "title": "100 let na jihu Čech",
          "lead": "Ve čtyřech dílech Vás provedeme sto letou historií ji\u017en\u00edch \u010cech",
          "description": "",
          "logo": "https://www.zaktv.cz/orez-270-152/porady/88.jpg"
      },
      {
          "id": "58",
          "lastchange": "1622623487",
          "status": "current",
          "title": "Divadelní magazín",
          "lead": "Lorem ipsum",
          "description": "",
          "logo": "https://www.zaktv.cz/orez-270-152/porady/77.jpg"
      }
  ]
}

function App() {
  return (
    <div className="App">
      <MenuTop />
      <h1>Plzeň TV</h1>
      <Router>
        <nav>
          <Link to='/'> Home </Link>
          <Link to='/porady'> Pořady </Link>
          <Link to='naladit'> Jak naladit </Link>
        </nav>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/porady/' element={<Porady dbPorady={dbPorady}/>}/>
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
