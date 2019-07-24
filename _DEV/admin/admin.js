const url_set_estado_juegos = "../confe_ws/activar_juegos.php";

$(document).ready(function () {

    $(".chk-juegos").click(function (e) { 
        const id_juego = e.target.id;
        const activo = e.target.checked;        
        console.log( id_juego, activo);
        enviarDataAjax(id_juego, activo);       
    });
    
});

function enviarDataAjax( id, activo ) {
    var formData = new FormData();
    // formData.append("id_CE", idCentroEducativo);
     formData.append("id_juego",  id  );
     formData.append("activo", activo  );

    $.ajax({
        url: url_set_estado_juegos,
        type: 'POST',
        data: formData,
        //dataType:'json',
        cache: false,
        contentType: false,
        processData: false,
        beforeSend: function(){
        console.log("En proceso");    
        }, success: function(response){
          console.log("Enviado satisfactoriamente");              
        }, error: function(response){
          console.log("Error al enviar");
            //console.log(response.error);
            //console.log(response.msj);     
        }
      });
    
}