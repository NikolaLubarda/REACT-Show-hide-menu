import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [showMenu, setShowMenu] = useState("");

  function handleShowMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <>
      <button onClick={handleShowMenu}> Menu</button>
      <div className={showMenu ? "menuContainer" : "menuContainer1"}>
        <button> More Info</button>
        <button> Contact</button>
        <button> Similiar</button>
        <button> Something fun</button>
      </div>
    </>
  );
}

export default App;
