import React from "react";
import AboutMe from "../components/About/AboutMe";
import Contact from "../components/About/Contact";
import Education from "../components/About/Education";
import Me from "../components/About/Head";
import Positions from "../components/About/Positions";
import Skills from "../components/About/Skills";
import Layout from "../layout";

export default function Home() {
  return (
    <Layout header={true}>
      <>
        <Me />
        <div className="custom_hr" />
        <Contact />
        <div className="custom_hr" />
        <AboutMe />
        <div className="custom_hr" />
        <Skills />
        <div className="custom_hr" />
        <Positions />
        <div className="custom_hr" />
        <Education />
        <div className="custom_hr" />
      </>
    </Layout>
  );
}
