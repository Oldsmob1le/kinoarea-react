<?php
// Подключение к базе данных
header("Access-Control-Allow-Origin: *");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "SKY"; // Не забудьте заменить на имя вашей базы данных

// Создание соединения
$conn = new mysqli($servername, $username, $password, $dbname);

// Проверка соединения
if ($conn->connect_error) {
    die("Не удалось подключиться: " . $conn->connect_error);
}

// Запрос к базе данных для получения вариантов для поля "Откуда"
$sql = "SELECT DISTINCT origin FROM flights";
$result = $conn->query($sql);

$options = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $options[] = $row['origin'];
    }
}

// Возвращаем данные в формате JSON
header('Content-Type: application/json');
echo json_encode($options);

// Закрытие соединения с базой данных
$conn->close();
?>
