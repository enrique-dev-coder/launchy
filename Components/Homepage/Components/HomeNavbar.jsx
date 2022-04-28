import React from "react";

const HomeNavbar = () => {
  return (
    <div className="flex justify-center">
      <div className=" w-full xl:max-w-[1400px] lg:max-w-[960px]  mx-auto  h-20 flex items-center justify-between fixed ">
        <div className="flex  w-20 justify-around items-center">
          <p className=" text-white">EN</p>
          <img src="/img/Polygon.png" alt="" className=" w-3 h-1" />
          <img src="img/sound.png" className=" w-6 h-6" />
        </div>
        <div>
          <img src="/img/Logo.png" alt="launchy logo" />
        </div>
        {/*MENU*/}
        <div className="w-20 relative">
          <div className="absolute border border-white rounded-full w-10 h-10 right-4 -top-2"></div>
          <p className="text-white uppercase">Menu</p>
        </div>
      </div>
    </div>
  );
};

export default HomeNavbar;
