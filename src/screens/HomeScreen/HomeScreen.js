import IdentityCard from '../../components/Javascript/IdentityCard'
import { InitCard } from '../../components/Javascript/InitCard'
import Footer from './Javascript/Footer'
import Footer1 from './Javascript/Footer1'
import food_kit from '../../Images/Puranpur/recreational_activities.jpg'
import cycle_donation from '../../Images/Beladi/CycleDonation/i.jpg'
import swacchta_hi_seva from '../../Images/Chharba/PlasticFreeIndia_Chharba/i.jpeg'
import director from '../../Images/patron/director.JPG'
import mparida from '../../Images/patron/mprdaf.jpg'
import ap from '../../Images/patron/Ap.jpeg'
import bhanu from '../../Images/patron/bhanu.jpg'
import Inspiration from './Javascript/Inspiration'
import { BsFillHeartFill } from 'react-icons/bs';
import { Work } from './Javascript/Work'
import "./css/App.css"
import up from "../../Images/patron/up.jpeg"
import About from './Javascript/About'
import './css/Carousel.css';
import ImageSlider from "./Javascript/Slider";
import FrontPageCarousel from "./Javascript/FrontPageCarousel";
import FPO from "../../Images/Puranpur/FPO awarness.jpg"
import SanitaryNapkin from "../../Images/Gopalpur/Sanitary_Napkin.jpg"

export const HomeScreen = () => {


  return (
    <>
      <div style={{width:'full'}}>
      <FrontPageCarousel/>
      <About />
      <div className="container">
        <section >
          {/* <!--======= TITTLE =========--> */}
          <div className="tittle">
            <h2>Our Recent <span>Initiatives </span></h2>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <center>
                <InitCard image={food_kit} village="Puranpur | " date="August 5, 2023" init="Recreational Activities" initiative="Team UBA organized co-circular activities for over 100+ students in Puranpur"/><br/>
              </center>
            </div>
            <div className="col-lg-4">
              <center>
                <InitCard image={SanitaryNapkin} village="Chandpur | " date="July 20, 2023" init="Sanitary Napkin Machine" initiative="Team successfully setup a semi automatic pad making machine in village Chandpur." /><br/>
              </center>
            </div>
            <div className="col-lg-4">
              <center>
                <InitCard image={FPO} village="Puranpur | " date="June 23, 2023" init="FPO Awareness session" initiative="Team conducted session regarding FPO with the farmers of Puranpur." /><br/>
              </center>
            </div>
          </div>
        </section>
      </div>
      <Work /><br/><br/>
      <h2><center>Our <b>Patrons</b></center></h2>
      <div className="container mt-1">
        <div className="row">
          <div className="col-md-1">
          </div>
          <div className="col-md-5">
            <IdentityCard name="Prof. Kamal Kishore Pant"
              designation="Director, IIT Roorkee"
              image={director}
              link="https://iitr.ac.in/Institute/Director%20IIT%20Roorkee.html#:~:text=Director%20IIT%20Roorkee&text=Director%2C%20IIT%20Roorkee-,Prof.,of%20Technology%20Kanpur%20in%201997." />
          </div>
          <div className="col-md-5">
            <IdentityCard name="Prof. U.P. Singh"
              designation="Dy Director, IIT Roorkee"
              image={up}
              link="https://www.iitr.ac.in/departments/CE/pages/People+Faculty+Parida_M_.html" />
          </div>
          <div className="col-md-1"></div>
        </div>
        <div className="row mt-2">
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <IdentityCard name="Dr.Bhanu Prakash Vellanki"
              designation="Co-ordinator, UBA IIT Roorkee"
              image={bhanu}
              link="https://civil.iitr.ac.in/CE?Uid=bhanufce" />
          </div>
          <div className="col-md-5">
            <IdentityCard name="Prof. Ashish Pandey"
              designation="Regional Cordinator, UBA"
              image={ap}
              link="https://www.iitr.ac.in/departments/WRT/pages/People+Faculty+ashisfwt.html" />
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
      <div className="container">
        {/* <!--======= TITTLE =========--> */}
        <div className="tittle">
          <h2 className='-mt-2'>Fresh From The <span>Blog</span></h2>
          <p className='mb-2'>Work.  Innovation.  Fun.</p>
        </div>
        <div className="row mt-5 carousel-blog carousel">

          <ImageSlider />
        </div>
      </div>
      <Inspiration />
      {/* <!--======= PROUD =========--> */}
      <section ><br/>
        <center><h2>Be the change <span className="Heart"><BsFillHeartFill /></span> <strong>You wish to see</strong>.</h2></center>
      <br />
      </section>
      </div>
      
    </>
  )
}

