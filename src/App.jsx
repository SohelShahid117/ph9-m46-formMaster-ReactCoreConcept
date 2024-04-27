import "./App.css";
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
      </div>
    </>
  );
}

export default App;
