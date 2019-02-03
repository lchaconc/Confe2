"use strict";

$(document).ready(function () {
    console.log("ready");    
    cargarIdJuego();
});


function cargarIdJuego() { 
    let idGrupo = localStorage.getItem("idGrupo"),
    idUsuario = localStorage.getItem("idUsuario");       
    cargarEstadoJuegos(idGrupo);
    cargarAvanceJugador(idUsuario);

    eClick();
    
}


function cargarEstadoJuegos( idGrupo) {
    console.log(idGrupo);    
    $.getJSON("http://localhost/Confe2/ws/get_estado_juegos.php?id_grupo="+idGrupo,
        function (data, textStatus, jqXHR) {
           // console.log(data);
           habilitarJuegos(data);

        }
    );
    
}



function cargarAvanceJugador( idUsuario) {
    console.log(idUsuario);    
    $.getJSON("http://localhost/Confe2/ws/get_avance_usuario.php?id_usuario=luis@correo.de",
        function (data, textStatus, jqXHR) {
           console.log(data);
           
           //TODO Demás instrucciones

           $("#divAjaxSpiner").removeClass("hadow-layer");
           $("#divAjaxSpiner").fadeOut();
        }
    );
    
}

function habilitarJuegos(array) {
    //Activa el botón correspondiente dependiendo si está habilitado el juego
    //console.log(array[0]  );    
  if (array[0].granja01 == "1" ) {
    $("#cardGranja1").removeClass("cards-deshabilitados");
    $("#cardGranja1").attr("activo", "1");
    //console.log("cardGranja1 ACTIVO");
    
  }
  if (array[0].platform01 == "1" ) {
    $("#cardPlatform1").removeClass("cards-deshabilitados");
    $("#cardPlatform1").attr("activo", "1");
    //console.log("cardPlatform1 ACTIVO");    
  }

    
}

function eClick() {
    //Clic de los botones del menú para ir a los juegos:
    //Manejador de eventos para las opciones de menú
    $(".cards").click(function () { 
        let thisActivo = $(this).attr("activo"),
        thisId = $(this).attr("id");

       // console.log(thisActivo);
        if (thisActivo=="1") {
           switch (thisId) {
               case "cardGranja1":
                    window.location.assign("../granja1");
                break;                
                case "cardPlatform1":
                    window.location.assign("../platform1");
                break;
           
               default:
               console.log("Opcion fuera de rango");
               
                   break;
           }
        }
    });
    
}