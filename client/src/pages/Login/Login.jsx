import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginSchema from "../../Schemas/LoginSchema";
import { useFormik } from "formik";
import TextInput from "../../components/TextInput/TextInput";
import { IoEyeOutline } from "react-icons/io5";
import { MdRemoveRedEye } from "react-icons/md";
import { FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  const handlePass = () => {
    setShowPass(!showPass);
  };

  const navigate = useNavigate();

  const { values, touched, handleBlur, handleChange, errors } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: loginSchema,
  });
  return (
    <div className="flex items-center justify-center py-5 flex-col m-auto space-y-10 ">
      <h1 className="text-3xl font-semibold font-['Playfair_Display'] ">
        Login to your account
      </h1>
      <div className="space-y-7 w-[35%]">
        <div className="w-full space-y-3 ">
          <div>
            <TextInput
              type="text"
              placeholder="username..."
              value={values.username}
              name="username"
              onBlur={handleBlur}
              onChange={handleChange}
              error={errors.username && touched.username ? 1 : undefined}
              errormessage={errors.username}
            />

            {errors && <p>{errors.errormessage}</p>}
          </div>

          <div className="relative">
            <div>
              <TextInput
                type={showPass ? "text" : "password"}
                placeholder="password..."
                value={values.password}
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                error={errors.password && touched.password ? 1 : undefined}
                errormessage={errors.password}
              />
            </div>
            <div
              className={`btn rounded cursor-pointer font-medium absolute right-3 top-3`}
              onClick={handlePass}
            >
              {showPass ? (
                <span className="text-xl text-red-700">
                  <FaEyeSlash />
                </span>
              ) : (
                <span className="text-xl text-green-700">
                  <IoEyeOutline />
                </span>
              )}
            </div>
          </div>
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
