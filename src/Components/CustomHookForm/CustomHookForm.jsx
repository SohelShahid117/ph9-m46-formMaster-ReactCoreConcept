import React from "react";
import useInputState from "../../hooks/useInputState";

//46-4 Custom Hook And Create Your First Custom Hook

const CustomHookForm = () => {
  // const [name, handleNameChange] = useInputState("Rojoni Sojoni");

  const emailState = useInputState("sohel@gmail.com");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target);

    // console.log(name);
    console.log(emailState.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
          id=""
        /> */}
        <br />
        <input type="password" name="password" id="" />
        <br />
        <input {...emailState} type="email" name="email" id="" />
        <br />
        <input type="submit" value="sbmitCustom" />
        <br />
      </form>
    </div>
  );
};

export default CustomHookForm;
