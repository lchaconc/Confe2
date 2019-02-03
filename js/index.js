"use strict";

$(document).ready(function () {
    console.log("ready");    
    eCArgarJuego();
});


function eCArgarJuego() {
    $("#btnCargar").click(function (e) { 
        e.preventDefault();
                
        //Guarda el grupo en el local storage
        localStorage.setItem("idGrupo", $("#selCodigoJuego").val());

        //Guarda el usuario en el local storage
        localStorage.setItem("idUsuario", $("#selCodigoUsuario").val());

        //Rutea a la página del menú:
        window.location.assign("./pages/menu/menu.html");

    });
    
}
