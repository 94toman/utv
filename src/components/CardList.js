import React from 'react';
import Card from './Card.js';

const CardList = ({ db, poradURL }) => {
  return (
    <div>
      {
        db.map((porad, i) => {
          return (
            <Card
              key = {i}
              title={porad.title}
              programmetitle={porad.programmetitle}
              lead={porad.lead}
              description={porad.description}
              logo={porad.logo}
              poster={porad.poster}
              id={porad.id}
              duration={porad.duration}
              poradURL={poradURL}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;