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
      <div
        className="float-left box-border"
        role="button"
        onClick={handleOpenModal}
      >
        <div className="float-left box-border">
          <div
            className={`h-[40px] leading-[40px] px-[15px] font-normal text-[#fff] inline-block text-center cursor-pointer bg-transparent rounded-[0.25rem] text-[16px] ${poppins.className}`}
          >
            <MdAccountCircle
              style={{
                display: "inline-block",
                fontWeight: "900",
                marginRight: "0.5rem",
                marginBottom: "5px",
                fontSize: "20px",
              }}
            />
            {"Member"}
          </div>
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
