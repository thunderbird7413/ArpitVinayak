import React from 'react';
import "../../components/Css/Events_InitCard.css"
import { Events_InitCard } from '../../components/Javascript/Events_InitCard'
import e1 from '../../Images/Events_image/swanpil1.jpeg'
import socio from '../../Images/Events_image/socio.jpeg'
import e3 from '../../Images/Events_image/anuradha1.png'
import e4 from '../../Images/Events_image/varsha1.png'
import e5 from '../../Images/Events_image/archana1.png'
import carr from '../../Images/Events_image/carr.png'
import shs from '../../Images/Events_image/shs.jpg'

export const InitCard_Events = () => {
  return <div>
          <div className="Init_sub-banner">
          <div className="Init_overlay">
          <div className="Init_container">
          <h2>Our <span>Events</span></h2>
          <ol className="Init_breadcrumb">
          <li><a href="#"><h3>Home</h3></a></li>
          <li className="Init_active">Events</li>
          </ol>
          </div>
          </div>
          </div>
      <div className='cards'>
      <Events_InitCard 
          image={carr}
          date='October 6, 2024'
          event='Navigate Your Career Path'
          desc='Prof. Vinay Nangiathe founding faculty advisor of SIIRD and UBA at IITR, a panelist for UPSC interviews shared his invaluable insights on navigating the professional world.'/>
        <Events_InitCard 
          image={shs}
          date='October 1, 2023'
          event='Swachhta hi Sewa campaign'
          desc='IIT Roorkee with the help of team UBA in association with NSS and NCC  organised awareness campaigns in its adopted villages Meerpur and Puranpur on 1st October, 2023.'/>
          <Events_InitCard 
          image={socio}
          date='August 24, 2023 - September 02, 2023'
          event='Sociothon'
          desc='Sociothon, a social case-study competition conducted by team Unnat Bharat Abhiyan, IIT Roorkee aimed to nurture and foster critical thinking skills .'/>
      </div>
      <div className='cards'>
      <Events_InitCard 
          image={e1}
          date='August 15, 2021'
          event='Oh Yuva! - Unleash your superpower'
          desc='On the eve of 75th Independence Day, Team UBA IITRbrought talk by Mr. Swapnil Tewari on topic- O Yuva!-Unleash your superpower.'/>
        <Events_InitCard
          image={e3}
          date='December 19, 2020'
          event='Spandan- Talk by Anuradha Kapoor'
          desc='In Spandan, Ms Anuradha Kapoor talked about how violence against women is an onging pandemic and much more.' />
          <Events_InitCard 
          image={e4}
          date='December 19, 2020'
          event='Spandan- Talk by Varsha Singh'
          desc='In Spandan, a session was organised by Ms Varsha singh where she showed self Defense techniques for women and much more.'/>
    </div>
      <div className='cards'>
      <Events_InitCard 
          image={e5}
          date='December 20, 2020'
          event='Spandan- Talk by Archana Garodia Gupta'
          desc='In Spandan, Mrs Aechana garodia Gupta talked about how rural transformation Acknowledging women and much more'/>
      </div>

  </div>;
};
