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
product_types.id as type,
group_concat(area_types.type) AS area_types,
group_concat(area_types_products.surface) AS area_surfaces
FROM products 
LEFT JOIN pictures
ON products.id = pictures.product_id
LEFT JOIN localizations
ON products.id = localizations.product_id
LEFT JOIN product_types
ON products.product_type_id = product_types.id
LEFT JOIN area_types_products
ON products.id = area_types_products.product_id
LEFT JOIN area_types
ON area_types.id = area_types_products.area_type_id
GROUP BY products.id
");
$req->execute();
$productsData = $req->fetchAll(PDO::FETCH_ASSOC);

foreach ($productsData as &$product) {
    $areaTypes = explode(",", $product["area_types"]);
    $areaSurfaces = explode(",", $product["area_surfaces"]);
    for ($i = 0; $i < count($areaTypes); $i++) {
        $areaType = $areaTypes[$i];
        $product["areas"][$areaType] = $areaSurfaces[$i];
    }
    unset($product["area_types"]);
    unset($product["area_surfaces"]);
}

echo json_encode($productsData);
