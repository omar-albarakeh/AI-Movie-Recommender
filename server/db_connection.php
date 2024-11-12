<?php
header("Access-Control-Allow-Origin: http://localhost");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

$host = "localhost";
$username = "root";
$password = "";
$dbname = "ai-movie-recommender";

$connection = new mysqli($host, $username, $password, $dbname);

if ($connection->connect_errno) {
    die("Database connection error");
}
?>