import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';
  
const Card = ({title, lead, logo, poradId}) => {
  let navigate = useNavigate();
  return (
    <div className='card tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <div onClick={() => {navigate(`/porady/${title}`);}}>
        <h2>{title}</h2>
        <p>{lead}</p>
        <img src={logo} alt='porad_logo'></img>
      </div>
    </div>
  );
}

export default Card;
