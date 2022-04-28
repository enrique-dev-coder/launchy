import React from "react";
import LessonsMobileCard from "./LessonsMobileCard";
import LessonsDesktopCard from "./LessonsDesktopCard";
import Link from "next/link";
//para el link tambien se puede usar el name o id como propiedad sin el #
export default function LessonsMobile() {
  return (
    <div
      className="w-4/5 lg:flex lg:justify-center lg:flex-col  mx-auto lg:h-screen lg:w-full lg:max-w-4xl xl:max-w-6xl m-auto"
      id="lessons"
    >
      <div>
        <h2 className="text-white text-lg lg:text-3xl lg:mb-0 xl:mb-4">
          Lo que aprenderás en esta MasterClass:
        </h2>
        {/*Contenedor para tarjetitas de aprendizajes mobiles , el contenedor padre es para efecto overflow*/}
        <div className="overflow-x-auto snap-x mt-6 lg:hidden">
          <div className="flex space-x-3 w-[1250px]">
            {/*tarjetitas*/}
            <LessonsMobileCard
              number="1"
              desc="Diseño de experiencias inmersivas"
              img="/img/lesson1.png"
            />
            <LessonsMobileCard
              number="2"
              desc="Diseño de estéticas disruptivas"
              img="/img/lesson2.png"
            />
            <LessonsMobileCard
              number="3"
              desc="Funels de venta automatizados en web"
              img="/img/lesson3.png"
            />
            <LessonsMobileCard
              number="4"
              desc="Posicionamiento SEO constante"
              img="/img/lesson4.png"
            />
            <LessonsMobileCard
              number="5"
              desc="Mediciones de respuesta del usuario"
              img="/img/lesson5.png"
            />
          </div>
        </div>
        {/**Seccion de tarjetas para desktop */}
        <div className="hidden lg:flex relative lg:overflow-x-hidden lg:h-[400px] xl:h-[450px] xl:ml-24">
          <div className="z-0 relative hover:z-10 desktopCardSignleContainer">
            <LessonsDesktopCard
              number="1"
              desc="Diseño de experiencias inmersivas"
              img="/img/lesson1.png"
            />
          </div>
          <div className="z-1  left-[-10%]  hover:left-[-21%] desktopCardSignleContainer">
            <LessonsDesktopCard
              number="2"
              desc="Diseño de estéticas disruptivas"
              img="/img/lesson2.png"
            />
          </div>
          <div className="z-2 relative left-[-20%] hover:left-[-35%] desktopCardSignleContainer">
            <LessonsDesktopCard
              number="3"
              desc="Funels de venta automatizados en web"
              img="/img/lesson3.png"
            />
          </div>
          <div className="z-3 relative left-[-30%] hover:left-[-45%]  desktopCardSignleContainer">
            <LessonsDesktopCard
              number="4"
              desc="Posicionamiento SEO constante"
              img="/img/lesson4.png"
            />
          </div>
          <div className="z-4 relative left-[-40%] hover:left-[-55%]  desktopCardSignleContainer">
            <LessonsDesktopCard
              number="5"
              desc="Mediciones de respuesta del usuario"
              img="/img/lesson5.png"
            />
          </div>
        </div>
        <div className="relative">
          <Link href="#teachers">
            <img
              src="/img/down.png"
              alt="ve a la siguiente pagina"
              className="hidden lg:block absolute  right-0 bottom-[20%] cursor-pointer animate-pulse "
            />
          </Link>
          <p className="text-white my-8 text-center font-medium text-base lg:text-left lg:mt-0 lg:mb-3 xl:my-6 lg:font-medium lg:text-xl xl:text-2xl">
            Al realizar la masterclass, tendrás la posibilidad de agendar una
            cita para que puedas hablar con nuestros expertos, quienes te
            ayudarán a crecer tu web!
          </p>
          <Link href="#head">
            <p
              className=" border border-launchyOrange text-launchyOrange rounded  text-center text-[13px] font-semibold py-4 px-4
                lg:text-base lg: max-w-md lg:mx-auto cursor-pointer
            "
            >
              DIAGNOSTICA TU WEB CON NOSOTROS
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
