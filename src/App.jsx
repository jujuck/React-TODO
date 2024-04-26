import "./App.css";
import Filters from "./components/Filters";
import Header from "./components/Header";

import data from "./assets/data/data";

function App() {
  console.log(data);
  return (
    <>
      <Header />
      <Filters />
      <h1>Ma liste To do</h1>
    </>
  );
}

export default App;
