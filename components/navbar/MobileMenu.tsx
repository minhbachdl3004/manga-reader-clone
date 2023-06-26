import React from "react";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";

const MobileMenu = () => {
  return (
    <div className="p-0 text-[#fff] cursor-pointer absolute top-[35px] z-[4] w-[40px] h-40px] text-center left-[20px] rounded-[3px] hidden max-md:inline-block">
      <div className="w-full h-full">
        <IconContext.Provider value={{}}>
          <GiHamburgerMenu className="w-[21px] h-[25px]" />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default MobileMenu;
