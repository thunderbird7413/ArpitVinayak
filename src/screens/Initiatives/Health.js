import React, { useContext } from "react";
import "../../components/Css/Events_InitCard.css";
import { Events_InitCard1 } from "../../components/Javascript/Events_InitCard1";
import eye from "../../Images/Initiatives/Health/eye.jpeg";

import { InitiativeContext } from "../../context/InitiativeContext";
export const Health = () => {
  const { initiatives } = useContext(InitiativeContext);
  const HealthInitiatives = initiatives.filter((initiative) => {
    return initiative.category === "Health";
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
              <li className="Init_active">Health</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="cards">
        {/* <Events_InitCard1 
          image={eye}
          village = "Gopalpur |"
          date='October 28,2023'
          event='Eye Health Camp'
          desc='Team UBA IIT Roorkee organized a vital Eye Health Camp in Gopalpur, addressing the lack of healthcare facilities within the Gopalpur village in collaboration with "The Hans Foundation"'/> */}
        {HealthInitiatives.map((initiative) => (
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
