'use client';
  import React from "react";
  import Intro from '../components/intro';
  import About from "../components/about";
  import Project from "../components/project";
  import Experience from "../components/experience"; 
  import Skills from "../components/skills";
  import './global.css';
  import { Playfair } from "next/font/google";
  import FramerMotionWrapper from '../components/framer-motion-wrapper';


  import { ActiveSectionContext } from "../context/active-section-context";


  const Home = () => {
    return (
      <FramerMotionWrapper>
      <ActiveSectionContext>
        <main className="flex flex-col items-center justify-center space-y-10 mx-auto">
        <Intro/> 
        <div className="mt-8"></div>
        <About/>
        <div className="mt-8"></div>
        <Project/>
        <div className="mt-8"></div>
        <Skills />
        <div className="mt-8"></div>
        <Experience />
        <div className="mt-8"></div>
      </main>
      </ActiveSectionContext>
      </FramerMotionWrapper>
    );
  };

  export default Home;  