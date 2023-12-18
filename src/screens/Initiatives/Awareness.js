import React from 'react';
import "../../components/Css/Events_InitCard.css"
import { Events_InitCard } from '../../components/Javascript/Events_InitCard'
import fpo from '../../Images/Initiatives/Awareness/FPO.jpg'
import carr from '../../Images/Initiatives/Awareness/carr.jpg'



export const Awareness = () => {
  return <div>
          <div className="Init_sub-banner">
          <div className="Init_overlay">
          <div className="Init_container">
          <h2>Initiatives</h2>
          <ol className="Init_breadcrumb">
          <li><a href="#"><h3>Home</h3></a></li>
          <li className="Init_active">EAwareness</li>
          </ol>
          </div>
          </div>
          </div>
      <div className='cards'>
      <Events_InitCard 
          image={fpo}
          date='June 6, 2023'
          event='FPO Awareness Session'
          desc='Team UBA conducted an informative and interactive session regarding FPO with the farmers of Puranpur with the assistance of  BhuAmrit FPO at Ambedkar Hall. '/>
        <Events_InitCard 
          image={carr}
          date='Yet_to_know'
          event='Career Counseling session'
          desc='Team UBA, IITR is glad to report that a career counseling session was held by the team at Bal Vidya Mandir, Junior High School for the students of classes 6th to 12th'/>
      </div>
  </div>;
};