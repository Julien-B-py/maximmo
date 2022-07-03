<?php

header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");

$dsn = 'mysql:dbname=maximmo_1;host=localhost';
$user = 'root';
$password = '';


try {
    $bdd = new PDO($dsn, $user, $password);
} catch (PDOException $e) {
    echo 'Échec lors de la connexion : ' . $e->getMessage();
}

$req = $bdd->prepare("SELECT * FROM reviews");
$req->execute();
$reviews = $req->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($reviews);
