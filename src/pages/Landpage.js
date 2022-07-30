import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";

function Landpage({ history }) {
  return (
    <>
    <div className="space-bg">
      <Navbar history={ history }/>
      <Home />
    </div>
      <About history={ history } />
    </>
  )
}

export default Landpage;