<?php
session_start();
require 'db.php';


if (empty($_SESSION['is_admin']) || !$_SESSION['is_admin']) {
    http_response_code(403); 
    echo json_encode(["error" => "Access denied"]);
    exit;
}


$userData = $pdo->query("SELECT id, username, banned FROM users WHERE id NOT IN (1, 2, 3, 4)")->fetchAll(PDO::FETCH_ASSOC);


header('Content-Type: application/json');
echo json_encode($userData);
?>
