import "./App.css";
import CustomHookForm from "./Components/CustomHookForm/CustomHookForm";
import Grandpa from "./Components/Grandpa/Grandpa";
import ReUseableForm from "./Components/ReUseableForm/ReUseableForm";
import RefForm from "./Components/RefForm/RefForm";
import SimpleForm from "./Components/SimpleForm/SimpleForm";
import StatefulForm from "./Components/StatefulForm/StatefulForm";

//46-5 (Advanced) Reusable Form Using Props And Children

function App() {
  // const handleSignUpSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(e);
  //   console.log(e.target);
  // };

  // const handleUpdateSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(e);
  //   console.log(e.target);
  // };
  const handleSignUpSubmit = (data) => {
    console.log("Sign up data", data);
  };

  const handleUpdateSubmit = (e) => {};
  return (
    <>
      <div>
        <h1>Hello React</h1>
        <SimpleForm></SimpleForm>

        <h2>Hello statefull Form</h2>
        <StatefulForm></StatefulForm>

        <h2>UseRef</h2>
        <RefForm></RefForm>

        <h3>Custom hook & Custom form</h3>
        <CustomHookForm></CustomHookForm>

        <h2>ReUse Able Form</h2>
        <ReUseableForm
          formTitle={"Sign Up"}
          submitBtnText={"Submit Form"}
          handleOnSubmit={handleSignUpSubmit}
        >
          <div>
            <h2>Sign Up</h2>
            <p>Sign up this form</p>
          </div>
        </ReUseableForm>

        <ReUseableForm formTitle={"Registration"}>
          <div>
            <p>Normal Form</p>
          </div>
        </ReUseableForm>

        <ReUseableForm
          formTitle={"Profile Update"}
          submitBtnText={"Update"}
          handleOnSubmit={handleUpdateSubmit}
        >
          <div>
            <h2>Update</h2>
            <p>Update your profile regularly</p>
          </div>
        </ReUseableForm>

        <Grandpa></Grandpa>
      </div>
    </>
  );
}

export default App;
