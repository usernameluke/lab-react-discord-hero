// src/App.jsx
import "./App.css";
import { NavBar } from "./components/navBar";
import { SiteHeader } from "./components/SiteHeader";
import { SiteText } from "./components/SiteText";

function App() {
  return (
    <div className="App">
      <div className="NavBar">
        <NavBar/>
      </div>
      <div className="Content">
        <SiteHeader/>
        <SiteText/>
        <button className="ButtonOne">Download for Mac</button>
        <button className="ButtonTwo">Open Discord in your Browser</button>
      </div>
    </div>
  );
}

export default App;
