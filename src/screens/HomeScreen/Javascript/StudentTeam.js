import React from "react";
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
import Shubham from "../../../Images/StudentTeam/Shubham.jpg";
import Mohit from "../../../Images/StudentTeam/Mohit.jpg";
import Archi from "../../../Images/StudentTeam/Archi.jpg";
import Rohini from "../../../Images/StudentTeam/Rohini.jpg";
import Kritika from "../../../Images/StudentTeam/Kritika.JPG";
import Prakhar from "../../../Images/StudentTeam/Prakhar.jpg";
import Khushi from "../../../Images/StudentTeam/Khushi.jpg";
import Ani from "../../../Images/StudentTeam/Ani.jpg";
import Kinshu from "../../../Images/StudentTeam/Kinshu.jpg";
import Pratibha from "../../../Images/StudentTeam/Pratibha.jpg";
import Kavya from "../../../Images/StudentTeam/Kavya.jpg";
import Ashish from "../../../Images/StudentTeam/Ashish.jpg";
import Abhishek from "../../../Images/StudentTeam/Abhishek.jpg";
import Udit from "../../../Images/StudentTeam/Udit.jpeg";
import Srishti from "../../../Images/StudentTeam/Srishti.JPG";
import Shailja from "../../../Images/StudentTeam/Shailja.jpg";
import Pratyaksh from "../../../Images/StudentTeam/Pratyaksh.jpg";
import Ramandeep from "../../../Images/StudentTeam/Ramandeep.jpg";
import { Row, Container } from "react-bootstrap";
import { StudentIdentityCard } from "../../../components/Javascript/StudentIdentityCard";
import { BsFillHeartFill } from 'react-icons/bs';
export const StudentTeam = () => {
  return (
    <>
      <Container style={{ background: "#f7f8f9" }}>
        <h1 className="text-center headingStudent1 my-5">Central Team</h1>
        <Row>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={Shubham}
              name="Shubham Pal"
              pos="Team Leader"
              email="Email: shubham_p@mt.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/shubham-pal-924b34205"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={Mohit}
              name="Mohit Umraiya"
              pos="Overall Student Coordinator"
              email="Email: mohit_u@ee.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/mohit-umraiya-966911200"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={Archi}
              name=" Archi Gupta"
              pos="Overall Co-ordinator for Media and Outreach"
              email="Email: archi_g@ch.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/archi-gupta-7937b320b"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={Rohini}
              name="Rohini Shrivastava"
              pos="Overall Co-ordinator for Documentation"
              email="Email: rohini_s@ch.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/rohini-shrivastava-98288a204"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={Ramandeep}
              name="Ramandeep Singh"
              pos="Overall Co-ordinator for Finance "
              email="Email: ramandeep_s@ee.iitr.ac.in"
              linkedIn="http://linkedin.com/in/ramandeep-singh-b79199205"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={Srishti}
              name="Srishti Mishra"
              pos="Head (Agriculture & Waste Management) "
              email="Email: srishti_m@ch.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/srishti-mishra-316ab3235"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={Kritika}
              name="Kritika Paliwal"
              pos="Head (Self Help Groups) "
              email="Email: kritika_p@me.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/kayp"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={Prakhar}
              name="Prakhar Surana"
              pos="Head (Water Management & Education)"
              email="Email: prakhar_s@ece.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/prakhar-surana-36b4ba1b4"
            />
            <br />
          </div>

          <h1 className="text-center headingStudent1 my-5">Village Team</h1>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Khushi}
              name="Khushi Kumawat"
              pos="Village Co-ordinator"
              village="Beladi"
              email="Email: khushi_k@mt.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/khushi-kumawat-7b2697204"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Udit}
              name="Udit Mimami"
              pos="Village Co-ordinator"
              village="Beladi"
              email="Email: udit_m@ee.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/udit-mimani-413000208"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Ani}
              name="Ani Jeenwal"
              pos="Village Co-ordinator"
              village="Chandpur"
              email="Email: ani_j@me.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/ani-jeenwal-b89530223"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
            <StudentIdentityCard
              studImg={Kinshu}
              name="Kinshu Kumar"
              pos="Village Co-ordinator"
              village="Chandpur"
              email="Email: kinshu_k@me.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/kinshu-kumar-4bb67a19a"
            />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Ashish}
              name="Ashish Singh"
              pos="Village Co-ordinator"
              village="Chharba"
              email="Email: ashish_s@cy.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/ashish-singh-567825240"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Shailja}
              name="Shailja Gupta"
              pos="Village Co-ordinator"
              village="Chharba"
              email="Email: shailja_g@ch.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/shailja-gupta-01b196206"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Kavya}
              name="Kavya Bada"
              pos="Village Co-ordinator"
              village="Meerpur"
              email="Email: bada_k@me.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/kavya-bada-a49394200"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Pratyaksh}
              name="Pratyaksh Chauhan"
              pos="Village Co-ordinator"
              village="Meerpur"
              email="Email: pratyaksh_c@ce.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/pratyaksh-chauhan-20835620a"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Pratibha}
              name="Pratibha Pragya"
              pos="Village Co-ordinator"
              village="Puranpur"
              email="Email: pratibha_p@me.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/pratibha-pragya-181545152"
            />
            <br />
          </div>
          <div className="col-lg-5" style={{ marginLeft: "auto" }}>
          <StudentIdentityCard
              studImg={Abhishek}
              name="Abhishek Singh"
              pos="Village Co-ordinator"
              village="Puranpur"
              email="Email: abhishek_s2@ce.iitr.ac.in"
              linkedIn="https://www.linkedin.com/in/abhishek-singh-6b5a4b213"
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
  );
};
