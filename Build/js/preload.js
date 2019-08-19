//Const URL servidor

/*
const urlGetEstadoJuegos = "http://localhost/Confe2/ws/get_estado_juegos.php?id_usr=";
const urlGetObjetos = "http://localhost/Confe2/ws/get_objetos.php?id_usr=";
*/
const urlGetEstadoJuegos = "https://elpatioviveros.com/test/confe_ws/get_estado_juegos.php?id_usr=";
const urlGetObjetos = "https://elpatioviveros.com/test/confe_ws/get_objetos.php?id_usr=";

$(document).ready(function () {
    console.log("Ready");    
    setup();
});



function setup () {        
    const sexo = sessionStorage.getItem("sexo");
    const idUsusario = sessionStorage.getItem("id_usr");
    const tipoAvatar = sessionStorage.getItem("tipo_avatar");
    const tipoTraje = sessionStorage.getItem("tipo_traje");
    
    console.log("idUsusario", idUsusario );
    console.log("Sexo", sexo);
    console.log("tipoAvatar", tipoAvatar );
    console.log("tipoTraje", tipoTraje);   

    getJson(urlGetEstadoJuegos + idUsusario, function (data) {
		console.log("estado juegos")
          guardarDatosSesion(data); 
		  
		  //test	
		  var activoRopero2 = sessionStorage.getItem("activo_c02ropero2");
		  console.log("************activoRopero2", activoRopero2);
		  
		  
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
        //console.log(data);
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
        sessionStorage.setItem( "activo_" + array[index].id_juego,   array[index].activo );
        sessionStorage.setItem( "avance_" + array[index].id_juego,   array[index].avance );
        sessionStorage.setItem( "terminado_" + array[index].id_juego,   array[index].terminado );
        
    }        
}



function guardarDatosObjetos(array) {
  const limite = array.length;
  for (let index = 0; index < limite; index++) {
      sessionStorage.setItem( "obj_" + array[index].etiqueta,   array[index].visible);           
  }
  console.log( "sandalias:", sessionStorage.getItem("obj_sandalias"));
  
}