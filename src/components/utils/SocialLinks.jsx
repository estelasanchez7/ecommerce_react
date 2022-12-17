import React from "react";

const SocialLinks = ({ icon }) => {
  return (
    <>
      <img
        src={icon}
        alt="icon/social"
        className="w-8 h-8 items-center cursor-pointer me:w-6 md:h-6 sm:w-5 sm:h-5 transition-all duration-200 hover:scale-110"
      />
    </>
  );
};
export default SocialLinks;
