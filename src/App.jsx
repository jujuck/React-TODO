import { useState } from "react";

import "./App.css";
import Filters from "./components/Filters";
import Header from "./components/Header";

import data from "./assets/data/data";
import Card from "./components/Card";

function App() {
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
      <Header />
      <Filters
        status={status}
        setStatus={setStatus}
        description={description}
        setDescription={setDescription}
      />
      {data
        .filter(
          (element) =>
            (element.status === status || status === "") &&
            element.description
              .toLowerCase()
              .includes(description.toLowerCase())
        )
        .map((element) => (
          <Card todo={element} key={element.id} />
        ))}
    </>
  );
}

export default App;

/***
 * cosnt data = ["BOB", "Pierre", "Jean"]
 *
 * const nameWithE = data.filter(prenom => prenom.includes("e"))
 */
