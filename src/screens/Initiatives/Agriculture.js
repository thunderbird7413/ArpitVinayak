import React, { useContext } from "react";
import "../../components/Css/Events_InitCard.css";
import { Events_InitCard1 } from "../../components/Javascript/Events_InitCard1";
import az from "../../Images/Initiatives/Technology/azolla.jpg";
import jiv from "../../Images/Initiatives/Technology/jeev.jpeg";
import FPO from "../../Images/Puranpur/FPO awarness.jpg";

import { InitiativeContext } from "../../context/InitiativeContext";
export const Agriculture = () => {
  const { initiatives } = useContext(InitiativeContext);
  const AgricultureInitiatives = initiatives.filter((initiative) => {
    return initiative.category === "Agriculture";
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
              <li className="Init_active">Agriculture</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="cards">
        {/* <Events_InitCard1
          image={jiv}
          village="All villages |"
          date="Dec 3,2023"
          event="Jivamrit Initiative"
          desc="Team UBA, IIT Roorkee took the Jeevamrit initiative,a biopesticide and organic manure prepared by fermenting a  mixture of cow dung, cow urine, jaggery etc"
        />
        <Events_InitCard1
          image={az}
          village="All villages |"
          date="Sept 17, 2023"
          event="Azolla Cultivation"
          desc="Team UBA, IIT Roorkee identified that the cattle owned by farmers lack nutrients in their regular fodder which is further causing low yield of milk produced by them. "
        />
        <Events_InitCard1
          image={FPO}
          village="Puranpur | "
          date="June 23, 2023"
          event="FPO Awareness session"
          desc="Team conducted session regarding FPO with the farmers of Puranpur."
        /> */}
        {AgricultureInitiatives.map((initiative) => (
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
