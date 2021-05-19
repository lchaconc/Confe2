
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


export default function GraficoPublico(props) {

    const rndNum = getRandomInt(1,4);
    console.log(rndNum);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 bg-light p-4">
          <img
            src= {`./assets/grafico${rndNum}.png`}
            alt="grafico"
            className="img-fluid"
          />
        </div>
      </div>
      
      <div className="row">
          <div className="col-12  text-right">
              <button onClick={ ()=> props.controller("preguntas") } className="btn btn-info" > volver </button>
          </div>
      </div>
    </div>
  );
}
