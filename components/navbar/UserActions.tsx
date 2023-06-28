import React, { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { poppins } from "./Menu";
import Login from "./Login";
import Signup from "./Signup";
import { IconContext } from "react-icons";

const UserActions = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [switchModal, setSwitchModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    console.log("toggle");
    setShowModal(true);
  };
  const handleSwitchModal = () => {
    setSwitchModal(!switchModal);
  };
  return (
    <>
      <div className="float-left max-md:w-[26px] max-md:h-[26px]" role="button" onClick={handleOpenModal}>
        <div
          className={`h-[40px] leading-[40px] px-[10px] font-normal text-[#fff] inline-block text-center cursor-pointer bg-transparent rounded-[0.25rem] text-[16px] ${poppins.className}
           max-xl:text-[0px] max-xl:p-0 max-xl:w-[24px] max-xl:h-[24px]`}
        >
          <IconContext.Provider value={{}}>
          <MdAccountCircle className="w-[26px] h-[25px] inline-block max-md:m-0 mr-[5px]" />
        </IconContext.Provider>
          {"Member"}
        </div>
      </div>
      {showModal && switchModal ? (
        <Login
          open={showModal}
          handleChange={() => setShowModal(!showModal)}
          handleSwitch={handleSwitchModal}
        />
      ) : (
        <Signup
          open={showModal}
          handleChange={() => setShowModal(!showModal)}
          handleSwitch={handleSwitchModal}
        />
      )}
    </>
  );
};

export default UserActions;
