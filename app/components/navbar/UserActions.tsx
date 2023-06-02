import React, { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { poppins } from "./Menu";
import Login from "./Login";

const UserActions = () => {
  const [showModalLogin, setShowModalLogin] = useState<boolean>(false);

  const handleOpenModalLogin = () => {
    console.log("toggle");
    setShowModalLogin(true);
  };
  return (
    <>
      <div
        className="float-left box-border"
        role="button"
        onClick={handleOpenModalLogin}
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
      {showModalLogin ? (
        <Login
          open={showModalLogin}
          handleChange={() => setShowModalLogin(!showModalLogin)}
        />
      ) : null}
    </>
  );
};

export default UserActions;
