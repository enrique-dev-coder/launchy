import React from "react";
import SideBar from "../Components/SocialMedia";
/*video fondo */
const VideoBg = ({ children }) => {
  return (
    <div className="relative mx-auto  flex h-screen w-full flex-col  overflow-hidden">
      <video
        src="https://res.cloudinary.com/dhq3jcns5/video/upload/v1645017795/community/Video_Launchy_1_ubqwkm.mp4"
        muted
        autoPlay
        loop
        className="absolute top-0 z-0 w-full"
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default VideoBg;
