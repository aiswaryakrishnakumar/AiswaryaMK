import { useState, useEffect, useRef } from "react";


import HeroSection from "../components/HeroSection";
import Loading from "../components/Loading";

import Projects from "../components/Projects";
import Resume from "../components/Randoms";
import NikeAir from "../components/Resume/NikeAir";
import useLocoScroll from "../hooks/useLocoScroll";
import Resume1 from "../components/Resume/Resume1";

import Contact from "../components/Contact";
import MobileNav from "../components/MobileNav";

import NavLinks from "../components/NavLinks";
import Finance from "../components/Projects/Finance";


import avenirBold from "../assets/fonts/Avenir-Black.otf";
import avenirBlack from "../assets/fonts/Avenir-Heavy.otf";
import avenirLight from "../assets/fonts/Avenir-Light.otf";
import avenirMedium from "../assets/fonts/Avenir-Medium.otf";
import React from "react";

const Home = () => {
  const [preloader, setPreloader] = useState<boolean>(true);
  const [timer, setTimer] = useState<number>(2);
  const id = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 1500);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  const [openMenu, setOpenMenu] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fontPromises = [
      new Promise((resolve, reject) => {
        const font = new FontFace("avenirBold", `url(${avenirBold})`);
        font.load().then(resolve, reject);
      }),
      new Promise((resolve, reject) => {
        const font2 = new FontFace("avenirBlack", `url(${avenirBlack})`);
        font2.load().then(resolve, reject);
      }),
      new Promise((resolve, reject) => {
        const font3 = new FontFace("avenirLight", `url(${avenirLight})`);
        font3.load().then(resolve, reject);
      }),
      new Promise((resolve, reject) => {
        const font4 = new FontFace("avenirMedium", `url(${avenirMedium})`);
        font4.load().then(resolve, reject);
      }),
    ];
    Promise.all(fontPromises).then(() => {
      setFontsLoaded(true);
    });
  }, []);

  return (
    <div>
      {fontsLoaded && (
        <>
          {preloader ? (
            <Loading setIsLoaded={setIsLoaded} isLoaded={isLoaded} />
          ) : (
            <div className="w-full h-full overflow-x-hidden">
              <NavLinks openMenu={openMenu} setOpenMenu={setOpenMenu} />
              <div
                className="outer-wrapper scroll-container"
                ref={containerRef}
                data-scroll-container
                id="main-container"
              >
                <div className="wrapper">
                  <MobileNav />
                  <HeroSection
                    openMenu={openMenu}
                    setOpenMenu={setOpenMenu}
                    isLoaded={isLoaded}
                  />
                  <Projects openMenu={openMenu} setOpenMenu={setOpenMenu} />
                  <Finance openMenu={openMenu} setOpenMenu={setOpenMenu} />
                
                  <Resume openMenu={openMenu} setOpenMenu={setOpenMenu} />
                  <NikeAir openMenu={openMenu} setOpenMenu={setOpenMenu} />
                  <Contact openMenu={openMenu} setOpenMenu={setOpenMenu} />
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Home;
