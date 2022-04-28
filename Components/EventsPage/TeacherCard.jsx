import React from "react";
//el group hover en tailwind es para hacer hover dpendiendo del estado del contenedor padre
//anotar en la sección de trucazos
//esta sección no jalaba porque le dabamos hover al mismo parrafo oculto

export default function TeacherCard({ img, name, job, desc, link }) {
  return (
    <div className="">
      {/*imagen*/}
      <div className="rounded  w-[272px] h-[300px] snap-center relative group lg:w-[211px] lg:h-[250px] xl:w-[272px] xl:h-[300px]">
        <img src={img} alt="" className="w-full h-full block" />
        <div className="absolute overflow-hidden bottom-full  left-0 right-0 w-full h-0 bg-softBlue  transition-all ease delay-200 duration-[.5s] group-hover:h-full group-hover:bottom-0">
          <div className="text-white w-4/5 mx-auto mt-5 lg:text-sm">{desc}</div>
        </div>
      </div>
      {/*descripción de la persona*/}
      <div className="text-white text-center h-36 flex flex-col justify-evenly">
        <p className=" font-medium text-2xl">{name}</p>
        <p className="text-sm w-4/5 mx-auto">{job}</p>
        <a
          href={link}
          target="_blank"
          className=" text-launchyOrange underline"
        >
          Linkedin
        </a>
      </div>
    </div>
  );
}
