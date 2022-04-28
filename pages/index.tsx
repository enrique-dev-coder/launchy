import React, { useRef, useEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

import Link from "next/link";
import Intro from "../Components/Homepage/Sections/Intro";
import SocialMedia from "../Components/Homepage/Components/SocialMedia";
export default function Home() {
  const { scrollYProgress } = useViewportScroll();

  return (
    <main>
      <Intro />
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className=" bg-launchyOrange h-screen w-full text-white"
      ></motion.div>
    </main>
  );
}

/**
 *      <div className=" bg-launchyOrange h-screen w-full text-white"> hello</div>
 *     <div className="flex flex-col items-center justify-center h-screen py-2 text-launchyOrange text-center">
        <img
          src="/img/chems-espacio.png"
          alt="launchy"
          className=" animate-bounce"
        />
        <h2 className=" text-xl font-bold lg:text-4xl text-white">
          Estamos preparando una experiencia increíble
        </h2>
        <button className="text-xl mt-10 w-4/5 mx-auto">
          <Link href="./events">Visita nuestra pagina de eventos</Link>
        </button>
      </div>
 */

/*
   const ref = useRef();
  const { scrollYProgress } = useElementScroll(ref);
    **** el useElementScroll es para que se cambie in valor mediante el
           <div ref={ref} style={{ overflow: "scroll", height: 200 }}>
          <motion.div style={{ scaleY: scrollYProgress }}>
            {console.log(scrollYProgress)}
            {Array(100)
              .fill()
              .map((_, i) => (
                <p key={i}>{i}</p>
              ))}
          </motion.div>
        </div>
   
   
   
   */

//useViewportScroll nos sirve para obtener el valor del scrolleo
