import Heading from "./components/Heading";
import ListProduct from "./components/ListProduct";
import TotalProduct from "./components/TotalProduct";

import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <Heading />
        <ListProduct />
        <TotalProduct />
      </main>
    </div>
  );
}

export default App;
