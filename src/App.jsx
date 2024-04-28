import "./App.css";
import CustomHookForm from "./Components/CustomHookForm/CustomHookForm";
import RefForm from "./Components/RefForm/RefForm";
import SimpleForm from "./Components/SimpleForm/SimpleForm";
import StatefulForm from "./Components/StatefulForm/StatefulForm";

function App() {
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
      </div>
    </>
  );
}

export default App;
