import React, { useEffect, useRef } from "react";
//46-3 Explore Ref And Controlled And Uncontrolled Components

const RefForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  useEffect(() => {
    nameRef.current.focus();
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(e);
    // console.log(nameRef);
    // console.log(nameRef.current);
    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passwordRef.current.value);
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit} action="">
        <input ref={nameRef} type="text" name="text" id="" />
        <br />
        <input
          ref={emailRef}
          defaultValue={"sohelshahid09@gmail.com"}
          type="email"
          name="email"
          id=""
        />
        <br />
        <input ref={passwordRef} type="password" name="password" id="" />
        <br />
        <input type="submit" value="submit now" />
        <br />
      </form>
    </div>
  );
};

export default RefForm;
