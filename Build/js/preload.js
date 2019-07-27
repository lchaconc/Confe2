//Const URL servidor
const urlGetEstadoJuegos = "https://elpatioviveros.com/test/confe_ws/get_estado_juegos.php?id_usr=";


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
    

    fetch( urlGetEstadoJuegos + idUsusario )
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Error:', response.status);
        return;
      }      
      response.json().then(function(data) {
        console.log(data);
        guardarDatosSesion(data); 
        window.location.assign("./modulos/menu/index.html");       
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