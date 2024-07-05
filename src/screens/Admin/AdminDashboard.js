import React from "react";
import "./AdminDashboard.css";

import { useNavigate } from "react-router-dom";
import Card from "./../../components/Javascript/Card";

const AdminDashboard = () => {
  return (
    <>
      <div
        className="upper-admindashboard"
        style={{
          display: "flex",
          justifyContent: "space-around",
          paddingTop: "3vw",
        }}
      >
        <h1>Admin Dashboard</h1>
      </div>

      <div
        className="sabse-bahar-container container container-flex"
        style={{ flexDirection: "column", gap: "2px" }}
      >
        <h1>Initiative Panel</h1>
        <div className="container container-flex  mb-5">
          <Card
            title="beladi"
            caption="Beladi Salhapur village is located in the Roorkee block of Haridwar district. The village is governed by Beladi Salhapur Gram Panchayat."
            imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/The_great_manustamba.jpg/760px-Mapcarta.jpg"
          />
          <Card
            title="rithaura"
            caption="Rithaura-Grunt is a large village located in the Vikasnagar block of Dehradun district, Uttarakhand with a total of 1425 families residing."
            imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKRNZrivrKmVA2jqOyrWVEU4fSCHEyzz0lEA&s"
          />
          <Card
            title="gopalpur"
            caption="Gopalpur village comes under Vikasnagar block of district Dehradun, Uttarakhand. Being very close to mountains, it is situated on the banks of one of the tributaries of Yamuna River."
            imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1XIjlFQboezMze6-8RqPU6b6p55DfsUwNJQ&s"
          />
          <Card
            title="meerpur"
            caption="The Meerpur Muwazarpur village has population of 3061 of which 1589 are males while 1472 are females as per Population Census 2011."
            imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJT5iJHnd543z-ABH3XBz40a6VQAaMZfPDmw&s"
          />
          <Card
            title="puranpur"
            caption="The UBA team, formed in the month of August, 2017, conducted a survey on August 13, 2017 to understand the village and its people thoroughly with the help of the team members of other villages."
            imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4JNdOU6suxKt9mEAFVx82xoPzYtQ31BKd4g&s"
          />
        </div>
        <div
          className="container"
          style={{ flexDirection: "column", gap: "2px" }}
        >
          <h1>Events Panel</h1>
          <a
            href={`/admin/addEvent`}
            className="btn btn-primary"
            style={{ width: "100%" }}
          >
            Create Event
          </a>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
