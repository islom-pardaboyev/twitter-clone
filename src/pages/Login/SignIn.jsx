import React, { useContext, useRef } from "react";
import { TwitterLogo } from "../../assets/images/Icons";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Context } from "../../context/context";

function SignIn() {
  const { setToken } = useContext(Context);

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    const data = {
      login: e.target.login.value,
      password: e.target.password.value,
    };
    if (data.login === "islom" && data.password === "123") { 
      setToken(data);

      e.target.reset();
    } else {
      alert("Xatolik bor");
    }
  };

  return (
    <form
      onSubmit={handleSubmitLogin}
      autoComplete="off"
      className="w-[450px] mx-auto mt-[60px]"
    >
      <Link to={"/"} className="mb-[36px] inline-block">
        <TwitterLogo />
      </Link>
      <h1 className="font-bold mb-[36px] text-[42px]">Log in to Twitter</h1>
      <Input
        isRequired={true}
        placeholder="Phone number, email address"
        type="text"
        name="login"
        extraStyle="mb-[25px]"
      />
      <Input
        isRequired={true}
        placeholder="Password"
        type="password"
        name="password"
        extraStyle="mb-[25px]"
      />
      <Button title="Log In" />
      <div className="flex items-center mt-[40px] justify-between">
        <Link to={"/sign-up"} className="text-[18px] text-[#1da1f2]">
          Forgot password?
        </Link>
        <Link to={"/sign-up"} className="text-[18px] text-[#1da1f2]">
          Sign up to Twitter
        </Link>
      </div>
    </form>
  );
}

export default SignIn;
