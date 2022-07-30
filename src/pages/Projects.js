import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Work from "../components/Work";
import Skills from "../components/Skills";

function Project({ history }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

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