import React, { useState } from 'react';
import '../Css/InitCard.css';
import Popup_con from './Popup_con';

export const InitCard = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div id="f_card" className={showDetails ? 'active' : ''}>
      <div id="card_img">
        <img src={props.image} alt="Initiative Image" />
      </div>
      <div id="card_cont">
        <div id="card_head">
          {props.village} <span>{props.date}</span>
          <h4>{props.init}</h4>
        </div>
        <div id="card_main" style={{ padding: "0.7rem" }}>
          {props.initiative}
        </div>
        <button id="arrow_button" onClick={toggleDetails}>
          {showDetails ? '↑' : '↓'}
        </button>
        {showDetails && (
          <div id="popup_details">
            {/* Additional details or text here */}
            <p>{props.moreDetails}</p>
          </div>
        )}
      </div>
    </div>
  );
};
