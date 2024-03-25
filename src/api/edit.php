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

// Редактирование билета
if ($_SERVER["REQUEST_METHOD"] == "PUT") {
    // Получаем данные из тела запроса
    $data = json_decode(file_get_contents("php://input"), true);
    $flight_number = $data['flight_number'];
    $price = $data['price'];

    // Подготовка SQL-запроса для обновления цены билета
    $sql = "UPDATE tickets SET price=$price WHERE flight_number='$flight_number'";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(array("message" => "Билет успешно отредактирован"));
    } else {
        echo json_encode(array("message" => "Ошибка при редактировании билета: " . $conn->error));
    }
}

// Удаление билета
if ($_SERVER["REQUEST_METHOD"] == "DELETE") {
    // Получаем данные из тела запроса
    $data = json_decode(file_get_contents("php://input"), true);
    $flight_number = $data['flight_number'];

    // Подготовка SQL-запроса для удаления билета
    $sql = "DELETE FROM tickets WHERE flight_number='$flight_number'";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(array("message" => "Билет успешно удален"));
    } else {
        echo json_encode(array("message" => "Ошибка при удалении билета: " . $conn->error));
    }
}

// Закрытие соединения с базой данных
$conn->close();
?>
