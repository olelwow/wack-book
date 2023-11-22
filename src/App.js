import "./App.css";

import { Routes1 } from "./Routes";
import { useState } from "react";

function App() {
  const [loggedInUser, setLoggedInUser] = useState("");

  return (
    <Routes1 setLoggedInUser={setLoggedInUser} loggedInUser={loggedInUser} />
  );
}

export default App;

// ALLA filer har nu detta useState.
