// 1. Data Produk
const produk = [
    {
      nama: "Kaos Polos",
      harga: 50000,
      deskripsi: "Kaos katun nyaman dipakai.",
      gambar: "/img/1.png",
      kategori: "pakaian"
    },
    {
      nama: "Sepatu Sneakers",
      harga: 250000,
      deskripsi: "Sepatu gaya kekinian.",
      gambar: "/img/6.png",
      kategori: "sepatu"
    },
    {
      nama: "Topi Trucker",
      harga: 75000,
      deskripsi: "Topi keren untuk gaya santai.",
      gambar: "/img/7.png",
      kategori: "aksesoris"
    },
    {
      nama: "Jaket Hoodie",
      harga: 150000,
      deskripsi: "Hoodie hangat dan modis.",
      gambar: "/img/5.png",
      kategori: "pakaian"
    }
  ];
  
  // 2. Fungsi untuk menampilkan produk
  function tampilkanProduk(kategori) {
    const container = document.getElementById("produk-container");
    container.innerHTML = ""; // bersihkan dulu
  
    const hasilFilter = kategori === "semua"
      ? produk
      : produk.filter(item => item.kategori === kategori);
  
    hasilFilter.forEach(item => {
      const elemen = document.createElement("div");
      elemen.className = "produk";
      elemen.innerHTML = `
        <img src="${item.gambar}" alt="${item.nama}">
        <h3>${item.nama}</h3>
        <p>${item.deskripsi}</p>
        <p class="harga">Rp ${item.harga.toLocaleString()}</p>
      `;
      container.appendChild(elemen);
    });
  }
  
  // Tampilkan semua produk saat halaman pertama kali dibuka
  window.onload = () => tampilkanProduk("semua");