import React, { useState } from "react";
import Counter from "../Countdown";
import Link from "next/link";
import Navbar from "../EventsNavbar";
import Modal from "./Modal";
import Form from "../EventsPage/Form";
//el componente de modal es de tailwind y trae una propiedad que es el que muestra el modal,
// esta porpiedad es un reemplazo del metodo tradicional {open && <Modal/>}
//al componente se le pasan las propiedades de open que es el estado que cambia en el mismo boton
// y las propiedades de close , close para como una funcion de cambio de estado a el boton de X en el componente
// en el componente la funcion solo se usa como propiedad
import { showModal } from "../Context/ModalEventContext";

export default function Header() {
  //const [open, setOpen] = useState(false);
  //const { open, setOpen } = showModal();
  //console.log(showModal());
  //se quito el moda, aqui esta el codigo
  /**
   *  <Modal
        open={open}
        close={() => {
          setOpen(false);
        }}
      />
   */
  return (
    <>
      <section
        className="w-4/5   lg:w-full lg:max-w-4xl xl:max-w-6xl m-auto relative lg:mb-8 "
        id="head"
      >
        <Navbar />
        <h1 className="text-white text-center text-xl mt-10 font-medium lg:text-left lg:text-4xl lg:mt-10 xl:text-5xl">
          TENDENCIAS WEB PARA CONVERTIR ESTE 2022
        </h1>
        <div>
          {/**Contenedor del texto y los botones*/}
          <div className="md:flex md:mt-10">
            <div className="md:w-2/5 md:flex md:flex-col md:justify-around">
              <div className="flex text-sm justify-between items-center md:items-start lg:flex-col h-16 md:mb-5">
                <h2 className="text-white font-medium md:text-[26px] xl:text-4xl">
                  FREE MASTERCLASS
                </h2>
                <h3 className="text-white md:text-[26px] xl:text-4xl xl:mt-3">
                  03/02/22
                </h3>
              </div>
              <p className="text-white text-xs md:text-md  xl:text-lg xl:mt-6">
                ¿Querés convertir más y llevar a tu empresa al próximo nivel?
                ¡Entonces esta masterclass es para vos! ¡Te contaremos los 5
                secretos para que te destaques!
              </p>
              <div className="flex justify-between my-5 md:my-0">
                <Link href="#form">
                  <button
                    className="text-launchyOrange border border-launchyOrange text-[9px] lg:text-sm py-3 rounded-sm"
                    style={{ width: "48%" }}
                  >
                    ¿QUÉ APRENDERÉ?
                  </button>
                </Link>
                <Link href="#lessons">
                  <button
                    className="text-launchyOrange border border-launchyOrange text-[9px] lg:text-sm py-3 rounded-sm"
                    style={{ width: "48%" }}
                  >
                    QUIERO SABER MÁS
                  </button>
                </Link>
              </div>
            </div>
            {/*Contenedor de forma*/}
            <div className="md:w-3/5 xl:h-72 xl:max-h-80 relative">
              <Link href="#form">
                <img
                  src="/img/down.png"
                  alt="ve a la siguiente pagina"
                  className="hidden lg:block absolute  right-0 bottom-0 cursor-pointer animate-pulse "
                />
              </Link>

              <div className="w-full h-full lg:w-[70%] lg:m-auto">
                <Form />
              </div>
            </div>
          </div>
          {/*Sección de contador*/}
          <div className="my-8 lg:my-9 xl:my-10">
            <Counter />
          </div>
          {/*seecion de horas diferentes paises*/}
          <div className="text-sm text-center  text-white md:flex md:justify-between lg:text-xs xl:text-base ">
            <p>
              <span className="font-bold">Argentina,Chile y Uruguay:</span>
              16:00 hs
            </p>
            <p>
              <span className="font-bold">España:</span>
              20:00 hs
            </p>
            <p>
              <span className="font-bold">Colombia,Ecuador y Perú:</span>
              14:00 hs
            </p>
            <p>
              <span className="font-bold">México y Costa Rica:</span>
              13:00 hs
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
