import "./App.css";
import { Routes1 } from "./Routes";
import { useState } from "react";

function App() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  return (
    <Routes1 setLoggedInUser={setLoggedInUser} loggedInUser={loggedInUser} isAuthenticated={isAuthenticated} setIsAuthenticated ={setIsAuthenticated} />
  );
}

export default App;

// ALLA filer har nu detta useState.
