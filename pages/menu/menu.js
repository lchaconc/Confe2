"use strict";

$(document).ready(function () {
    console.log("ready");    
    cargarIdJuego();
});


function cargarIdJuego() { 
    let idGrupo = sessionStorage.getItem("idGrupo"),
    idUsuario = sessionStorage.getItem("idUsuario");       
    cargarEstadoJuegos(idGrupo);
    cargarAvanceJugador(idUsuario);

    eClick();
    
}


function cargarEstadoJuegos( idGrupo) {
    console.log(idGrupo);    
    $.getJSON("http://construtecdeleste.com/test/confe_ws/get_estado_juegos.php?id_grupo="+idGrupo,
        function (data, textStatus, jqXHR) {
           // console.log(data);
           habilitarJuegos(data);

        }
    );
    
}



function cargarAvanceJugador( idUsuario) {
    console.log(idUsuario);    
    $.getJSON("http://construtecdeleste.com/test/confe_ws/get_avance_usuario.php?id_usuario="+idUsuario,
        function (data, textStatus, jqXHR) {
           
            alamcenamientoLocal(data[0]);
           
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


function alamcenamientoLocal(array) {
    console.log(array.granja01);    
    sessionStorage.setItem("granja01", array.granja01 );
    sessionStorage.setItem("platform1", array.platform1 );
    
}