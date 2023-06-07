import React from "react";
import { poppins } from "./Menu";
import Input from "./Input";
import Form from "./Form";

interface Props {
  open: boolean;
  handleChange: (e: any) => void;
  handleSwitch: (e: any) => void;
}

const inputs = [
  {
    label: "your name",
    type: "text",
    placeHolder: "Name",
    name: "name",
  },
  {
    label: "email address",
    type: "email",
    placeHolder: "name@email.com",
    name: "Email",
  },
  {
    label: "password",
    type: "password",
    placeHolder: "Password",
    name: "password",
  },
  {
    label: "confirm password",
    type: "password",
    placeHolder: "Confirm Password",
    name: "confirmPassword",
  },
];

const Signup = ({ open, handleChange, handleSwitch }: Props) => {
  return (
    <Form
      open={open}
      handleChange={handleChange}
      isLogin={false}
      inputs={inputs}
      footerText="Have an account?"
      highlight="Sign-in"
      btnContent="Sign-up"
      handleSwitch={handleSwitch}
    />
  );
};

export default Signup;
