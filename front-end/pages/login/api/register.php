<?php
header("Content-Type: application/json");
require 'db.php'; 
if ($_SERVER["REQUEST_METHOD"] === "POST") {
   
    $input = json_decode(file_get_contents("php://input"), true);
    
    if (empty($input["username"]) || empty($input["password"])) {
        echo json_encode(["error" => "Username and password are required."]);
        exit;
    }

    $username = $input["username"];
    $password = $input["password"];
    $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

    try {
        $stmt = $pdo->prepare("INSERT INTO users (username, password) VALUES (:username, :password)");
        $stmt->bindParam(":username", $username);
        $stmt->bindParam(":password", $hashedPassword);
        $stmt->execute();

        echo json_encode(["success" => true]);
    } catch (PDOException $e) {
        if ($e->getCode() == 23000) { 
            echo json_encode(["error" => "Username already exists."]);
        } else {
            echo json_encode(["error" => "Registration failed: " . $e->getMessage()]);
        }
    }
} else {
    echo json_encode(["error" => "Invalid request method."]);
}
?>
