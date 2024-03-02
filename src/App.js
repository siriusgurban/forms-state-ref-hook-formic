import FormHook from "./components/FormHook";
import FormState from "./components/FormState";
import FormRef from "./components/FormRef";
import FormFormic from "./components/FormFormic";
import FormDiv from "./components/FormDiv";
import { useRef, useState } from "react";


function App() {

  const [employees, setEmployees] = useState([]);

  const handlePersonal = (personal) => {
    console.log("personal", personal);

    const newData = [...employees, personal];
    setEmployees(newData);
  };

  const inputRef = useRef(null);
  const inputRef1 = useRef(null);
  const inputRef4 = useRef(null);


  return (
    <>
      <div className="flex">

        <FormDiv bg={"bg-orange-900"} text={"text-sky-700"} >
          <p className="text-center">State Form</p>
          <FormState key={1} context="Submit as State" innerRef1={inputRef1} />
        </FormDiv>


        <FormDiv key={2} bg={"bg-sky-700"} text={"text-orange-900"}>
          <p className="text-center"> Ref Form</p>
          <FormRef context="Submit as Ref" innerRef={inputRef} />
        </FormDiv>

      </div>

      <div className="flex ">

        <FormDiv key={3} bg={"bg-sky-700"} text={"text-orange-900"} >
          <p className="text-center">React Hook Form</p>
          <FormHook context="Submit as Hook" innerRef={inputRef} />
        </FormDiv>


        <FormDiv key={4} bg={"bg-orange-900"} text={"text-sky-700"}>
          <p className="text-center">Formic Form</p>
          <FormFormic context="Submit as Formic" innerRef4={inputRef4} />
        </FormDiv>

      </div>
    </>
  );
}

export default App;
