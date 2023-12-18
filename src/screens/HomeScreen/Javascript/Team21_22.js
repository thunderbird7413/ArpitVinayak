import React from 'react'
import "../css/StudentTeam.css";
import HTANWAR from "../../../Images/StudentTeam/HARSH TANWAR.jpg";
import HKUMAR from "../../../Images/StudentTeam/HARSH KUMAR.jpg";
import KURELLI from "../../../Images/StudentTeam/KURELLI DIKSHITHA.jpg";
import SUNIDHI from "../../../Images/StudentTeam/SUNIDHI JINDAL.jpg";
import KAVYA from "../../../Images/StudentTeam/KAVYA SAXENA.jpg";
import AISHWARYA from "../../../Images/StudentTeam/AISHWARYA MERTIA.jpeg";
import Deepal from "../../../Images/StudentTeam/Deepal Tiwari.jpg";
import URADE from "../../../Images/StudentTeam/URADE PRATYAY.jpg";
import AYUSH from "../../../Images/StudentTeam/AYUSH KUMAR.jpg";
import PRAMOD from "../../../Images/StudentTeam/PRAMOD KUMAR.jpg";
import ABHINAV from "../../../Images/StudentTeam/ABHINAV SAINI.jpg";
import KESHAV from "../../../Images/StudentTeam/KESHAV PARETA.jpg";
import HINGANE from "../../../Images/StudentTeam/HINGANE YASH.jpg";
import VISHAL from "../../../Images/StudentTeam/VISHAL YADAV.jpg";
import SAGAR from "../../../Images/StudentTeam/SAGAR GUPTA.jpg";
import ANKIT from "../../../Images/StudentTeam/ANKIT BABU.jpg";
import { Row, Container } from "react-bootstrap";
import { StudentIdentityCard1 } from "../../../components/Javascript/StudentIdentityCard1";
import { BsFillHeartFill } from 'react-icons/bs';
export const Team21_22 = () => {
    return (
    <>
      <Container style={{ background: "#f7f8f9" }}>
        <h1 className="text-center headingStudent1 my-5">Central Team 2021-22</h1>
        <Row>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard1
              studImg={HTANWAR}
              name="Harsh Tanwar"
              pos="Team Leader"
              linkedIn="https://www.linkedin.com/in/harsh-tanwar-100b1019b/"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard1
              studImg={HKUMAR}
              name="Harsh Kumar"
              pos="Overall Operations Coordinator"
              
              linkedIn="https://www.linkedin.com/in/"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard1
              studImg={KURELLI}
              name="Kurelli Dikshita"
              pos="Overall  Coordinator for Initiatives"
              
              linkedIn="https://www.linkedin.com/in/kurelli-dikshitha-6095a5192/"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard1
              studImg={SUNIDHI}
              name=" Sunidhi Jindal"
              pos="Overall Co-ordinator for Media and Outreach"
              
              linkedIn="https://www.linkedin.com/in/sunidhi-jindal-57921a1b9/"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard1
              studImg={KAVYA}
              name="Kavya Saxena"
              pos="Overall Co-ordinator for Documentation"
              
              linkedIn="https://www.linkedin.com/in/kavya-s-22ba83194/"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard1
              studImg={AISHWARYA}
              name="Aishwariya Mertia"
              pos="Overall Co-ordinator for NGO , CSR & Sponsorship"
              
              linkedIn="https://www.linkedin.com/in/aishwarya-mertia-7019a71a2/"
            />
            <br />
          </div>

          <h1 className="text-center headingStudent1 my-5">Village Team</h1>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard1
              studImg={Deepal}
              name="Deepal Tiwari"
              pos="Village Co-ordinator"
              village="Beladi"
              
              linkedIn="https://www.linkedin.com/in/deepal-tiwari-531b1a198/"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard1
              studImg={URADE}
              name="Pratyay Urade"
              pos="Village Co-ordinator"
              village="Beladi"
              
              linkedIn="https://www.linkedin.com/in/pratyay-urade-532227191/"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard1
              studImg={KESHAV}
              name="Keshav Pareta"
              pos="Village Co-ordinator"
              village="Chandpur"
              
              linkedIn="https://www.linkedin.com/in/keshav-pareta-041029179/"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard1
              studImg={ABHINAV}
              name="Abhinav Saini"
              pos="Village Co-ordinator"
              village="Chandpur"
              
              linkedIn="https://www.linkedin.com/in/abhinav-saini-7a860519b/"
            />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard1
              studImg={AYUSH}
              name="Ayush Kumar"
              pos="Village Co-ordinator"
              village="Chharba"
             
              linkedIn="https://www.linkedin.com/in/"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard1
              studImg={PRAMOD}
              name="Pramod Kumar"
              pos="Village Co-ordinator"
              village="Chharba"
              linkedIn="https://www.linkedin.com/in/pramod-kumar-b4b595218/"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard1
              studImg={VISHAL}
              name="Vishal Yadav"
              pos="Village Co-ordinator"
              village="Meerpur"
              
              linkedIn="https://www.linkedin.com/in/vishal-yadav-b3b1a5158/"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard1
              studImg={HINGANE}
              name="Yash Hingane"
              pos="Village Co-ordinator"
              village="Meerpur"
              linkedIn="https://www.linkedin.com/in/yash-hingane-b63645120/"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard1
              studImg={ANKIT}
              name="Ankit Babu"
              pos="Village Co-ordinator"
              village="Puranpur"
              linkedIn="https://www.linkedin.com/in/ankit-babu-86a35619b/"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard1
              studImg={SAGAR}
              name="Sagar Gupta"
              pos="Village Co-ordinator"
              village="Puranpur"
              linkedIn="https://www.linkedin.com/in/sagar-gupta-86073619b/"
            />
            <br />
          </div>
        </Row>
        <br />
        <br />
        <center><h2>Be the change <span className="Heart"><BsFillHeartFill /></span> <strong>You wish to see</strong>.</h2></center>
        <br />
        <br />
      </Container>
    </>
  )
};