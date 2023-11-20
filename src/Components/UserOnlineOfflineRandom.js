import React, { useState, useEffect } from 'react';


function UserStatusIndicator() {
  const [online, setOnline] = useState(true);

  // Funktion för att slumpa mellan online och offline.
  const randomizeStatus = () => {
    setOnline((prevOnline) => !prevOnline);
  };

  // Använd useEffect för att starta slumpmässiga ändringar när komponenten monteras.
  useEffect(() => {
    const intervalId = setInterval(randomizeStatus, getRandomTime());

    // Stoppa intervallet när komponenten avmonteras eller när den inte längre behövs.
    return () => clearInterval(intervalId);
  }, []); // Tomt beroendeArray för att köra useEffect bara en gång vid montering

  // Funktion för att generera slumpmässiga tider mellan ändringar
  const getRandomTime = () => {
    return Math.floor(Math.random() * (10000 - 3000 + 1)) + 3000; // Slumpa mellan 3 och 10 sekunder
  };

  return <div className={`onlineStatus ${online ? '' : 'offline'}`} />;
};

export default UserStatusIndicator;