import React from "react";
import web from "../src/images/ab1.jpg";
import Common from "./Common";

const Services = (props) => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Here"
      />
    </>
  );
};

export default Services;
