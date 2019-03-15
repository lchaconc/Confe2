
const imgPath = "./assets/png/";
var i=1; //indice para recorrer el areglo

$(document).ready(function () {    
      setup();    
});

function setup () {
    
    cargarImg(data);
    eventos();
    
}

function cargarImg (data) {
    $("#imgVisorIzq").attr("src", imgPath + data[2].url + ".png" );
    $("#imgVisorCen").attr("src", imgPath + data[1].url + ".png" );
    $("#imgVisorDer").attr("src", imgPath + data[0].url + ".png" );
}

function eventos () {
    console.log("eventos");
    
    $("#btnDerecho").click(function (e) { 
        e.preventDefault();
        pasarDerecha();
        
    });
}



function pasarDerecha() {
    console.log(i);
    $("#imgVisorIzq").attr("src", imgPath + data[i].url + ".png" );
    $("#imgVisorCen").attr("src", imgPath + data[i+1].url + ".png" );
    $("#imgVisorDer").attr("src", imgPath + data[i+2].url + ".png" );
    i++;
    
    
}