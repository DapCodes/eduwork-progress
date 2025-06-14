<?php include 'koneksi.php'; ?>
<h2>Daftar Produk</h2>
<a href="tambah_produk.php">+ Tambah Produk</a><br><br>

<?php
$result = $conn->query("SELECT * FROM products");
while($p = $result->fetch_assoc()) {
    echo "<div style='border:1px solid #ccc; margin:10px; padding:10px'>";
    echo "<strong>{$p['name']}</strong><br>";
    echo "Harga: Rp " . number_format($p['price']) . "<br>";
    echo "Stok: {$p['stock']}<br>";
    echo "Kategori: {$p['kategori']}<br>";
    echo "<a href='edit_produk.php?id={$p['id']}'>Edit</a> | ";
    echo "<a href='hapus_produk.php?id={$p['id']}' onclick='return confirm(\"Hapus produk ini?\")'>Hapus</a> | ";
    echo "<a href='tambah_keranjang.php?id={$p['id']}'>+ Keranjang</a>";
    echo "</div>";
}
?>
