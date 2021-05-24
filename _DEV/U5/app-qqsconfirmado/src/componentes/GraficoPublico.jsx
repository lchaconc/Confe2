import React, { useState, useEffect } from "react";

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default function GraficoPublico(props) {
  const rndNum = getRandomInt(1, 4);
  console.log(rndNum);

  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setup();
  }, []);

  const setup = () => {
    setTimeout(() => {
      setIsReady(true);
    }, 1500);
  };

  return (
    <div className="row">
      <div className="col-sm-12 text-center">
        <img
          src={
            !isReady
              ? "./assets/loading-vote.jpg"
              : `./assets/grafico${rndNum}.png`
          }
          alt="grafico"
          className="img-graphic"
        />
      </div>
    </div>
  );
}
