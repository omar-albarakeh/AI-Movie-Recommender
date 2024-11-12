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







?>