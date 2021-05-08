import React, { useState, useEffect, useRef } from "react";

import ItemsTime from "./ItemsTime";

import nPrincipiante from "../data/nivel-1-principiante.json";
import nFacil from "../data/nivel-2-facil.json";
import nMedio from "../data/nivel-3-medio.json";
import nDificil from "../data/nivel-4-dificil.json";

import shuffleArray from "../utils/shuffle-array";

import "../css/master.css";

const MAX_ITEMS = 3;
const MAX_LEVELS = 4;
const ITEM_DELAY = 60000;
let index = 0;
let level = 1;

export default function Preguntas(props) {
  const [item, setItem] = useState(null);
  const [filtrado, setFiltrado] = useState(null);
  const [chk, setChk] = useState(false);

  //Referencia de boton de opción:
  const refBotones = useRef();
  refBotones.current = [];

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

  const agregarRefBotones = (item) => {
    if (item && !refBotones.current.includes(item)) {
      refBotones.current.push(item);
      //console.log(refBotones.current);
    }
  };

  const rmvClass = (array) => {
    console.log(array);
    const limite = array.length;
    for (let index = 0; index < limite; index++) {
      array[index].classList.remove("opt-right");
      array[index].classList.remove("opt-wrong");
    }
  };

  const handleTimeOver = (completed) => {
    completed && props.controller("timeover");
  };

  const handleChangeItem = () => {
    //Estdo desactivado para poder elegir otra opción
    setChk(false);

    //remueve todas las clases css de los objetos para elimianar los
    //estilos de los botones previamente selccionados
    rmvClass(refBotones.current);

    //valida max items
    if (index < MAX_ITEMS) {
      index++;
      setItem(filtrado[index]);
      console.log("index", index);
    } else {
      //Validar max Levels
      if (level < MAX_LEVELS) {
        //incrementa el nivel y reseta el index
        index = 0;
        level++;
        loadLevel(level);
      } else {
        props.controller("fin");
      }
    }
  };

  const handleChkAnswer = (e) => {
    if (!chk) {
      const opt = parseInt(e.currentTarget.id);
      //selecciona el elemento del array de referencias:
      const btn = refBotones.current[opt - 1];

      console.log("opt", opt);
      console.log("item.correcta", item.correcta);
      //Activa la selección
      //para evitar que seleione otra opción y para que se active el botón siguiente
      setChk(true);

      //valida si la opicón que marcó el usuario es la correcta
      if (opt === item.correcta) {
        console.log("Opción correcta");
        //console.log(btn);
        btn.classList.add("opt-right");
      } else {
        console.log("incorrecta");
        btn.classList.add("opt-wrong");
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
      {
        !chk && 
        <ItemsTime
        delay={ITEM_DELAY}          
        handleTimeOver={handleTimeOver}
      />
      }
        <div className="jumbotron"></div>

        <div className="row">
          <div className="col-12 alert alert-success">
            <h5>{item.pregunta} </h5>
          </div>
        </div>
        <div className="row">
          <div
            id={1}
            onClick={handleChkAnswer}
            className="col-5 alert alert-info"
            ref={agregarRefBotones}
            role="button"
          >
            <span> {item.opcion1} </span>
          </div>
          <div className="col-2"></div>
          <div
            id={2}
            onClick={handleChkAnswer}
            className="col-5 alert alert-info"
            ref={agregarRefBotones}
            role="button"
          >
            <span> {item.opcion2} </span>
          </div>
        </div>
        <div className="row">
          <div
            id={3}
            onClick={handleChkAnswer}
            className="col-5 alert alert-info"
            ref={agregarRefBotones}
            role="button"
          >
            <span> {item.opcion3} </span>
          </div>
          <div className="col-2"></div>
          <div
            id={4}
            onClick={handleChkAnswer}
            className="col-5 alert alert-info"
            ref={agregarRefBotones}
            role="button"
          >
            <span> {item.opcion4} </span>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6 text-right">
            {chk && (
              <button onClick={handleChangeItem} className="btn btn-danger">
                {" >> "}
              </button>
            )}
          </div>
        </div>
      </>
    )
  );
}
