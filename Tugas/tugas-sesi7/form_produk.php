<!DOCTYPE html>
<html>
<head>
    <title>Tambah Produk</title>
</head>
<body>
    <h2>Form Tambah Produk</h2>
    <form action="proses_produk.php" method="POST">
        <label>Nama Produk:</label><br>
        <input type="text" name="nama"><br><br>

        <label>Harga Produk:</label><br>
        <input type="number" name="harga"><br><br>

        <label>Deskripsi:</label><br>
        <textarea name="deskripsi"></textarea><br><br>

        <input type="submit" value="Simpan">
    </form>
</body>
</html>
