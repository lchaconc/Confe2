"use strict";

const cantUnidades = 6;
var datasetJuegos;

$(document).ready(function () {
    console.log("ready");    
    setup();
});


function setup() { 
    var 
    //idGrupo = sessionStorage.getItem("idGrupo"),
    //idUsuario = sessionStorage.getItem("idUsuario");       

    idGrupo = "moravia122",
    //idGrupo = "desampa042",
    idUsuario = "felipe@correo.de";


    cargarEstadoGrupo(idGrupo);
    cargarEstadoJuegos(idUsuario, idGrupo);

    eClick();
    
}


function cargarEstadoGrupo( idGrupo) {
    console.log(idGrupo);    
    $.getJSON("http://construtecdeleste.com/test/confe_ws/get_estado_grupo.php?id_grupo="+idGrupo,
        function (data, textStatus, jqXHR) {
           console.log("Estado de unidades: ");           
           console.log(data);
           habilitarUnidades(data);

        }
    );
    
}



function cargarEstadoJuegos( idUsuario, idGrupo ) {    
    $.getJSON("http://construtecdeleste.com/test/confe_ws/get_estado_juegos.php?id_grupo="+idGrupo+"&id_usr="+idUsuario,
        function (data, textStatus, jqXHR) {
           datasetJuegos = data;
		   
		   console.log("Estado de juegos");
		   console.log(datasetJuegos);
		   //alamcenamientoLocal(data[0]);
           
           $("#divAjaxSpiner").removeClass("shadow-layer");
           $("#divAjaxSpiner").fadeOut();
        }
    );
    
}

function habilitarUnidades(array) {
    //Activa el botón correspondiente dependiendo si está habilitada la unidad
    //console.log(array[0]  ); 

  
    for (let index = 1; index < cantUnidades+1; index++) {
        console.log(array[0]["unidad" + index  ]  );
        if (array[0]["unidad" + index  ] == "1") {
            $("#icoUnidad" + index).removeClass("cards-deshabilitados");    
            $("#icoUnidad" + index).attr("activo", "1");
			$("#icoUnidad" + index).attr("unidad", index);
            $("#icoUnidad" + index).addClass("cards-habilitados");    
        }      
        
    }    
    
}


/*
TODO: Antes de cargar todo el arreglo hay que hacer un filtrado con la unidad
por otro lado se debe cargar la propiedad title en el encabezado del modal de cada unidad.


function eClick() {
    //Clic de los botones del menú para ir a los juegos:
    //Manejador de eventos para las opciones de menú
    $(".cards").click(function () { 
        let thisActivo = $(this).attr("activo"),		
        thisId = $(this).attr("id");
        console.log(thisId);
		
		//Limpia la clase contendor de botones:
		$(".cont-botones").empty();
		//Genera los botnes:		
		for (let index = 0; index < datasetJuegos.length; index++ ) {
			//console.log(datasetJuegos[index].etiqueta );
			let htmlBtn = $("<button class='btn btn-danger  btn-block'> </button>");
			$(htmlBtn).text(datasetJuegos[index].etiqueta  );
			$("#colRow" + index).html(htmlBtn);
		}
		
        $("#modalJuegos").modal();
        

    });
    
}


function alamcenamientoLocal(array) {
    //Guarada Avance de cada juego
    //para que cuando se abbra el juego en C2 cargue el avance desde session storage   
    console.log(array.granja01);    
    sessionStorage.setItem("granja01", array.granja01 );
    sessionStorage.setItem("platform01", array.platform01 );
    
}