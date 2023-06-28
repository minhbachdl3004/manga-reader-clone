import React from "react";
import { IconContext } from "react-icons";
import { GiHamburgerMenu } from "react-icons/gi";

interface Props {
  onChange: (e : any) => void;
}

const MobileMenu = ({ onChange } : Props) => {
  return (
    <div className="p-0 text-[#fff] cursor-pointer absolute top-[35px] z-[4] w-[30px] h-[25px] text-center left-[10px] rounded-[3px] hidden max-md:inline-block" onClick={onChange}>
      <div className="w-full h-full">
        <IconContext.Provider value={{}}>
          <GiHamburgerMenu className="w-[25px] h-[25px]" />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default MobileMenu;
