<?php
// Koneksi ke database
$host = "localhost";
$user = "root";
$pass = "";
$db   = "ecommerce_db";

$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

// Ambil data dari form
$nama      = $_POST['nama'];
$harga     = $_POST['harga'];
$deskripsi = $_POST['deskripsi'];

// Validasi: Cek apakah field kosong
if (empty($nama) || empty($harga) || empty($deskripsi)) {
    echo "Semua field wajib diisi!";
} else {
    // Simpan ke database
    $sql = "INSERT INTO products (name, price, description, stock) VALUES (?, ?, ?, 0)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sds", $nama, $harga, $deskripsi);

    if ($stmt->execute()) {
        echo "Produk berhasil ditambahkan.";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>
