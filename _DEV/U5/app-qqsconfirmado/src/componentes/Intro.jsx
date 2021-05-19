export default function Intro(props) {

    
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <img className="img-s" src="./assets/logo.png" alt="logo" />
        </div>
      </div>
      <div className="row">
          <div className="col-12 text-white">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde officiis commodi nostrum odio alias natus fugit, in eveniet incidunt id, repellat quidem quaerat quo iste. Rerum fugiat mollitia voluptate incidunt.
          </div>
      </div>
      <br />
      <div className="row">
          <div className="col-2"></div>
          <div className="col-8 text-center">
            <button 
            onClick={()=> props.controller("preguntas") }
            className ="btn btn-lg btn-blue btn-lg btn-block" > INICIAR </button>
          </div>
          <div className="col-2"></div>
      </div>
    </div>
  );
}
