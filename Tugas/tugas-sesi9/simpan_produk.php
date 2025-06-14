<?php
include 'koneksi.php';
$name = $_POST['name'];
$price = $_POST['price'];
$desc = $_POST['description'];
$stock = $_POST['stock'];
$kategori = $_POST['kategori'];

$sql = "INSERT INTO products (name, price, description, stock, kategori) VALUES (?, ?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sdsis", $name, $price, $desc, $stock, $kategori);
$stmt->execute();

header("Location: index.php");
?>
