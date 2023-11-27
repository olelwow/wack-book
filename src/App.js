import "./App.css";
import { Routes1 } from "./Routes";
import { useState } from "react";

function App() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  /* Globala useStates som håller koll på vilken användare som är inloggad
   * samt ifall man är 'authenticated' eller ej. isAuthenticated ändras till true när man loggar in
   * och till false när man loggar ut, vilket gör så att man inte kan hoppa fram och tillbaks
   * mellan sidor efter man loggat ut.
  */

  return (
    <Routes1 setLoggedInUser={setLoggedInUser} loggedInUser={loggedInUser} isAuthenticated={isAuthenticated} setIsAuthenticated ={setIsAuthenticated} />
  );
}

export default App;

// ALLA filer har nu detta useState.
