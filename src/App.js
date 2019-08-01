import React from "react";
import PreLoader from "./components/pre_loader";
import Menu from "./components/home";
import VCard from "./components/v_card";
import About from "./components/about";
import Education from "./components/education";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Contact from "./components/contact";
import ScrollUp from "./components/scroll_to_top";
import Footer from "./components/footer";


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
