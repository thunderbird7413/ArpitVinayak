import React from 'react';
import "../../components/Css/Events_InitCard.css"
import { Events_InitCard } from '../../components/Javascript/Events_InitCard'
import az from '../../Images/Initiatives/Technology/azolla.jpg'
import jiv from '../../Images/Initiatives/Technology/jeev.jpeg'
import food from '../../Images/Initiatives/Technology/food.jpeg'



export const Technology = () => {
  return <div>
         <div className="Init_sub-banner">
          <div className="Init_overlay">
          <div className="Init_container">
          <h2>Initiatives</h2>
          <ol className="Init_breadcrumb">
          <li><a href="#"><h3>Home</h3></a></li>
          <li className="Init_active">Technology</li>
          </ol>
          </div>
          </div>
          </div>
      <div className='cards'>
      <Events_InitCard 
          image={jiv}
          date='Dec 3,2023'
          event='Jivamrit Initiative'
          desc='Team UBA, IIT Roorkee took the Jeevamrit initiative,a biopesticide and organic manure prepared by fermenting a  mixture of cow dung, cow urine, jaggery etc'/>
      <Events_InitCard 
          image={az}
          date='Sept 17, 2023'
          event='Azolla Cultivation'
          desc='Team UBA, IIT Roorkee identified that the cattle owned by farmers lack nutrients in their regular fodder which is further causing low yield of milk produced by them. '/>
       <Events_InitCard 
          image={az}
          date='Dec 16, 2022'
          event='Incense-Stick Manufacturing'
          desc='Team UBA assembled the SHG women and acquired the incense stick machine so that Mrs. Saira Banu, the trainer, trained the SHG women on the composition of raw materials and packing.'/>   
      </div>
      <div className='cards'>
      <Events_InitCard 
          image={food}
          date='Nov 9,2022'
          event='Food Processing'
          desc='Team UBA, IIT Roorkee took the Jeevamrit initiative,a biopesticide and organic manure prepared by fermenting a  mixture of cow dung, cow urine, jaggery etc'/>
      <Events_InitCard 
          image={az}
          date='Sept 17, 2023'
          event='Azolla Cultivation'
          desc='Team UBA, IIT Roorkee identified that the cattle owned by farmers lack nutrients in their regular fodder which is further causing low yield of milk produced by them. '/>
       <Events_InitCard 
          image={az}
          date='Dec 16, 2022'
          event='Incense-Stick Manufacturing'
          desc='Team UBA assembled the SHG women and acquired the incense stick machine so that Mrs. Saira Banu, the trainer, trained the SHG women on the composition of raw materials and packing.'/>   
      </div>

  </div>;
};