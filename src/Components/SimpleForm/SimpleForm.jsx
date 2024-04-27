//46-1 Handle Form With OnSubmit And Access Field Data

const SimpleForm = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("form on submit");
    console.log(e);
    console.log(e.target);
    console.log(e.target.name.value);
    console.log(e.target.email.value);
    // console.log(e.target[0]);
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="name"></input>
        <br></br>
        {/* <button>Submit</button> */}
        <input type="email" name="email"></input>
        <br></br>
        <input type="submit" value="submit"></input>
      </form>
    </div>
  );
};

export default SimpleForm;
