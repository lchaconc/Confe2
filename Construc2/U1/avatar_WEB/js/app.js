
const imgPath = "./assets/png/";
var i=1, //indice para recorrer el areglo
limite; //Longitud del arreglo
$(document).ready(function () {    
      setup();    
});

function setup () {
    limite = data.length;
	console.log("Limite del arreglo " + limite);
    cargarImg(data);
    eventos();
    
}

function cargarImg (data) {
    $("#imgVisorIzq").attr("src",  data[0].url  );
    $("#imgVisorCen").attr("src",  data[1].url  );
    $("#imgVisorDer").attr("src",  data[2].url  );
}

function eventos () {
    console.log("eventos");
    
    $("#btnDerecho").click(function (e) { 
        e.preventDefault();
        pasarDerecha();
        
    });
	
	$("#btnIzquierdo").click(function (e) { 
        e.preventDefault();
        pasarIzquierda();
        
    });
}



function pasarDerecha() {    
	
	console.log(i);

	if (i < limite - 2 ) {
		$("#imgVisorIzq").attr("src",  data[i].url  );
		$("#imgVisorCen").attr("src",  data[i+1].url  );
		$("#imgVisorDer").attr("src", data[i+2].url  );
		i++; 
	} else {
		alert ("Fin del arreglo");
	}		
}

function pasarIzquierda() {    console.log(i);
    if (i > 2) {
	$("#imgVisorIzq").attr("src",  data[i-2].url  );
    $("#imgVisorCen").attr("src",  data[i-1].url  );
    $("#imgVisorDer").attr("src", data[i].url  );
	i--;       
	} else {
		alert ("Fin del arreglo");
	}
}
