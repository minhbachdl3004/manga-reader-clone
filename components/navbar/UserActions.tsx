import React, { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { poppins } from "./Menu";
import Login from "./Login";
import Signup from "./Signup";

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
      <div className="float-left" role="button" onClick={handleOpenModal}>
        <div
          className={`h-[40px] leading-[40px] px-[15px] font-normal text-[#fff] inline-block text-center cursor-pointer bg-transparent rounded-[0.25rem] text-[16px] ${poppins.className}
           max-xl:text-[0px] max-xl:p-0 max-xl:w-[24px] max-xl:h-[24px]`}
        >
          <MdAccountCircle
            style={{
              display: "inline-block",
              fontWeight: "900",
              marginRight: "0.5rem",
              marginBottom: "5px",
              width: "26px",
              height: "26px"
            }}
          />
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
