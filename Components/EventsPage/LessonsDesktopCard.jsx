import React from "react";

export default function LessonsDesktopCard({ number, desc, img }) {
  return (
    <div
      className="  w-[250px] lg:h-[350px] xl:h-[400px]  overflow-hidden relative rounded border  
                border-white bg-darkBlue snap-center text-white flex  
                flex-col justify-end "
    >
      {/*imagen*/}
      <div className="absolute inset-0  w-80 h-80">
        <img src={img} alt={desc} className="w-full h-full" />
      </div>
      {/*sombra narnaja de la imagen*/}

      <div className="w-4/5 mb-5 mx-auto">
        <p className=" font-bold text-2xl">{number}</p>
        <p className=" text-base">{desc}</p>
      </div>
    </div>
  );
}
