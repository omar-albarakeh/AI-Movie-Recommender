<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type");


$host = "localhost";
$dbuser = "root";
$pass = "";
$dbname = "ai_enhanced_movie_recommenderdb";

$connection = new mysqli($host,$dbuser,$pass,$dbname);

if ($connection->connect_error)
    die("Error occured");
