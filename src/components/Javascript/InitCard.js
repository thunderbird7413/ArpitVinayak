import React, { useState, useContext } from "react";
import "../Css/InitCard.css";
import Popup_con from "./Popup_con";
import { InitiativeContext } from "../../context/InitiativeContext";

export const InitCard = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  const { deleteInitiative } = useContext(InitiativeContext);
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  const handleDelete = () => {
    deleteInitiative(props.index);
  };
  const string = `${props.village}`;
  const lowercaseString = string.charAt(0).toUpperCase() + string.slice(1);
  return (
    <div id="f_card" className={showDetails ? "active" : ""}>
      <div id="card_img">
        <img src={props.image} alt="Initiative Image" />
      </div>
      <div id="card_cont">
        <div id="card_head">
          {lowercaseString} <span>{props.date}</span>
          <h4>{props.init}</h4>
        </div>
        <button id="arrow_button" onClick={toggleDetails}>
          {showDetails ? "↑" : "↓"}
        </button>

        {showDetails && (
          <div id="popup_details">
            {/* Additional details or text here */}
            <p style={{ text: "dark", marginLeft: "0.30rem" }}>
              {props.moreDetails}
            </p>
          </div>
        )}
        <button
          className="btn btn-danger"
          onClick={handleDelete}
          style={{ margin: "0" }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
