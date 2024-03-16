<?php
// Варианты количества пассажиров
$passengerOptions = array(
    array('value' => 1, 'label' => '1'),
    array('value' => 2, 'label' => '2'),
    array('value' => 3, 'label' => '3'),
    array('value' => 4, 'label' => '4'),
);

// Возвращаем данные в формате JSON
header('Content-Type: application/json');
echo json_encode($passengerOptions);
?>