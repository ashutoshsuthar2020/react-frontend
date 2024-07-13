import { useState } from "react";
import css from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
function App() {
  const [val, setval] = useState("");
  return (
    <div className={css.calculator}>
      <Display value={val}></Display>
      <ButtonContainer value={val} setter={setval}></ButtonContainer>
    </div>
  );
}

export default App;
