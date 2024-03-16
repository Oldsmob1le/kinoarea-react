<?php
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

// Получение данных из параметров поиска (предположим, что они передаются через GET-запрос)
$origin = $_GET['origin']; // Откуда
$destination = $_GET['destination']; // Куда
$passengers = $_GET['passengers']; // Количество пассажиров
$date = $_GET['date']; // Дата билета

// Подготовка SQL-запроса с учетом параметров поиска
$sql = "SELECT flight_number, destination, origin, departure_time, arrival_time, price 
        FROM flights 
        WHERE origin = '$origin' 
        AND destination = '$destination' 
        AND available_seats >= $passengers 
        AND departure_date = '$date'";

$result = $conn->query($sql);

$flights = array();
if ($result->num_rows > 0) {
    // Формирование массива с результатами запроса
    while($row = $result->fetch_assoc()) {
        $flights[] = array(
            'flight_number' => $row['flight_number'],
            'destination' => $row['destination'],
            'origin' => $row['origin'],
            'departure_time' => $row['departure_time'],
            'arrival_time' => $row['arrival_time'],
            'price' => $row['price']
        );
    }
}

// Отправка данных в формате JSON
header('Content-Type: application/json');
echo json_encode($flights);

// Закрытие соединения с базой данных
$conn->close();
?>