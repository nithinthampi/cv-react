import React from "react";
import PreLoader from "./components/sections/pre_loader";
import Menu from "./components/sections/home";
import VCard from "./components/sections/v_card";
import About from "./components/sections/about";
import Education from "./components/sections/education";
import Skills from "./components/sections/skills";
import Experience from "./components/sections/experience";
import Contact from "./components/sections/contact";
import ScrollUp from "./components/sections/scroll_to_top";
import Footer from "./components/sections/footer";


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
      <Contact />
      <ScrollUp />
      <Footer />
    </div>
  );
}

export default App;
