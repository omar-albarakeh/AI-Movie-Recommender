<?php
header("Access-Control-Allow-Origin: http://localhost");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

$apiKey = "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";

$requestPayload = file_get_contents("php://input");
$data = json_decode($requestPayload, true);

if (!$data || !isset($data["messages"])) {
    echo json_encode(["error" => "Invalid request. 'messages' is required."]);
    exit;
}


$requestPayload = file_get_contents("php://input");
$data = json_decode($requestPayload, true);

if (!isset($data["messages"]) || !is_array($data["messages"])) {
    echo json_encode(["error" => "Invalid request. 'messages' array is required."]);
    exit;
}

$postData = json_encode([
    "model" => "gpt-3.5-turbo",
    "messages" => $data["messages"],
    "max_tokens" => 550
]);

$ch = curl_init("https://api.openai.com/v1/chat/completions");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "Content-Type: application/json",
    "Authorization: Bearer " . $apiKey
]);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);

$response = curl_exec($ch);
if ($response === false) {
    echo json_encode(["error" => "Request failed: " . curl_error($ch)]);
    curl_close($ch);
    exit;
}

curl_close($ch);
echo $response;
?>
