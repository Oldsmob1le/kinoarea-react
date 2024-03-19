<?php
header("Access-Control-Allow-Origin: *");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "SKY";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT DISTINCT origin FROM flights";
$result = $conn->query($sql);

$options = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $options[] = $row['origin'];
    }
}

header('Content-Type: application/json');
echo json_encode($options);

$conn->close();
?>