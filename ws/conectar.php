<?php
function conectarDB(){

        require 'parametros.php';

    $conexion = mysqli_connect($servidor, $usuario, $password,$bd);

        if($conexion){
            //echo "Conexion satisfactoria";
        }else{
            echo 'Ha sucedido un error inexperado en la conexion de la base de datos
';
        }

    return $conexion;
}
?>
