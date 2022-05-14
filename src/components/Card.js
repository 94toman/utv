import React from 'react';
import './Card.scss';
import { useNavigate } from 'react-router-dom';
  
const Card = ({title, lead, description, logo, poradId, poster}) => {
  let navigate = useNavigate();
  return (
    <div className='card tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <div onClick={() => {navigate(`/porady/${title}`);}}>
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
    </div>
  );
}

export default Card;
