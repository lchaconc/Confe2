"use strict";

const cantUnidades = 6;

$(document).ready(function () {
    console.log("ready");    
    cargarIdJuego();
});


function cargarIdJuego() { 
    let 
    //idGrupo = sessionStorage.getItem("idGrupo"),
    //idUsuario = sessionStorage.getItem("idUsuario");       

    idGrupo = "moravia122",
    //idGrupo = "desampa042",
    idUsuario = "felipe@correo.de";


    cargarEstadoJuegos(idGrupo);
    cargarAvanceJugador(idUsuario);

    eClick();
    
}


function cargarEstadoJuegos( idGrupo) {
    console.log(idGrupo);    
    $.getJSON("http://construtecdeleste.com/test/confe_ws/get_estado_grupo.php?id_grupo="+idGrupo,
        function (data, textStatus, jqXHR) {
           console.log("Estado de juegos: ");           
            //console.log(data);
           habilitarJuegos(data);

        }
    );
    
}



function cargarAvanceJugador( idUsuario) {
    console.log(idUsuario);    
    $.getJSON("http://construtecdeleste.com/test/confe_ws/get_avance_usuario.php?id_usuario="+idUsuario,
        function (data, textStatus, jqXHR) {
           
            alamcenamientoLocal(data[0]);
           
           $("#divAjaxSpiner").removeClass("shadow-layer");
           $("#divAjaxSpiner").fadeOut();
        }
    );
    
}

function habilitarJuegos(array) {
    //Activa el botón correspondiente dependiendo si está habilitado el juego
    //console.log(array[0]  ); 

  
    for (let index = 1; index < cantUnidades+1; index++) {
        console.log(array[0]["unidad" + index  ]  );
        if (array[0]["unidad" + index  ] == "1") {
            $("#icoUnidad" + index).removeClass("cards-deshabilitados");    
            $("#icoUnidad" + index).attr("activo", "1");
            $("#icoUnidad" + index).addClass("cards-habilitados");    
        }      
        
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
                    window.location.assign("../granja01/index.html");
                break;                
                case "cardPlatform1":
                    window.location.assign("../platform01/index.html");
                break;
           
               default:
               console.log("Opcion fuera de rango");
               
                   break;
           }
        }
    });
    
}


function alamcenamientoLocal(array) {
    //Guarada Avance de cada juego
    //para que cuando se abbra el juego en C2 cargue el avance desde session storage   
    console.log(array.granja01);    
    sessionStorage.setItem("granja01", array.granja01 );
    sessionStorage.setItem("platform01", array.platform01 );
    
}