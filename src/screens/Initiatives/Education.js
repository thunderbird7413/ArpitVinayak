import React, { useContext } from "react";
import "../../components/Css/Events_InitCard.css";
import { Events_InitCard1 } from "../../components/Javascript/Events_InitCard1";
import sci from "../../Images/Initiatives/Education/sci_ex.jpg";
import rec from "../../Images/Initiatives/Education/recreation.jpg";
import { InitiativeContext } from "../../context/InitiativeContext";
export const Education = () => {
  const { initiatives } = useContext(InitiativeContext);
  const EducationInitiatives = initiatives.filter((initiative) => {
    return initiative.category === "Education";
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
              <li className="Init_active">Education</li>
            </ol>
          </div>
        </div>
      </div>
      <div className="cards">
        {/* <Events_InitCard1
          image={sci}
          date="Sept 21, 2023"
          village="Beladi |"
          event="Science Experiment Exhibition"
          desc="Team UBA, IIT Roorkee organised a science experiment exhibition at the Govt. Secondary School, Beladi-Salhapur. The motive of the exhibition was to engage students of class 9 and 10 in the inquisitiveness and excitement, science is bound to bring. "
        />
        <Events_InitCard1
          image={rec}
          date="August 5,2023"
          village="Puranpur |"
          event="Recreational Activities"
          desc="Team UBA, IIT Roorkee illuminated the village with energy and creativity by conducting co-curricular activities at a primary school in Puranpur.Team UBA organised activities such as dodgeball, lemon racing, and balloon racing for students of classes 1 to 4."
        /> */}
        {EducationInitiatives.map((initiative) => (
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
