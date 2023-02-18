import "./App.css";
import List from "./Components/List";
import Navbar from "./Components/Navbar";
import Search from "./Components/Search";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
      <List />
    </div>
  );
}

export default App;
