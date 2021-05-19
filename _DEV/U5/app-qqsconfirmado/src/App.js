import React, { useState, useEffect } from "react";
import Splash from "./componentes/Splash";
import Intro from "./componentes/Intro";
import Preguntas from "./componentes/Preguntas";
import Fin from "./componentes/Fin";
import GraficoPublico from "./componentes/GraficoPublico";
import TimeOver from "./componentes/TimeOver";

let currentView = "preguntas";

function App() {
  const [curComp, setCurComp] = useState(null);

  useEffect(() => {
    setup();
  }, []);

  const setup = () => {
    controller(currentView);
  };

  const controller = (currentView) => {
    console.log("currentView", currentView);
    switch (currentView) {
      case "splash":
        setCurComp(<Splash />);
        break;
      case "intro":
        setCurComp(<Intro />);
        break;
      case "preguntas":
        setCurComp(<Preguntas controller={controller} />);
        break;      
      case "timeover":
        setCurComp(<TimeOver />);
        break;
      case "fin":
        setCurComp(<Fin />);
        break;

      default:
        console.log("currentView fuera de rango", currentView);
        break;
    }
  };

  return <div className="container">{curComp}</div>;
}

export default App;
