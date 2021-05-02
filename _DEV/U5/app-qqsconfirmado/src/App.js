import React, { useState, useEffect } from "react";
import Splash from "./componentes/Splash";
import Intro from "./componentes/Intro";
import Preguntas from "./componentes/Preguntas";

import nPrincipiante from "./data/nivel-1-principiante.json";
import nFacil from "./data/nivel-2-facil.json";
import nMedio from "./data/nivel-3-medio.json";
import nDificil from "./data/nivel-4-dificil.json";

import shuffleArray from "./utils/shuffle-array";

const MAX_TIMES = 3;
let level =1;

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
        loadQuestion();
        break;

      default:
        break;
    }
  };

  const loadQuestion = () => {
   //TODO PAsar esta administración para preguntas
    if (level === 1) {
      console.log("level", level);
      setCurComp(<Preguntas array={shuffleArray(nPrincipiante)}   />);
    }
    if (level === 2) {
      console.log("level", level);
      setCurComp(<Preguntas array={shuffleArray(nFacil)} />);
    }
  
  };

  return <div className="container">{curComp}</div>;
}

export default App;
