<?php
// Подключение к базе данных
require_once 'connect.php';

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
