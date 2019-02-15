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
    sessionStorage.setItem("idGrupo", "coronado015" );
    sessionStorage.setItem("idUsuario", "jimena@correo.de" );    
    window.location.assign("./pages/menu/menu.html");             
  } else {
    $('.error').slideDown('slow');
    setTimeout(function(){
    $('.error').slideUp('slow');
  },3000);
  $('.botonlg').val('Iniciar Sesión');
  }

  if (usr == "felipe@correo.de"  && pwd == "f123" ) {
    sessionStorage.setItem("idGrupo", "moravia122" );
    sessionStorage.setItem("idUsuario", "felipe@correo.de" );    
    window.location.assign("./pages/menu/menu.html");             
  } else {
    $('.error').slideDown('slow');
    setTimeout(function(){
    $('.error').slideUp('slow');
  },3000);
  $('.botonlg').val('Iniciar Sesión');
  }

  if (usr == "ana@correo.de"  && pwd == "a123" ) {
    sessionStorage.setItem("idGrupo", "desampa042" );
    sessionStorage.setItem("idUsuario", "ana@correo.de" );    
    window.location.assign("./pages/menu/menu.html");             
  } else {
    $('.error').slideDown('slow');
    setTimeout(function(){
    $('.error').slideUp('slow');
  },3000);
  $('.botonlg').val('Iniciar Secion');
  }
  
}
