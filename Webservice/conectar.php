<?php
function conectarDB(){

        $servidor = "localhost";
        $usuario = "u211168474_confe";
		//u211168474_confe
        $password = "Confe123*";
        $bd = "u211168474_confe";
		//u211168474_confe

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
