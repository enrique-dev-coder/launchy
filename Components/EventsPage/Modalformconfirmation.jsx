import React, { Fragment } from "react";
import { Transition } from "@headlessui/react";
import ConfettiCanvas from "react-confetti-canvas";
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
      <div className="w-full h-screen   bg-drakBlueTransparent fixed top-0 left-0 flex flex-col z-20 justify-center">
        <ConfettiCanvas
          colors={[
            ["#FFFFFF", "#C0C0C0"],
            ["#F39669", "#76D7C4"],
          ]}
        />

        <div
          className="w-11/12 mx-auto text-white h-[85%] max-w-xs lg:max-w-2xl my-auto rounded border-2 border-white relative
          flex flex-col justify-evenly lg:justify-around lg:my-auto
          "
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(33, 21, 57, 0.2) 100%)",
          }}
        >
          {/*Sección de imagen*/}
          <div className="h-[85%] flex flex-col justify-around">
            <div className=" w-52 h-52 lg:w-60 lg:h-60 mx-auto">
              <img
                src="/img/chemsfuerte.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <p className="text-white w-4/5 mx-auto text-bold text-center text-3xl lg:text-5xl ">
              ¡FELICIDADES!
            </p>
            <p className="text-white w-4/5 mx-auto text-center lg:text-2xl">
              Este eres tu cuando te suscribes a launchy, preparate para recibir
              las últimas noticias sobre desarrollo web y SEO a tu correo!
            </p>
          </div>
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
