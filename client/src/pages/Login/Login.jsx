import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center py-5 flex-col m-auto space-y-10 ">
      <h1 className="text-3xl font-semibold font-['Playfair_Display'] ">
        Login to your account
      </h1>
      <div className="space-y-7 w-[35%]">
        <div className="w-full space-y-3">
          <input
            type="text"
            className="border outline-none rounded py-2 px-3 w-full text-xl"
            placeholder="username... "
          />
          <input
            type="password"
            className="border outline-none rounded py-2 px-3 w-full text-xl"
            placeholder="password... "
          />
        </div>
        <div className="btn w-full">
          <button className="py-2 text-center w-full font-['Playfair_Display'] rounded text-xl bg-blue-700 text-white font-bold hover:bg-blue-800 cursor-pointer">
            Login
          </button>
        </div>
        <div className="text-center">
          <span className="font-['Playfair_Display'] font-medium">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="text-green-700 font-medium ml-1 cursor-pointer"
            >
              Register
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
