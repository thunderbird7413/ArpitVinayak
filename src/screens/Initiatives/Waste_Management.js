import React, { useContext } from "react";
import "../../components/Css/Events_InitCard.css";
import { Events_InitCard1 } from "../../components/Javascript/Events_InitCard1";
import bric from "../../Images/Initiatives/Waste_Management/Ecobricks.jpg";

import { InitiativeContext } from "../../context/InitiativeContext";
export const Waste_Management = () => {
  const { initiatives } = useContext(InitiativeContext);
  const WasteInitiatives = initiatives.filter((initiative) => {
    return initiative.category === "Waste Management";
  });
  return (
    <div>
      <div className="Init_sub-banner">
        <div className="Init_overlay">
          <div className="Init_container">
            <h2>Initiatives</h2>
            <ol className="Init_breadcrumb">
              <li>
                <a href="/">
                  <h3>Home</h3>
                </a>
              </li>
              <li className="Init_active">Waste_Management</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="cards">
        {/* <Events_InitCard1
          image={bric}
          date='June 5 , 2023'
          village ="Puranpur |"
          event='Ecobricks for sustainability'
          desc='To highlight the importance and usage of ecobricks, the team organized an interactive session for the students of Puranpur. The session aimed to educate the students about the ecological benefits of ecobricks and their potential applications'/> */}
        {WasteInitiatives.map((initiative) => (
          <Events_InitCard1
            image={initiative.image}
            date={initiative.date}
            village={initiative.village}
            event={initiative.init}
            desc={initiative.moreDetails}
          />
        ))}
      </div>
    </div>
  );
};
