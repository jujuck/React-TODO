import React from "react";
import "./Card.css";

import home from "../assets/ihome-100.png";
import sport from "../assets/isport-100.png";
import work from "../assets/iwork-100.png";

const category = {
  maison: home,
  boulot: work,
  sport: sport,
};

function Card(props) {
  const image = props.todo.category;

  return (
    <section>
      <div className="status">
        <h4>{props.todo.status}</h4>
      </div>
      <div className="description">
        <h3>{props.todo.description}</h3>
        <div>
          <button>Modifié </button>
        </div>
      </div>
      <div className="category">
        <img src={category[image]} alt="alt de l'image" />
        <p>{props.todo.category}</p>
      </div>
      <div className="deadline">
        <p>{props.todo.deadline}</p>
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
