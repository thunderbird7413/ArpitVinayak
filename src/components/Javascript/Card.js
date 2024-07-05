import React from "react";
import "../Css/Card.css";
function Card({ title, caption, imgUrl }) {
  const titleInString = `${title}`;
  const titleInLowercase =
    titleInString.charAt(0).toUpperCase() + titleInString.slice(1);
  return (
    <>
      <div class="card" style={{ width: "18rem" }}>
        <div class="card-body">
          <h5 class="card-title" style={{ textAlign: "center" }}>
            {titleInLowercase}
          </h5>
          {/* <p class="card-text">{truncatedCaption}</p> */}
          <div
            className="button"
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <a href={`/admin/addInitiative/${title}`} class="btn btn-primary">
              Add Initiative
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
