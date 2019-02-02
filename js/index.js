"use strict";

$(document).ready(function () {
    console.log("ready");    
    eCArgarJuego();
});


function eCArgarJuego() {
    $("#btnCargar").click(function (e) { 
        e.preventDefault();
        guardarIdGrupo($("#selCodigoJuego").val());        
    });
    
}

function guardarIdGrupo(id) {
    localStorage.setItem("idGrupo", id);
    window.location.assign("./pages/menu/menu.html");
}


