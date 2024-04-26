import React from "react";
import "./Card.css";

import home from "../assets/ihome-100.png";
import sport from "../assets/isport-100.png";
import work from "../assets/iwork-100.png";

function Card() {
  return (
    <section>
      <div className="status">
        <h4>Status</h4>
      </div>
      <div className="description">
        <h3>Mon titre H3</h3>
        <div>
          <button>Modifié </button>
        </div>
      </div>
      <div className="category">
        <img src={work} alt="alt de l'image" />
        <p>Category</p>
      </div>
      <div className="deadline">
        <p>DeadLine</p>
      </div>
      <div className="trash">
        <img
          src="https://cdn-icons-png.flaticon.com/512/860/860829.png"
          alt="poubelle"
        />
      </div>
    </section>
  );
}

export default Card;
