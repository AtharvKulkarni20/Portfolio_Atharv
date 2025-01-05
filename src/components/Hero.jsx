import { motion } from "framer-motion";
import React, { useState, useEffect, Suspense } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const MobileContent = () => (
    <div className="w-full h-[60vh] flex items-center justify-center bg-tertiary">
      <img 
        src="/path-to-your-image.jpg" // Replace with your image path
        alt="hero"
        className="w-full h-full object-contain"
      />
    </div>
  );

  const DesktopContent = () => (
    <Suspense fallback={<div>Loading 3D Model...</div>}>
      <ComputersCanvas 
        pixelRatio={Math.min(2, window.devicePixelRatio)}
        // Add performance settings for the Canvas
        camera={{
          fov: 75,
          near: 0.1,
          far: 1000,
          position: [0, 0, 5]
        }}
      />
    </Suspense>
  );

  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white mt-3`}>
            Hi, I'm <span className="text-[#915eff]">Atharv</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop modern, efficient, <br className="sm:block hidden" /> and
            user-focused web applications.
          </p>
        </div>
      </div>

      {isMobile ? <MobileContent /> : <DesktopContent />}

      <div className="absolute xs:bottom-4 bottom-4 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;