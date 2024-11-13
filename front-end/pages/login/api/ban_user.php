<?php
session_start();
require 'db.php';

if (!$_SESSION['is_admin']) {
    header("Location: index.html");
    exit;
}

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["user_id"])) {
    $userId = $_POST["user_id"];
    $stmt = $pdo->prepare("UPDATE users SET banned = NOT banned WHERE id = :user_id");
    $stmt->bindParam(":user_id", $userId);
    $stmt->execute();
}

header("Location: admin_panel.php");
exit;
?>
