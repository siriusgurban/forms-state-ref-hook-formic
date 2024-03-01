import FormHook from "./components/FormHook";
import FormState from "./components/FormState";
import FormRef from "./components/FormRef";
import FormFormic from "./components/FormFormic";
import FormDiv from "./components/FormDiv";

function App() {
  return (
    <>
      <div className="flex ">

        <FormDiv bg={"bg-orange-900"} text={"text-sky-700"} >
          <p className="text-center">State Form</p>
          <FormState context="Submit as State" />
        </FormDiv>


        <FormDiv bg={"bg-sky-700"} text={"text-orange-900"}>
          <p className="text-center"> Ref Form</p>
          <FormRef context="Submit as Ref" />
        </FormDiv>

      </div>

      <div className="flex ">

        <FormDiv bg={"bg-sky-700"} text={"text-orange-900"} >
          <p className="text-center">React Hook Form</p>
          <FormHook context="Submit as Hook" />
        </FormDiv>

        <FormDiv bg={"bg-orange-900"} text={"text-sky-700"}>
          <p className="text-center">Formic Form</p>
          <FormFormic context="Submit as Formic" />
        </FormDiv>

      </div>
    </>
  );
}

export default App;
