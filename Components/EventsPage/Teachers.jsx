import React from "react";
import TeacherCard from "./TeacherCard";
import Link from "next/link";
export default function Teachers() {
  return (
    <div
      className="generalContainer relative z-10 mt-20  lg:flex lg:justify-center lg:flex-col "
      id="teachers"
    >
      <div>
        <h2 className="text-white text-lg lg:text-3xl lg:mb-4">
          Nuestros ponentes:
        </h2>
        {/*seccion de expositores, contenedor*/}
        <div className="overflow-x-auto snap-x mt-6">
          <div className="flex space-x-4 w-[1000px] lg:w-full ">
            <TeacherCard
              img="/img/Jasu.png"
              name="Jasury Victorio"
              job="Directora de Operaciones- Brand Strategist"
              desc="Especialista en creación  de experiencias digitales para marcas internacionales. 
              Apasionada por las tendencias tecnológicas y cómo influyen en el comportamiento del consumidor."
              link="https://www.linkedin.com/in/jasury-victorio-2525b0167/"
            />
            <TeacherCard
              img="/img/luis.png"
              name="Luis Perdomo"
              job="CEO - Profit Strategist (de otra galaxia)"
              desc="
              Especialista en desarrollar estrategias disruptivas que involucran al sector comercial y al marketing digital con el fin de impulsar empresas para que puedan aumentar su profit."
              link="https://www.linkedin.com/in/luiseperdomo/"
            />
            <TeacherCard
              img="/img/tite.png"
              name="Enrique Alvarado"
              job="Desarrollador de Experiencias Digitales"
              desc="Desarrollador web full stack con mayor enfoque en frontend. Apasionado en la tecnología, ingeniero de profesión pero programador de corazón."
              link="https://www.linkedin.com/in/enrique-alvarado-10a843191/"
            />
            <TeacherCard
              img="/img/Flor.png"
              name="Florencia Marelli"
              job="Diseñadora de marcas | UI-UX"
              desc=" Diseñadora gráfica y de experiencias interactivas digitales.

              Amante de creación de identidades que impacten. Combinando el UI y UX en productos memorables."
              link="https://www.linkedin.com/in/florencia-marelli-1a23a5168/"
            />
          </div>
        </div>
        <div className="relative">
          <Link href="#head">
            <img
              src="/img/up.png"
              alt="ve a la siguiente pagina"
              className="hidden lg:block absolute  right-0 bottom-[20%] cursor-pointer animate-pulse "
            />
          </Link>
          <Link href="#head">
            <p
              className=" bg-launchyOrange rounded  text-center text-[14px] font-semibold py-4 px-4 my-10
                lg:text-base lg: max-w-md md:mx-auto lg:mt-10 xl:mt-20 cursor-pointer
            "
            >
              ESTA MASTERCLASS ES GRATUITA, ¡INSCRIBITE YA!
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
