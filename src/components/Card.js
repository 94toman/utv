import React from 'react';
import './Card.scss';
import { useNavigate, useParams } from 'react-router-dom';
  
const Card = ({title, lead, description, logo, id, poster, duration, poradURL}) => {
  let navigate = useNavigate();

  // function to create URL name from String
  const normalizeURL = (str) => {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036F]/g, '')
      .replace(/\s+/g, '-')
      .toLowerCase()
  }

  return (
    <div className='card'>
      {
        (!duration)   // split card links into a list of Episodes or a specific Episode.
        ? <div onClick={() => {navigate(`/porad/${normalizeURL(title)}/${id}`);}}>
            <div className='card_img'>
              <img src={logo} alt='porad_logo'></img>
            </div>
            <div className='card_text'>
              <h2>{title}</h2>
              <p>{lead}</p>
            </div>
          </div>

            // Specific Episodes
        : <div onClick={() => {navigate(`/porad/${poradURL}/epizoda/${normalizeURL(title)}/${id}`);}}>
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

