"use strict";

$(document).ready(function () {
    console.log("ready");    
    eCArgarJuego();
});


function eCArgarJuego() {
    $("#btnCargar").click(function (e) { 
        e.preventDefault();
        cargarEstadoJuegos($("#selCodigoJuego").val());        
    });
    
}



function cargarEstadoJuegos( valor) {
    console.log(valor);
    
    $.getJSON("http://localhost/Confe2/ws/get_estado_juegos.php?id_grupo="+valor,
        function (data, textStatus, jqXHR) {
            console.log(data);            
        }
    );
    
}