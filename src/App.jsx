import React from "react";
import { useState } from "react";
import Card from "./assets/components/Card";
import Header from "./assets/components/Header";

const App = () => {
  const [isAnnually, setIsAnnually] = useState(true);
  const changePrice = () => {
    setIsAnnually(!isAnnually);
  };
  return (
    <>
      <Header changePrice={changePrice} />
      <main>
        <Card isAnnually={isAnnually} />
      </main>
    </>
  );
};

export default App;
