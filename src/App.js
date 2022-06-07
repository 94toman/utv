import React, { useState, useEffect }  from 'react'; // { useState, useEffect }
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
import { dbDefault } from './components/db.js';

// RSC -> stateless component skeleton
// RCC -> class component skeleton
// https://marketplace.visualstudio.com/items?itemName=xabikos.ReactSnippets&ssr=false#overview
// https://reactrouter.com/docs/en/v6/getting-started/tutorial


function App() {
  const [poradyDb, setPoradyDb] = useState({
    programmes: dbDefault.programmes     // default db content before fetch
})

useEffect(() => {
  fetch('https://data.zaktv.cz/programmes.json')
  .then(resp => resp.json())
  .then(data => {
      setPoradyDb(data);  // update state with server data
  })
},[]) 


  return (
    <div className="App">
      <div className='allButFooter'>    {/*creates space at the bottom for Footer*/}
        <Router>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home dbDefault={poradyDb.programmes}/>}/>
            <Route path='/utv/' element={<Home dbDefault={poradyDb.programmes}/>}/>    {/* Only for Github page, won't be on live site */}
            <Route path='/porady/' element={<Porady dbDefault={poradyDb.programmes}/>}/>
            <Route path='/porad/:poradURL/:id' element={<Epizody/>}/>                  {/* Currently fetching data by ID, rest of URL is for readibility*/}
            <Route path='/porad/:poradURL/epizoda/:epizodaURL/:id' element={<Epizoda />}/>
            <Route path='/naladit' element={<Naladit />}/>
            <Route path='/kontakt' element={<Kontakt />}/>
            <Route path='*' element={<ErrorPage />}/>                                  {/* Error page*/}
          </Routes>     
        </Router>
      </div>
      <Footer />
    </div>

  );
}

export default App;


/* 

*/
