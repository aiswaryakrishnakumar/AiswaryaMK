import React, { useRef, useState, useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { gsap } from "gsap";

import useIntersectionObserver from "../hooks/useIntersectionObserver";
import { componentProps } from "../types";

const Resume = ({ openMenu, setOpenMenu }: componentProps) => {
  const ref = useRef(null);
  const onScreen = useIntersectionObserver(ref, 0.1);
  const ResumeRef = useRef(null);

  useEffect(() => {
    const scrollToResume = setTimeout(() => {
      if (onScreen) {
        document.querySelector("#nikeAir")?.scrollIntoView({
          behavior: "smooth",
        });
      }
    }, 1500);

    return () => clearTimeout(scrollToResume);
  }, [onScreen]);

  useEffect(() => {
    if (onScreen) {
      const tl = gsap.timeline();
      const ctx = gsap.context(() => {
        tl.fromTo(
          ResumeRef.current,
          { opacity: 0 },
          {
            y: 0,
            duration: 1.9,
            opacity: 1,
            clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
          }
        );
      });
      return () => ctx.revert();
    }
  }, [onScreen]);

  return (
    <div
      className="section main flex lg:min-h-screen h-[15rem]  px-6lg:h-screen flex-col  py-2 px-6 lg:px-10 py-6 w-[100vw] "
      data-scroll-section
      id="resume"
    >
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      <div className="h-full w-full  flex flex-col justify-center " ref={ref}>
        <div className="hero flex flex-col gap-4 lg:ml-16">
          <h1
            className="text-6xl font-bold font-[avenir-black] underline lg:no-underline"
            ref={ResumeRef}
          >
            Resume
          </h1>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Resume;
