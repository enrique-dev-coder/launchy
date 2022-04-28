import React, { Fragment } from "react";
import { Transition } from "@headlessui/react";
import Form from "./Form";

//en este componente de tailwind se reciben las propiedades de el header
export default function Modal({ open, close }) {
  return (
    <Transition.Root
      as={Fragment}
      show={open}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="modalposition">
        <div
          className="w-11/12 mx-auto text-white h-[85%] max-w-xs lg:max-w-3xl my-auto rounded border-2 border-white relative
          lg:flex lg:flex-col lg:justify-around lg:my-auto
          "
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(33, 21, 57, 0.2) 100%)",
          }}
        >
          <h3 className=" text-md font-medium text-center w-11/12 mx-auto my-5 lg:w-3/5 lg:mx-auto lg:text-2xl">
            Antes de irte... estos son algunos de los puntos que vamos a
            resolver para fortalecer la permanencia del usuario
          </h3>
          {/*Sección de checkbox*/}
          <div className="w-11/12 mx-auto flex-col flex space-y-4 lg:w-3/5 lg:mx-auto lg:text-xl">
            <div className="flex justify-evenly items-center space-x-3">
              <input type="checkbox" className="rounded" />
              <label className="text-sm flex-1 ">
                Quiéro saber como manejar el SEO
              </label>
            </div>
            <div className="flex justify-evenly items-center space-x-3">
              <input type="checkbox" className="rounded" />
              <label className="text-sm flex-1">
                Quiéro crear recursos de valor
              </label>
            </div>
            <div className="flex justify-evenly space-x-3">
              <input type="checkbox" className="rounded" />
              <label className="text-sm flex-1">
                Quiéro saber los ingresos del usuario a la web y todos sus
                movimientos para mejorar mi sitio.
              </label>
            </div>
          </div>
          <h2 className="hidden lg:block text-white  lg:w-3/5 lg:mx-auto lg:text-2xl">
            INSCRÍBETE PARA RESOLVER DUDAS
          </h2>
          {/**Formulario de inscripcion */}
          <Form modal={true} />
          {/**boton para cerrar el modal para pasarle la propiedad de modal falso */}
          <div
            className="absolute bg-darkBlue w-10 h-10 rounded-full border-2 border-white 
            -top-[4%] -right-[5%] text-2xl flex justify-center items-center cursor-pointer
            lg:top-[4%] lg:right-[5%]
            "
            onClick={close}
          >
            X
          </div>
        </div>
      </div>
    </Transition.Root>
  );
}

/**
 *    <div className="w-full h-screen  bg-darkBlue fixed top-0 opacity-50 transition ease-in-out delay-150"></div>
    
 * 
 * 
 */
