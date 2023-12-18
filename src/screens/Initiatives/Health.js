import React from 'react';
import "../../components/Css/Events_InitCard.css"
import { Events_InitCard } from '../../components/Javascript/Events_InitCard'
import eye from '../../Images/Initiatives/Health/eye.jpeg'
import jiv from '../../Images/Initiatives/Technology/jeev.jpeg'



export const Health = () => {
  return <div>
         <div className="Init_sub-banner">
          <div className="Init_overlay">
          <div className="Init_container">
          <h2>Initiatives</h2>
          <ol className="Init_breadcrumb">
          <li><a href="#"><h3>Home</h3></a></li>
          <li className="Init_active">Health</li>
          </ol>
          </div>
          </div>
          </div>
      <div className='cards'>
      <Events_InitCard 
          image={eye}
          date='October 28,2023'
          event='Eye Health Camp'
          desc='Team UBA IIT Roorkee organized a vital Eye Health Camp in Gopalpur, addressing the lack of healthcare facilities within the Gopalpur village in collaboration with "The Hans Foundation"'/>
      <Events_InitCard 
          image={jiv}
          date='March 10, 2023'
          event='Female Health Camp'
          desc='Team UBA, IITR with Panasonic team conducted a Female Awareness Program in the temple at Puranpur village to empower women with knowledge and promote good health '/>
      </div>
  </div>;
};