import React from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";

function ContactMe({ history }) {
  return (
    <>
    <div className="space-bg">
      <Navbar history={ history }/>
      <Contact />
    </div>
    </>
  )
}

export default ContactMe;