import React, { useState, useEffect } from "react";

let index = 0;

export default function Preguntas(props) {
  console.log(props.array);
  const [item, setItem] = useState(null);

  useEffect(() => {
    setup();
  }, []);

  const setup = () => {
    setItem(props.array[index]);
  };

  const handleChangeItem = () => {
    index++;
    setItem(props.array[index]);
    //console.log(index);
    props.getIndex(index);
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
