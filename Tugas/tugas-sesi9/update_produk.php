<?php
include 'koneksi.php';
$sql = "UPDATE products SET name=?, price=?, description=?, stock=?, kategori=? WHERE id=?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sdsisi", $_POST['name'], $_POST['price'], $_POST['description'], $_POST['stock'], $_POST['kategori'], $_POST['id']);
$stmt->execute();

header("Location: index.php");
?>
