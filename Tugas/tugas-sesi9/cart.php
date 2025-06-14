<?php
session_start();
include 'koneksi.php';

echo "<h2>Keranjang Belanja</h2>";
$total = 0;

if (!empty($_SESSION['cart'])) {
    foreach ($_SESSION['cart'] as $id => $qty) {
        $p = $conn->query("SELECT * FROM products WHERE id=$id")->fetch_assoc();
        $subtotal = $p['price'] * $qty;
        $total += $subtotal;
        echo "{$p['name']} x $qty = Rp " . number_format($subtotal) . "<br>";
    }
    echo "<br><strong>Total: Rp " . number_format($total) . "</strong>";
} else {
    echo "Keranjang kosong.";
}
?>
