import React from 'react';
import './Card.scss';
import { useNavigate, useParams } from 'react-router-dom';
  
const Card = ({title, lead, description, logo, poradId, poster, duration}) => {
  let navigate = useNavigate();
  let { poradURL } = useParams();
  return (
    <div className='card tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      {
        (!duration)   // rozdělení odkazů karet na seznam Epizod nebo konkrétní Epizodu.
        ? <div onClick={() => {navigate(`/porady/${title}`);}}>
                      <h2>{title}</h2>
            {
              (lead)
              ? <p>{lead}</p>
              : <p>{description}</p>
            }
            
            {
              (logo)
              ? <img src={logo} alt='porad_logo'></img>
              : <img src={poster} alt='epizoda_poster'></img>
            }        
          </div>




            // Konkrétní epizody
        : <div onClick={() => {navigate(`/porady/${poradURL}/${title}`);}}>
                      <h2>{title}</h2>
            {
              (lead)
              ? <p>{lead}</p>
              : <p>{description}</p>
            }
            
            {
              (logo)
              ? <img src={logo} alt='porad_logo'></img>
              : <img src={poster} alt='epizoda_poster'></img>
            }        
          </div>

      }
    </div>
  );
}

export default Card;
