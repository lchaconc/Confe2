<?php
$id_juego = $_POST['id_juego'];
$activo = $_POST['activo'];

require 'parametros.php';


// Create connection
$conn = new mysqli($servidor, $usuario, $password, $bd);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "UPDATE `estado_juegos` SET `activo`= '$activo' WHERE `id_juego` = '$id_juego'";

if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}

$conn->close();



?>