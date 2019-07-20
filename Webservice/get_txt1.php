<?php
header('Access-Control-Allow-Origin: *');




$host="localhost"; // Host name 
$username="test_hola"; // Mysql username 
$password="hola456*"; // Mysql password 
$db_name="prueba_confe"; // Database name 
$tbl_name="introducciones"; // Table name

$con = mysqli_connect($host, $username, $password, $db_name);

if (mysqli_connect_errno())
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }


// Retrieve data from database 
$sql="SELECT * FROM $tbl_name ORDER BY id_intro ASC";
$result=mysqli_query( $con, $sql);

// Start looping rows in mysql database.
while($rows=mysqli_fetch_array($result)){
//echo $rows['id_intro'] . "|" . $rows['textos'] . "|";
$stringResult  = $rows['textos'] . "|";

	echo utf8_encode($stringResult);



// close while loop 
}

mysqli_close($con);
?>