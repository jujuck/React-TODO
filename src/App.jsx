import "./App.css";
import Filters from "./components/Filters";
import Header from "./components/Header";

import data from "./assets/data/data";
import Card from "./components/Card";

function App() {
  console.log(data);
  return (
    <>
      <Header />
      <Filters />
      <Card todo={data[0]} />
    </>
  );
}

export default App;
