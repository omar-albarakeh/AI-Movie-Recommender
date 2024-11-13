<?php
session_start();
header("Content-Type: application/json");
require 'db.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $input = json_decode(file_get_contents("php://input"), true);
    $username = $input["username"];
    $password = $input["password"];

    $stmt = $pdo->prepare("SELECT * FROM users WHERE username = :username");
    $stmt->bindParam(":username", $username);
    $stmt->execute();
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user["password"])) {
        if ($user["banned"]) {
            echo json_encode(["error" => "This account has been banned."]);
        } else {
            $_SESSION['is_admin'] = in_array($user["id"], [1, 2, 3, 4]);
            $_SESSION['user_id'] = $user["id"];
            
            $redirectUrl = $_SESSION['is_admin'] ? "api/admin_panel.php" : "front-end/index.html";
            $redirectUrl .= "?user_id=" . urlencode($user["id"]);
            
            echo json_encode(["success" => true, "redirect" => $redirectUrl]);
        }
    } else {
        echo json_encode(["error" => "Invalid username or password"]);
    }
} else {
    echo json_encode(["error" => "Invalid request method."]);
}
?>
