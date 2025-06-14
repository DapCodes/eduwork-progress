<?php include 'koneksi.php';
$id = $_GET['id'];
$p = $conn->query("SELECT * FROM products WHERE id=$id")->fetch_assoc();
?>

<form action="update_produk.php" method="POST">
    <input type="hidden" name="id" value="<?= $p['id'] ?>">
    <input type="text" name="name" value="<?= $p['name'] ?>"><br>
    <input type="number" name="price" value="<?= $p['price'] ?>"><br>
    <textarea name="description"><?= $p['description'] ?></textarea><br>
    <input type="number" name="stock" value="<?= $p['stock'] ?>"><br>
    <input type="text" name="kategori" value="<?= $p['kategori'] ?>"><br>
    <button type="submit">Update</button>
</form>
