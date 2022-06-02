import React from 'react';
import './Card.scss';
import { useNavigate, useParams } from 'react-router-dom';
  
const Card = ({title, lead, description, logo, poradId, poster, duration}) => {
  let navigate = useNavigate();
  let { poradURL } = useParams();
  return (
    <div className='card'>
      {
        (!duration)   // rozdělení odkazů karet na seznam Epizod nebo konkrétní Epizodu.
        ? <div onClick={() => {navigate(`/porady/${poradId}`);}}>
            <div className='card_img'>
              <img src={logo} alt='porad_logo'></img>
            </div>
            <div className='card_text'>
              <h2>{title}</h2>
              <p>{poradId}</p>
              <p>{lead}</p>
            </div>
          </div>

            // Konkrétní epizody
        : <div onClick={() => {navigate(`/porady/${poradId}/${title}`);}}>
            <div className='card_img'>
              <img src={poster} alt='epizoda_poster'></img>      
            </div>
            <div className='card_text'>
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
          </div>

      }
    </div>
  );
}

export default Card;


//               