<?php
header("Access-Control-Allow-Origin: http://localhost");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

$host = "localhost";
$username = "root";
$password = "";
$dbname = "AI-Movie-Recommender";

try {
    $connection = new mysqli($host, $username, $password, $dbname);

    if ($connection->connect_errno) {
        throw new Exception("Failed to connect to the database: " . $connection->connect_error);
    }
    echo "Connected successfully to the database.";
} catch (Exception $e) {

    die("Database connection error: " . $e->getMessage());
}
?>
