import React from 'react';
import Card from './Card.js';

const CardList = ({ db }) => {
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
              poradId={porad.id}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;