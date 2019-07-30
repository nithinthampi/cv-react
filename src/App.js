import React from "react";
import PreLoader from "./components/pre_loader";
import Menu from "./components/home";
import VCard from "./components/v_card";
import About from "./components/about";
import Education from "./components/education";
import Skills from "./components/skills";
import Experience from "./components/experience";


function App() {
  return (
    <div>
      <PreLoader /> 
      <Menu />
      <VCard /> 
      <About />
      <Education />
      <Skills /> 
      <Experience />
    </div>
  );
}

export default App;
