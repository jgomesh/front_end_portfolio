import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";

function Landpage() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <section>
        PROJECTS
      </section>
      <footer>
        FOOTER
      </footer>
    </>
  )
}

export default Landpage;