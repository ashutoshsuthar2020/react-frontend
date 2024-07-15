import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ClockTime from "./components/ClockTime";
import ClockHeader from "./components/ClockHeader";
import ClockSlogan from "./components/ClockSlogan";
function App() {
  return (
    <div className="container center">
      <ClockHeader />
      <ClockSlogan></ClockSlogan>
      <ClockTime />
    </div>
  );
}

export default App;
