//Const URL servidor

/* mis servicios loales
const urlGetEstadoJuegos = "http://localhost/Confe2/ws/get_estado_juegos.php?id_usr=";
const urlGetObjetos = "http://localhost/Confe2/ws/get_objetos.php?id_usr=";
*/

/* servicios hostinger
const urlGetEstadoJuegos = "https://elpatioviveros.com/test/confe_ws/get_estado_juegos.php?id_usr=";
const urlGetObjetos = "https://elpatioviveros.com/test/confe_ws/get_objetos.php?id_usr=";
*/


// servisios IIS Locales
const urlGetEstadoJuegos = "http://localhost:60874/api/Juego/listaEstadoJuegos/?idUsuario=";
const urlGetObjetos = "http://localhost:60874/api/Juego/ObtieneObjetos/?idUsuario=";


$(document).ready(function () {
    console.log("Ready");    
    setup();
});



function setup () {        
    const sexo = sessionStorage.getItem("sexo");
    const idUsusario = sessionStorage.getItem("idUsuario");
    const tipoAvatar = sessionStorage.getItem("tipoAvatar");
    const tipoTraje = sessionStorage.getItem("tipoTraje");
    
    console.log("idUsusario", idUsusario );
    console.log("Sexo", sexo);
    console.log("tipoAvatar", tipoAvatar );
    console.log("tipoTraje", tipoTraje);   

    getJson(urlGetEstadoJuegos + idUsusario, function (data) {
		console.log("estado juegos")
          guardarDatosSesion(data); 	  			  		
            getJson (urlGetObjetos + idUsusario, function (data) { 
              guardarDatosObjetos(data);
              window.location.assign("./modulos/menu/index.html");
            })
     } )

}


function getJson(url, mCallBack ) {  
  fetch( url )
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Error:', response.status);
        return;
      }      
      response.json().then(function(data) {               
        mCallBack(data);        
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });  
}




function guardarDatosSesion(array) {	
	console.log(array);	
    const limite = array.length;
    for (let index = 0; index < limite; index++) {		
        sessionStorage.setItem( "activo" + array[index].idJuego,   array[index].activo );
        sessionStorage.setItem( "avance" + array[index].idJuego,   array[index].avance );
        sessionStorage.setItem( "terminado" + array[index].idJuego,   array[index].terminando );        
    }        
}



function guardarDatosObjetos(array) {
	
  const limite = array.length;
  for (let index = 0; index < limite; index++) {
      sessionStorage.setItem( "objeto" + array[index].etiqueta,   array[index].activo);           
  }
  console.log( "sandalias:", sessionStorage.getItem("objetoSandalias"));
  
}