import React from "react";

export default function LessonsMobileCard({ number, desc, img }) {
  return (
    <div
      className=" w-[272px] h-[300px]  overflow-hidden relative rounded border 
                border-white bg-darkBlue snap-center text-white flex 
                flex-col justify-end "
    >
      {/*imagen*/}
      <div className="absolute inset-0 w-56 h-56 z-10">
        <img src={img} alt={desc} />
      </div>
      {/*sombra narnaja de la imagen*/}
      <div className=" bg-launchyOrange blur-[80px] absolute w-48 h-48  rounded-full -top-10 -left-10 z-0"></div>
      <div className="w-4/5 mb-5 mx-auto">
        <p className=" font-bold text-2xl">{number}</p>
        <p className=" text-base">{desc}</p>
      </div>
    </div>
  );
}
