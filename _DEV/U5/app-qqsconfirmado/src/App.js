import React, { useState, useEffect } from "react";
import Splash from "./componentes/Splash";
import Intro from "./componentes/Intro";
import Preguntas from "./componentes/Preguntas";

import nPrincipiante from "./data/nivel-1-principiante.json";
import nFacil from "./data/nivel-2-facil.json";
import nMedio from "./data/nivel-3-medio.json";
import nDificil from "./data/nivel-4-dificil.json";

import shuffleArray from "./utils/shuffle-array";



function App() {
  const [curComp, setCurComp] = useState(null);
  const [status, setStatus] = useState(2);
  

  useEffect(() => {
    controller();
  }, []);

  const controller = () => {
    console.log("status", status);
    switch (status) {
      case 0:
        setCurComp(<Splash />);
        break;
      case 1:
        setCurComp(<Intro />);
        break;
      case 2:
        //setCurComp(<Preguntas array={shuffleArray(nPrincipiante)}   />);
        setCurComp(<Preguntas array={shuffleArray(nDificil)}   />);
        break;

      default:
        break;
    }
  };

  
  return <div className="container">{curComp}</div>;
}

export default App;
