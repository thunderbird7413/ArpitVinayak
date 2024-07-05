import React, { useContext } from "react";
import "../../components/Css/Events_InitCard.css";
import { Events_InitCard1 } from "../../components/Javascript/Events_InitCard1";
import candle from "../../Images/Initiatives/SHGs/candle.jpeg";
import gobar from "../../Images/Initiatives/SHGs/gobar.jpg";

import { InitiativeContext } from "../../context/InitiativeContext";
export const SHGs = () => {
  const { initiatives } = useContext(InitiativeContext);
  const SHGinitiatives = initiatives.filter((initiative) => {
    return initiative.category === "SHGs";
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
              <li className="Init_active">SHGs</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="cards">
        {/* <Events_InitCard1
          image={candle}
          date='Oct 23 , 2023'
          village ="All Villages |"
          event='Candle Making'
          desc='In lieu of the approaching festive season, UBA IIT Roorkee took up the initiative of candle-making to brighten the Diwali by giving the village women another skill towards self sufficiency.'/>
        <Events_InitCard1
          image={gobar}
          date='August 29 , 2023'
          village ="All Villages |"
          event='Gobar Diya Training'
          desc='Team UBA, IIT Roorkee conducted Gobar Diya Training at Rithaura-Grunt village for self-help group women. 
          In comparison to the currently available diyas, gobar diyas stand out as eco-friendly alternatives that cause no pollution and generate zero waste.'/> */}
        {SHGinitiatives.map((initiative) => (
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
