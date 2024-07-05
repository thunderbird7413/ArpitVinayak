import React from "react";
import { useParams } from "react-router-dom";
function VisitVillage() {
  const { id } = useParams();

  return (
    <div style={{ marginTop: "3vw" }}>
      <div className="container">
        <h1>Admin Panel</h1>
        <h1 style={{ textAlign: "center" }}>{id}</h1>
        <div
          className="buttons"
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "4vw",
          }}
        >
          <a href={`/admin/addEvent`}>
            <button type="button" class="btn btn-primary">
              Add Event
            </button>
          </a>
          <a href={`/admin/addInitiative`}>
            <button type="button" class="btn btn-primary">
              Add Initiative
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default VisitVillage;
