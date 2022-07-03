<?php

require_once('./db_connection.php');

header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: GET, POST');

header("Access-Control-Allow-Headers: X-Requested-With");

$req = $bdd->prepare("SELECT * FROM reviews");
$req->execute();
$reviews = $req->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($reviews);
