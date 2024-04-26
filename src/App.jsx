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
      <Card />
    </>
  );
}

export default App;
