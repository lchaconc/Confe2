<?php
header("Access-Control-Allow-Origin: *");
$id_usr = $_GET['id_usr'];
$tipo_avatar = $_GET['tipo_avatar'];
$tipo_traje = $_GET['tipo_traje'];

require 'parametros.php';


// Create connection
$conn = new mysqli($servidor, $usuario, $password, $bd);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "UPDATE `avatar` SET `tipo_avatar`= '$tipo_avatar',  `tipo_traje`= '$tipo_traje' WHERE `id_usr` = '$id_usr'";

if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}

$conn->close();



?>