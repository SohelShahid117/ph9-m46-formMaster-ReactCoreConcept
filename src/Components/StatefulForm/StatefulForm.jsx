import React, { useState } from "react";
//46-2 Form With State To Get Value And Set Default Value

const StatefulForm = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [name, setName] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    console.log(e);
    // console.log(e.target);
    // console.log(e.target.value);
    // console.log(e.target.name);
    console.log(email);
    console.log(password);
    console.log(name);
    if (password.length < 8) {
      setError("password must be 8 charecter or more ");
    } else {
      setError("");
    }
  };
  const handleEmailChange = (e) => {
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <input onChange={handleNameChange} type="text" name="text" id="" />
        <br />
        <input onChange={handleEmailChange} type="email" name="email" id="" />
        <br />
        <input
          onChange={handlePasswordChange}
          type="password"
          name="password"
          id=""
          required
        />
        <br />
        <input type="submit" value="Submit Form" />
        <br />
        {error && <mark>{error}</mark>}
      </form>
    </div>
  );
};

export default StatefulForm;
