import React from "react";
import { useNavigate } from "react-router-dom";
import TextInput from "../../components/TextInput/TextInput";
import { useFormik } from "formik";
import SignupSchema from "../../Schemas/SignupSchema";

const Signup = () => {
  const navigate = useNavigate();

  const { values, touched, handleBlur, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: SignupSchema,
  });
  return (
    <div className="flex items-center justify-center py-5 flex-col m-auto space-y-10 ">
      <h1 className="text-3xl font-semibold font-['Playfair_Display'] ">
        Create an account
      </h1>
      <div className="space-y-7 w-[35%]">
        <div className="w-full space-y-3">
          <TextInput
            type="text"
            placeholder="name..."
            value={values.name}
            name="name"
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.name && touched.name ? 1 : undefined}
            errormessage={errors.name}
          />
          <TextInput
            type="text"
            placeholder="username... "
            value={values.username}
            name="username"
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.username && touched.username ? 1 : undefined}
            errormessage={errors.username}
          />
          <TextInput
            type="email"
            placeholder="email... "
            value={values.email}
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.email && touched.email ? 1 : undefined}
            errormessage={errors.email}
          />
          <TextInput
            type="password"
            placeholder="password... "
            value={values.password}
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            error={errors.password && touched.password ? 1 : undefined}
            errormessage={errors.password}
          />
          <TextInput
            type="password"
            placeholder="confirmPassword... "
            value={values.confirmPassword}
            name="confirmPassword"
            onBlur={handleBlur}
            onChange={handleChange}
            error={
              errors.confirmPassword && touched.confirmPassword ? 1 : undefined
            }
            errormessage={errors.confirmPassword}
          />
        </div>
        <div className="btn w-full">
          <button className="py-2 text-center w-full font-['Playfair_Display'] rounded text-xl bg-blue-700 text-white font-bold hover:bg-blue-800 cursor-pointer">
            Sign Up
          </button>
        </div>
        <div className="text-center">
          <span className="font-['Playfair_Display'] font-medium">
            Already have an account?
            <button
              onClick={() => navigate("/login")}
              className="text-green-700 font-medium ml-2 cursor-pointer"
            >
              Login
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
