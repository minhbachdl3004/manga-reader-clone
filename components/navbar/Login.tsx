import React from "react";
import Form from "./Form";

interface Props {
  open: boolean;
  handleChange: (e: any) => void;
  handleSwitch: (e: any) => void;
}

const inputs = [
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
];

const Login = ({ open, handleChange, handleSwitch }: Props) => {
  return (
    <Form
      open={open}
      handleChange={handleChange}
      isLogin={true}
      inputs={inputs}
      footerText="Don't have an account?"
      highlight="Register"
      btnContent="Sign-in"
      handleSwitch={handleSwitch}
    />
  );
};

export default Login;
