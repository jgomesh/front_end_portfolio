import React from "react";
import Navbar from "../components/Navbar";
import Work from "../components/Work";
import Skills from "../components/Skills";

function Project({ history }) {
  return (
    <>
    <div className="space-bg">
      <Navbar history={ history }/>
      <Work />
      <Skills />
    </div>
    </>
  )
}

export default Project;