import React, { useState, useEffect } from "react";
import nPrincipiante from "../data/nivel-1-principiante.json";
import nFacil from "../data/nivel-2-facil.json";
import nMedio from "../data/nivel-3-medio.json";
import nDificil from "../data/nivel-4-dificil.json";

import shuffleArray from "../utils/shuffle-array";

const MAX_ITEMS = 3;
const MAX_LEVELS = 4;
let index = 0;
let level = 1;

export default function Preguntas(props) {
  const [item, setItem] = useState(null);
  const [filtrado, setFiltrado] = useState(null);

  useEffect(() => {
    setup();
  }, []);

  useEffect(() => {
    //CArga del primer item
    filtrado && setItem(filtrado[index]);
    console.log("filtrado", filtrado);
  }, [filtrado]);

  const setup = () => {
    loadLevel(level);
  };

  const handleChangeItem = () => {
    //valida max items
    if (index < MAX_ITEMS) {
      index++;
      setItem(filtrado[index]);
      console.log("index", index);  
    } else {

            //Validar max Levels
      if (level < MAX_LEVELS) {
        //incrementa el nivel y reseta el index
        index=0;
        level++;
        loadLevel(level);
      } else {
          props.controller("fin");
      }

    }
  };

  const loadLevel = (level) => {
      console.log("level", level);
    switch (level) {
      case 1:
        setFiltrado(shuffleArray(nPrincipiante));
        break;
      case 2:
        setFiltrado(shuffleArray(nFacil));
        break;
      case 3:
        setFiltrado(shuffleArray(nMedio));
        break;
      case 4:
        setFiltrado(shuffleArray(nDificil));
        break;

      default:
        console.log("Nivel fuera de rengdo");
        break;
    }
  };

  return (
    item && (
      <>
        <div className="jumbotron"></div>

        <div className="row">
          <div className="col-12 alert alert-success">
            <h5>{item.pregunta} </h5>
          </div>
        </div>
        <div className="row">
          <div
            className="col-5 alert alert-info"
            role="button"
            onClick={handleChangeItem}
          >
            <span> {item.opcion1} </span>
          </div>
          <div className="col-2"></div>
          <div
            className="col-5 alert alert-info"
            role="button"
            onClick={handleChangeItem}
          >
            <span> {item.opcion2} </span>
          </div>
        </div>
        <div className="row">
          <div
            className="col-5 alert alert-info"
            role="button"
            onClick={handleChangeItem}
          >
            <span> {item.opcion3} </span>
          </div>
          <div className="col-2"></div>
          <div
            className="col-5 alert alert-info"
            role="button"
            onClick={handleChangeItem}
          >
            <span> {item.opcion4} </span>
          </div>
        </div>
      </>
    )
  );
}
