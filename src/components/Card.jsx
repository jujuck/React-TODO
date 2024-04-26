import React from "react";
import "./Card.css";

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
        <img src="" alt="alt de l'image" />
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
