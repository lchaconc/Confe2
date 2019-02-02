<?php
header ("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

$id_grupo = $_GET['id_grupo'];
//echo $id_grupo;

$sql = "SELECT * FROM desbloqueados WHERE id_grupo = '".$id_grupo."'";
//echo $sql; 

sleep(1);


include "conectar.php";
function desconectar($conexion){

    $close = mysqli_close($conexion);

        if($close){
            //echo 'Desconexión relizada';
        }else{
            echo 'Ha sucedido un error inexperado en la desconexion de la base de datos
';
        }

    return $close;
}

function obtenerArreglo($sql){
    //Creamos la conexion con la funcion anterior
    $conexion = conectarDB();

    //generamos la consulta

        mysqli_set_charset($conexion, "utf8"); //formato de datos utf8

    if(!$resultado = mysqli_query($conexion, $sql)) die(); //si la conexión cancelar programa

    $arreglo = array(); //creamos un array

    //guardamos en un array todos los datos de la consulta
    $i=0;

    while($row = mysqli_fetch_assoc($resultado))
    {
        $arreglo[$i] = $row;
        $i++;
    }

    desconectar($conexion); //desconectamos la base de datos

    return $arreglo; //devolvemos el array
}

        $r = obtenerArreglo($sql);
        echo json_encode($r);

        
?>
