//Const URL servidor
const urlGetEstadoJuegos = "https://elpatioviveros.com/test/confe_ws/get_estado_juegos.php?id_usr=";


$(document).ready(function () {
    console.log("Ready");    
    setup();
});



function setup () {    
    console.log("setup");    
    const sexo = sessionStorage.getItem("sexo");
    const idUsusario = sessionStorage.getItem("id_usuario");

    console.log("idUsusario",idUsusario );
    console.log("Sexo", sexo); 
    
 


    fetch( urlGetEstadoJuegos + idUsusario )
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Error:', response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
        guardarDatosSesion(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

}


function guardarDatosSesion(array) {
    const limite = array.length;
    for (let index = 0; index < limite; index++) {
        sessionStorage.setItem( "activo_" + array[index].id_juego,   array[index].activo );
        sessionStorage.setItem( "avance_" + array[index].id_juego,   array[index].avance );
        sessionStorage.setItem( "terminado_" + array[index].id_juego,   array[index].terminado );
        
    }
    
}