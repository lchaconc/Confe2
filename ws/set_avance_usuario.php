<?php
header("Access-Control-Allow-Origin: *");
$id_usr = $_GET["id_usr"];
$id_juego = $_GET["id_juego"];
$avance = $_GET["avance"];
$terminado = $_GET["terminado"];

echo $id_usr;
echo $id_juego;
echo $avance;


require 'parametros.php';
sleep(1);


// Create connection
$conn = new mysqli($servidor, $usuario, $password, $bd);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "UPDATE estado_juegos SET  avance = '".$avance."', terminado =  '".$terminado."' WHERE id_usr = '".$id_usr."' AND id_juego"."='".$id_juego."'";

if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}

$conn->close();
?> 