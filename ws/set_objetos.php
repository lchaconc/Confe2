<?php
header("Access-Control-Allow-Origin: *");
$id_usr = $_GET['id_usr'];
$etiqueta = $_GET['etiqueta'];

require 'parametros.php';
sleep(1);

// Create connection
$conn = new mysqli($servidor, $usuario, $password, $bd);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "UPDATE `objetos` SET `visible`= 'false'  WHERE `id_usr` = '$id_usr'  AND   `etiqueta` = '$etiqueta'  ";

if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}

$conn->close();



?>