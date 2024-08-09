import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import rightArrow from "../images/rightarrow.svg";
import profileImage from "../images/profile.jpg"; 
import { gsap } from "gsap";
import { componentProps } from "../types";

const HeroSection = ({ openMenu, setOpenMenu, isLoaded }: componentProps) => {
  const tl = gsap.timeline();

  useEffect(() => {
    if (isLoaded) {
      const ctx = gsap.context(() => {
        gsap.from(".heroSection", {
          y: 200,
          duration: 0.5,
          opacity: 0,
          delay: 0.5,
        });
      });
      return () => ctx.revert();
    }
  }, [isLoaded]);

  const scrollToProject = () => {
    document.querySelector("#projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div
      className="section flex min-h-screen h-screen flex-col lg:px-10 py-4 w-[100vw]"
      id="home"
      data-scroll-section
    >
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
  
      <div className="h-full w-full flex flex-col justify-center py-5 px-2 lg:px-10">
  <div className="heroSection flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8 w-full mt-8 lg:mt-5 mx-auto max-w-screen-lg">
    <div className="textContainer flex flex-col gap-4 w-full lg:w-1/2 justify-start lg:justify-start lg:mt-0">
      <h2 className="text-4xl">Web Developer</h2>
      <h1 className="text-5xl lg:text-6xl font-bold font-[avenir-black]">
        Aiswarya M K
      </h1>
      <p className="text-sm lg:text-base font-[avenir-light]">
        Hello, I&apos;m Aiswarya, an Indian-based Web Developer with a
        minimalist design background and a keen sense for learning. Hope to
        work on your next project.
      </p>
      <button
        className="bg-white text-[#222222] py-3 w-max flex items-center gap-2 px-8"
        onClick={scrollToProject}
      >
        Projects
        <img src={rightArrow} alt="right arrow" />
      </button>
    </div>

    <div className="imageContainer lg:w-1/2 flex justify-center lg:justify-end lg:mt-0 mt-4">
      <img
        src={profileImage}
        alt="Aiswarya M K"
        className="w-full max-w-md lg:max-w-full lg:w-auto h-auto object-cover"
      />
    </div>
  </div>
</div>


      <Footer />
    </div>
  );
  
  
  
  
  
};

export default HeroSection;
