<?php include 'koneksi.php'; ?>

<!DOCTYPE html>
<html>
<head>
    <title>Daftar Produk</title>
    <style>
        .produk {
            border: 1px solid #ccc;
            padding: 10px;
            margin: 10px;
            width: 250px;
            float: left;
        }
    </style>
</head>
<body>
    <h2>Produk Tersedia</h2>

    <!-- Filter Kategori -->
    <form method="GET">
        <label>Pilih Kategori:</label>
        <select name="kategori" onchange="this.form.submit()">
            <option value="">Semua</option>
            <option value="elektronik">Elektronik</option>
            <option value="pakaian">Pakaian</option>
            <option value="makanan">Makanan</option>
        </select>
    </form>

    <div>
        <?php
        // Ambil parameter kategori
        $kategori = isset($_GET['kategori']) ? $_GET['kategori'] : '';

        // Query data produk
        if ($kategori != '') {
            $stmt = $conn->prepare("SELECT * FROM products WHERE kategori = ?");
            $stmt->bind_param("s", $kategori);
        } else {
            $stmt = $conn->prepare("SELECT * FROM products");
        }

        $stmt->execute();
        $result = $stmt->get_result();

        // Loop tampilkan produk
        while ($row = $result->fetch_assoc()) {
            echo "<div class='produk'>";
            echo "<h3>" . htmlspecialchars($row['name']) . "</h3>";
            echo "<p>Harga: Rp " . number_format($row['price'], 0, ',', '.') . "</p>";
            echo "<p>" . htmlspecialchars($row['description']) . "</p>";
            echo "<p><strong>Kategori: " . htmlspecialchars($row['kategori']) . "</strong></p>";
            echo "</div>";
        }

        $stmt->close();
        $conn->close();
        ?>
    </div>
</body>
</html>
