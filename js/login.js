$(document).ready(function () {
$("#btnbtnLogin").click(function (e) { 
  e.preventDefault();  
  validar();  
});



});






function validar() {
  var usr = $("#txtUsr").val(),
  pwd = $("#txtPwd").val();

  if (usr == "jimena@correo.de"  && pwd == "j123" ) {
    localStorage.setItem("idGrupo", "coronado015" );
    localStorage.setItem("idUsuario", "jimena@correo.de" );    
    window.location.assign("./pages/menu/menu.html");             
  } else {
    $('.error').slideDown('slow');
    setTimeout(function(){
    $('.error').slideUp('slow');
  },3000);
  $('.botonlg').val('Iniciar Secion');
  }

  if (usr == "felipe@correo.de"  && pwd == "f123" ) {
    localStorage.setItem("idGrupo", "moravia122" );
    localStorage.setItem("idUsuario", "felipe@correo.de" );    
    window.location.assign("./pages/menu/menu.html");             
  } else {
    $('.error').slideDown('slow');
    setTimeout(function(){
    $('.error').slideUp('slow');
  },3000);
  $('.botonlg').val('Iniciar Secion');
  }

  if (usr == "ana@correo.de"  && pwd == "a123" ) {
    localStorage.setItem("idGrupo", "desampa042" );
    localStorage.setItem("idUsuario", "ana@correo.de" );    
    window.location.assign("./pages/menu/menu.html");             
  } else {
    $('.error').slideDown('slow');
    setTimeout(function(){
    $('.error').slideUp('slow');
  },3000);
  $('.botonlg').val('Iniciar Secion');
  }
  
}
