import React from "react";
import "./Filters.css";

function Filters() {
  return (
    <section className="todo-filter">
      <label htmlFor="status">
        Filtrer par statut :
        <select name="status" id="status">
          <option value="">Toutes les to do</option>
          <option value="A faire">A faire</option>
          <option value="En cours">En cours</option>
          <option value="En pause">En pause</option>
        </select>
      </label>
      <label htmlFor="description">
        Filtrer par description :
        <input type="text" id="description" />
      </label>
    </section>
  );
}

export default Filters;
