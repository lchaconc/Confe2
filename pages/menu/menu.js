"use strict";

$(document).ready(function () {
    console.log("ready");    
    cargarIdJuego();
});


function cargarIdJuego() { 
    var idGrupo = localStorage.getItem("idGrupo")
    //console.log(idGrupo);    
    cargarEstadoJuegos(idGrupo);
    eClick();
    
}


function cargarEstadoJuegos( valor) {
    console.log(valor);    
    $.getJSON("http://localhost/Confe2/ws/get_estado_juegos.php?id_grupo="+valor,
        function (data, textStatus, jqXHR) {
           // console.log(data);
           habilitarJuegos(data);
           $("#divAjaxSpiner").removeClass("hadow-layer");
           $("#divAjaxSpiner").fadeOut();
        }
    );
    
}

function habilitarJuegos(array) {
    //console.log(array[0]  );    
  if (array[0].granja01 == "1" ) {
    $("#cardGranja1").removeClass("cards-deshabilitados");
    $("#cardGranja1").attr("activo", "1");
    console.log("cardGranja1 ACTIVO");
    
  }
  if (array[0].platform01 == "1" ) {
    $("#cardPlatform1").removeClass("cards-deshabilitados");
    $("#cardPlatform1").attr("activo", "1");
    console.log("cardPlatform1 ACTIVO");    
  }

    
}

function eClick() {
    //Manejador de eventos para las opciones de menú
    $(".cards").click(function () { 
        let thisActivo = $(this).attr("activo");
        console.log(thisActivo);
    });
    
}