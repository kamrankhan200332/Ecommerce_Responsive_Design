import React from "react";

const TextInput = (props) => {
  return (
    <div>
      <input
        {...props}
        className="border outline-none rounded py-2 px-3 w-full text-xl"
      />
      {props.error && (
        <p className="text-red-700 text-left">{props.errormessage}</p>
      )}
    </div>
  );
};

export default TextInput;
