import React from "react";
import Form from "./Form";
import { showModal } from "../Context/ModalEventContext";
import Video from "../EventsPage/Video";
import Link from "next/link";
export default function Signup() {
  //const { open } = showModal();
  //console.log(open);
  return (
    <div className="h-screen min-h-screen flex flex-col justify-center">
      <section
        className="w-full  h-screen flex flex-col justify-evenly  items-center md:h-4/5 lg:w-full lg:max-w-4xl xl:max-w-6xl m-auto relative 
    
    "
        id="form"
      >
        <Link href="#lessons">
          <img
            src="/img/down.png"
            alt="ve a la siguiente pagina"
            className="hidden lg:block absolute  right-0 bottom-[20%] cursor-pointer animate-pulse "
          />
        </Link>
        {/**Video de launhy */}
        <div className=" w-4/5  lg:w-[60%] xl:w-[70%] mx-auto">
          <Video />
        </div>

        {/*botones de redes sociales */}
        <div className="relative z-10">
          <p className="text-white">Seguinos en las Redes</p>
          <div className="flex justify-center space-x-4 py-4">
            <a
              href="https://www.linkedin.com/company/launchy-me/"
              target="_blank"
            >
              <img
                src="/img/linkedin.png"
                alt="Nuestro Linkedin "
                className=" cursor-pointer"
              />
            </a>
            <a href="https://www.instagram.com/launchy.me/" target="_blank">
              <img
                src="/img/instagram.png"
                alt="Nuestro Instagram"
                className=" cursor-pointer"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
