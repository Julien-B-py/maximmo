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

$req = $bdd->prepare("SELECT products.title, 
products.ref, 
products.price, 
products.surface,
pictures.link as image,
localizations.postal_code,
localizations.city,
product_types.id as type
FROM products 
INNER JOIN pictures
ON products.id = pictures.product_id
INNER JOIN localizations
ON products.id = localizations.product_id
INNER JOIN product_types
ON products.product_type_id = product_types.id
");
$req->execute();
$data = $req->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($data);
