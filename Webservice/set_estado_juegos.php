<?php
$id_juego = $_POST['id_juego'];
$activo = $_POST['activo'];

/*
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');

$JSONData = file_get_contents("php://input");
$dataObject = json_decode($JSONData);

$id_juego = $dataObject-> id_juego;
$activo =  $dataObject-> activo;
*/


/*
$id_juego = "c01ropero1";
$activo = "false";
*/

$servidor = "localhost";
$usuario = "u211168474_confe";
$password = "Confe123*";
$bd = "u211168474_confe";

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