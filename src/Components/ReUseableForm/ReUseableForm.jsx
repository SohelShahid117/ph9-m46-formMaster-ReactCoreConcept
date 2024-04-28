import React from "react";
//46-5 (Advanced) Reusable Form Using Props And Children

const ReUseableForm = ({
  formTitle,
  handleOnSubmit,
  submitBtnText,
  children,
}) => {
  //   const handleOnSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(e);
  //     console.log(e.target);
  //   };

  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    handleOnSubmit(data);
  };

  return (
    <div>
      {/* <h2>{formTitle}</h2> */}
      <h2>{children}</h2>
      <form onSubmit={handleLocalSubmit}>
        <input type="text" name="text"></input>
        <br></br>
        <input type="email" name="email"></input>
        <br></br>
        <input type="password" name="password"></input>
        <br></br>
        {/* <input type="submit" name="text" value="Update"></input> */}
        <input type="submit" name="text" value={submitBtnText}></input>
        <br></br>
      </form>
    </div>
  );
};

export default ReUseableForm;
