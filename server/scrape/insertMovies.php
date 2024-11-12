<?php

$host="localhost";
$dbuser= "root";
$pass="";
$dbname = "ai_enhanced_movie_recommenderdb";

$connection = new mysqli($host,$dbuser,$pass,$dbname);

if ($connection->connect_error)
    die("Error occured");

$jsonData = file_get_contents("details.txt");
$data = json_decode($jsonData, true);

foreach ($data as $item) {
    
    $title=$item['title'];
    
    $img=$item['img'];
    
    $duration=$item['duration'];
    
    $categories=$item['categories'];
    
    $release=$item['releaseDate'];
    
    $actors=$item['actors'];

    $story=$item['story'];
    
    
    $query = $connection->prepare("INSERT INTO movies (image,title,duration,categories,releaseDate,actors,story) VALUES (?,?,?,?,?,?,?)");
    $query->bind_param('sssssss',$title,$img,$duration,$categories,$release,$actors,$story);
    
    $query->execute();
}