import React from 'react';
import Card from './Card.js';

const CardList = ({ programmes }) => {
  return (
    <div>
      {
        programmes.map((porad, i) => {
          return (
            <Card
              key = {i}
              title={programmes[i].title}
              lead={programmes[i].lead}
              logo={programmes[i].logo}
              poradId={programmes[i].id}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;