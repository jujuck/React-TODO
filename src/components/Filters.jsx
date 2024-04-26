import "./Filters.css";

function Filters(props) {
  console.log(props);

  return (
    <section className="todo-filter">
      <label htmlFor="status">
        Filtrer par statut :
        <select
          name="status"
          id="status"
          value={props.status}
          onChange={(event) => props.setStatus(event.target.value)}
        >
          <option value="">Toutes les to do</option>
          <option value="A faire">A faire</option>
          <option value="En cours">En cours</option>
          <option value="En pause">En pause</option>
        </select>
      </label>
      <label htmlFor="description">
        Filtrer par description :
        <input
          type="text"
          id="description"
          value={props.description}
          onChange={(event) => props.setDescription(event.target.value)}
        />
      </label>
    </section>
  );
}

export default Filters;
