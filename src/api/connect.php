<?php
header("Access-Control-Allow-Origin: *");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "SKY";

// Создаем соединение с базой данных
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверяем соединение
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Подготовка SQL-запроса для выборки всех данных из таблицы
$sql = "SELECT t.flight_number, f.destination, f.origin, f.departure_time, f.arrival_time, t.price
        FROM tickets t
        JOIN flights f ON t.flight_number = f.flight_number";

$result = $conn->query($sql);

// Обработка результата запроса
$flights = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $flights[] = $row;
    }
}

// Отправка данных в формате JSON
header('Content-Type: application/json');
echo json_encode($flights);

// Закрытие соединения с базой данных
$conn->close();
?>
