<?php
$servername = "localhost";
$username = "user_confe_games";
$password = "Confe123*";
$dbname = "confe_game";


$idUsuario = $_GET["id_usuario"];
$idJuego = $_GET["id_juego"];
$progreso = $_GET["progreso"];

echo $idUsuario;
echo $idJuego;
echo $progreso;




// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "UPDATE avance_juegos SET  ".$idJuego." = '".$progreso."' WHERE id_usuario = '".$idUsuario."'";

if ($conn->query($sql) === TRUE) {
    echo "Record updated successfully";
} else {
    echo "Error updating record: " . $conn->error;
}



$conn->close();
?> 