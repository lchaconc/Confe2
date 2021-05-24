import React, { useState, useEffect, useRef } from "react";
import GModal from "./Modal/GModal";

import ItemsTime from "./ItemsTime";

import nPrincipiante from "../data/nivel-1-principiante.json";
import nFacil from "../data/nivel-2-facil.json";
import nMedio from "../data/nivel-3-medio.json";
import nDificil from "../data/nivel-4-dificil.json";

import shuffleArray from "../utils/shuffle-array";

import "../css/master.css";
import GraficoPublico from "./GraficoPublico";
import LevelScreen from "./LevelScreen";

const MAX_ITEMS = 1;
const MAX_LEVELS = 4;
const ITEM_DELAY = 60000;
let index = 0;
let level = 1;

export default function Preguntas(props) {
  const [item, setItem] = useState(null);
  const [filtrado, setFiltrado] = useState(null);
  //Estado para desactivar o activar la cuenta regresiva
  const [chk, setChk] = useState(false);

  //Etados para el comodin 50/50
  const [v1, setV1] = useState(true);
  const [v2, setV2] = useState(true);
  const [v3, setV3] = useState(true);
  const [v4, setV4] = useState(true);

  //estado para los mostrar u ocultar los botones de comdines:
  const [btn50, setBtn50] = useState(true);
  const [btnPublico, setBtnPublico] = useState(true);
  const [btnAskSomeone, setBtnAskSomeone] = useState(true);

  //Estados para el modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //controla el contenido del modal
  const [modalMode, setModalMode] = useState(null);

  //Referencia de boton de opción:
  const refBotones = useRef();
  refBotones.current = [];

  useEffect(() => {
    console.log("v1", !v1);
    setup();
  }, []);

  useEffect(() => {
    //CArga del primer item
    filtrado && setItem(filtrado[index]);
    console.log("filtrado", filtrado);
  }, [filtrado]);

  useEffect(() => {
    //Efecto secundario del modal mode abre el modal
    //para que una vez cargado el modo el modal ya sepa que debe abrir
    if (modalMode) {
      handleShow();
    }
  }, [modalMode]);

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
      array[index].classList.add("cont-opcion");
    }
  };

  //Funcionaes comodines
  const comod50 = () => {
    console.log(item.correcta);

    //elimina el botón del comodín 50/50
    setBtn50(false);

    switch (item.correcta) {
      case 1:
        setV2(false);
        setV3(false);
        break;
      case 2:
        setV1(false);
        setV4(false);
        break;
      case 3:
        setV1(false);
        setV4(false);
        break;
      case 4:
        setV1(false);
        setV3(false);
        break;

      default:
        break;
    }
  };

  const handleComdAskPublic = () => {
    setBtnPublico(false);
    setModalMode("grafico");
  };

  const handleAskSomeone = () => {
    setBtnAskSomeone(false);
    setChk(false);
  };

  const handleTimeOver = (completed) => {
    completed && props.controller("timeover");
  };

  const handleChangeItem = () => {
    //Estdo desactivado para poder elegir otra opción
    setChk(false);

    //Vuelve todas visibles en caso de que se haya usado el
    //comodin 50/50
    setV1(true);
    setV2(true);
    setV3(true);
    setV4(true);

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
        btn.classList.remove("cont-opcion");
        btn.classList.add("opt-right");
      } else {
        console.log("incorrecta");
        btn.classList.remove("cont-opcion");
        btn.classList.add("opt-wrong");
      }
    }
  };

  const loadLevel = (level) => {
    console.log("level", level);
    switch (level) {
      case 1:
        setFiltrado(shuffleArray(nPrincipiante));
        setModalMode("principiante");
        break;
      case 2:
        setFiltrado(shuffleArray(nFacil));
        setModalMode("facil");
        break;
      case 3:
        setFiltrado(shuffleArray(nMedio));
        setModalMode("intermedio");
        break;
      case 4:
        setFiltrado(shuffleArray(nDificil));
        setModalMode("avanzado");
        break;

      default:
        console.log("Nivel fuera de rengdo");
        break;
    }
  };

  return (
    item && (
      <>
        <hr />
        <div className="row">
          <div className="col-2">
            {btn50 && (
              <img
                className="img-fluid"
                src="./assets/comodin-50.png"
                onClick={comod50}
                alt="comodin 50 50"
              />
            )}
          </div>

          <div className="col-2">
            {btnPublico && (
              <img
                onClick={handleComdAskPublic}
                className="img-fluid"
                src="./assets/comodin-publico.png"
                alt="comodin publico"
              />
            )}
          </div>

          <div className="col-2">
            {btnAskSomeone && (
              <img
                className="img-fluid"
                onClick={handleAskSomeone}
                src="./assets/comodin-persona.png"
                alt="comodin persona"
              />
            )}
          </div>

          <div className="col-6 text-right">
            {!chk && (
              <span className="cont-contdown">
                <ItemsTime delay={ITEM_DELAY} handleTimeOver={handleTimeOver} />
              </span>
            )}
          </div>
        </div>
        <br />

        <div className="row">
          <div className="col-12 cont-pregunta text-center ">
            <h5>{item.pregunta} </h5>
          </div>
        </div>
        <br />

        <div className="row">
          <div
            id={1}
            onClick={handleChkAnswer}
            className={
              v1 ? "col-5 cont-opcion" : "col-5 alert alert-info invisible"
            }
            ref={agregarRefBotones}
            role="button"
          >
            <span className="letra-opcion">A:</span>{" "}
            <span> {item.opcion1} </span>
          </div>

          <div className="col-2"></div>
          <div
            id={2}
            onClick={handleChkAnswer}
            className={
              v2 ? "col-5 cont-opcion" : "col-5 alert alert-info invisible"
            }
            ref={agregarRefBotones}
            role="button"
          >
            <span className="letra-opcion">B:</span>{" "}
            <span> {item.opcion2} </span>
          </div>
        </div>
        <br />
        <div className="row">
          <div
            id={3}
            onClick={handleChkAnswer}
            className={
              v3 ? "col-5 cont-opcion" : "col-5 alert alert-info invisible"
            }
            ref={agregarRefBotones}
            role="button"
          >
            <span className="letra-opcion">C:</span>{" "}
            <span> {item.opcion3} </span>
          </div>
          <div className="col-2"></div>
          <div
            id={4}
            onClick={handleChkAnswer}
            className={
              v4 ? "col-5 cont-opcion" : "col-5 alert alert-info invisible"
            }
            ref={agregarRefBotones}
            role="button"
          >
            <span className="letra-opcion">D:</span>{" "}
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

        {modalMode === "grafico" && (
          <GModal show={show} handleClose={handleClose} className="ModalGraph">
            <GraficoPublico />
          </GModal>
        )}

        {modalMode !== "grafico" && (
          <GModal show={show} handleClose={handleClose} className="Modal">
            <LevelScreen level={modalMode} />
          </GModal>
        )}
      </>
    )
  );
}
