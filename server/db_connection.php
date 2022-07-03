<?php

require_once('vendor/autoload.php');

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$servername = $_ENV['MYSQL_ADDON_HOST'];
$db = $_ENV['MYSQL_ADDON_DB'];
$username = $_ENV['MYSQL_ADDON_USER'];
$password = $_ENV['MYSQL_ADDON_PASSWORD'];

try {
    $bdd = new PDO("mysql:host=$servername;dbname=$db", $username, $password);
    // set the PDO error mode to exception
    $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
