'use client';
  import React from "react";
  import Intro from '../compontents/intro';
  import About from "../compontents/about";
  import Project from "../compontents/project";
  import Experience from "../compontents/experience"; 
  import Skills from "../compontents/skills";
  import './global.css';
  import { Playfair } from "next/font/google";

  import { ActiveSectionContextProvider } from "../context/active-section-context";


  const Home = () => {
    return (
      
      <ActiveSectionContextProvider> 
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
      </ActiveSectionContextProvider>
    );
  };

  export default Home;  