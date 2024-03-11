<?php
header("Access-Control-Allow-Origin: *");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "users";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Не удалось подключиться: " . $conn->connect_error);
}
  
$sql = "SELECT tittle, content, image FROM kinoarea";
$result = $conn->query($sql);
  
$areas = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $areas[] = array(
            'tittle' => $row['tittle'],
            'content' => $row['content'],
            'image' => $row['image']
        );
    }
}
  
header('Content-Type: application/json');
echo json_encode($areas);
  
$conn->close();
?>
