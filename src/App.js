import "./App.css";
import React, { useState } from "react";
import Navbar from ".//Componants/Navbar";
import Section2 from "./Componants/Section-2";
import Section3 from "./Componants/Section-3";
import Section4 from "./Componants/Section-4";
import Section5 from "./Componants/Section-5";

function App() {
  const [mode, satMode] = useState("black");

  const toggleMode = () => {
    if (mode === "black") {
      satMode("warning");
    } else {
      satMode("black");
    }
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Section2 mode={mode} toggleMode={toggleMode} />
      <Section3 mode={mode} toggleBode={toggleMode} />
      <Section4 mode={mode} toggleMode={toggleMode} />
      <Section5 mode={mode} toggleMode={toggleMode} />
    </>
  );
}

export default App;
