<?php
function conectarDB(){

        $servidor = "localhost";
        $usuario = "user_confe_games";
        $password = "Confe123*";
        $bd = "confe_game";

    $conexion = mysqli_connect($servidor, $usuario, $password,$bd);

        if($conexion){
            //echo "Conexión satisfactoria";
        }else{
            echo 'Ha sucedido un error inexperado en la conexion de la base de datos
';
        }

    return $conexion;
}
?>
