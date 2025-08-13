import React from "react";
import Home from "../components/Contact Us/Home";
import Contact from "../components/Contact Us/Adresses";
import Awards from "../components/Contact Us/Awards";
import ClientsFrom from "../components/Contact Us/ClientsFrom";
const page = () => {
  return (
    <>
      <Home />
      <Awards/>
      <Contact />
      <ClientsFrom/>
    </>
  );
};

export default page;
