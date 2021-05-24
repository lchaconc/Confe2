function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function GraficoPublico(props) {
  const rndNum = getRandomInt(1, 4);
  console.log(rndNum);

  return (
    <div className="row">
      <div className="col-sm-12 text-center">
        <img
          src={`./assets/grafico${rndNum}.png`}
          alt="grafico"
          className="img-graphic"
        />
      </div>
    </div>
  );
}
