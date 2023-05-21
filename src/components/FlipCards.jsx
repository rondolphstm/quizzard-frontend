import React, { useState } from 'react';
import './FlipCard.css';

const FlipCards = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {/* Content for the front side of the card */}
          <h2>Front Side</h2>
        </div>
        <div className="flip-card-back">
          {/* Content for the back side of the card */}
          <h2>Back Side</h2>
        </div>
      </div>
    </div>
  );
};

export default FlipCards;
