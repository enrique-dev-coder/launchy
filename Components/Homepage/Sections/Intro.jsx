import React from "react";
import VideoBg from "../wrappers/Videobg";
import HomeNavbar from "../Components/HomeNavbar";
import SideBar from "../Components/SocialMedia";
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
const Intro = () => {
  // TRUKAZO  cuando usasas trnasform y translate se meueve el elemento sin afectar lo demas
  return (
    <VideoBg>
      <HomeNavbar />
      <div className="w-full xl:max-w-[1400px] lg:max-w-[960px]  mx-auto relative h-screen  ">
        {/*sidebar with social media*/}
        <div className="w-[400px] fixed  -translate-x-[180px]  -rotate-90 bottom-[200px]">
          <SideBar />
        </div>
        {/* text with spinning star*/}
        <div className=" lg:translate-y-[200px] xl:translate-y-[200px] border-b-2 relative border-white w-[70%] ">
          <div className="absolute -right-[225px] -top-11  animate-spin-slow">
            <img src="/img/introimg.png" alt="we launch" />
          </div>
          <div className="flex items-center justify-center">
            <p className="text-white py-4 text-lg  ">
              Aceleramos empresas digitalizandolas para destacarse
            </p>
            <ArrowNarrowRightIcon className="text-white  h-5 w-10 " />
          </div>
        </div>
        {/*we launch image*/}
        <div className="absolute bottom-0 lg:right-[150px]  xl:right-[430px] ">
          <img src="/img/welaunch.png" alt="we launch" />
        </div>
      </div>
    </VideoBg>
  );
};

export default Intro;
