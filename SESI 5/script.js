// ================================
// 1. VARIABEL
// ================================
var nama = "Budi";        // Bisa di-redeclare dan reassign
let umur = 25;            // Bisa diubah tapi tidak bisa di-declare ulang dalam blok yang sama
const negara = "Indonesia"; // Tidak bisa diubah

console.log(nama, umur, negara);

// ================================
// 2. TIPE DATA
// ================================
let teks = "Halo";
let angka = 10;
let boolean = true;
let array = [1, 2, 3];
let object = { nama: "Budi", umur: 25 };
let kosong = null;
let tidakDidefinisikan;

console.log(typeof teks, typeof angka, typeof array);

// ================================
// 3. OPERATOR
// ================================
let a = 5;
let b = 2;

console.log("Penjumlahan:", a + b);
console.log("Perbandingan:", a > b);
console.log("Logika AND:", true && false);

// ================================
// 4. KONDISI (IF / ELSE IF / ELSE)
// ================================
let nilai = 80;

if (nilai >= 90) {
  console.log("A");
} else if (nilai >= 75) {
  console.log("B");
} else {
  console.log("C");
}

// ================================
// 5. SWITCH
// ================================
let hari = "Senin";

switch (hari) {
  case "Senin":
    console.log("Hari kerja");
    break;
  case "Minggu":
    console.log("Hari libur");
    break;
  default:
    console.log("Hari biasa");
}

// ================================
// 6. PERULANGAN (FOR, WHILE, DO-WHILE)
// ================================
for (let i = 1; i <= 3; i++) {
  console.log("For ke-", i);
}

let x = 1;
while (x <= 3) {
  console.log("While ke-", x);
  x++;
}

let y = 1;
do {
  console.log("Do-While ke-", y);
  y++;
} while (y <= 3);

// ================================
// 7. FUNGSI (Function)
// ================================

// Fungsi biasa
function sapa(nama) {
  return `Halo, ${nama}`;
}
console.log(sapa("Dhea"));

// Fungsi panah
const tambah = (x, y) => x + y;
console.log(tambah(3, 4));

// ================================
// 8. ARRAY & METHOD
// ================================
const buah = ["Apel", "Mangga", "Jeruk"];
buah.push("Durian");         // Menambah
buah.splice(1, 1);           // Hapus 1 item mulai dari index 1
buah.forEach((item, i) => {
  console.log(`Buah ke-${i + 1}: ${item}`);
});

// ================================
// 9. OBJECT
// ================================
const orang = {
  nama: "Andi",
  umur: 30,
  sapa: function () {
    return `Halo, saya ${this.nama}`;
  },
};

console.log(orang.nama);
console.log(orang.sapa());

// ================================
// 10. DOM (Document Object Model)
// ================================
// Jalankan ini di file HTML

// document.getElementById("judul").innerText = "Halo Dunia!";

// ================================
// 11. EVENT
// ================================
// HTML: <button onclick="klik()">Klik Saya</button>

function klik() {
  alert("Tombol diklik!");
}

// ================================
// 12. CLASS
// ================================
class Hewan {
  constructor(nama) {
    this.nama = nama;
  }

  suara() {
    return `${this.nama} bersuara`;
  }
}

const kucing = new Hewan("Kucing");
console.log(kucing.suara());

// ================================
// 13. PROMISE
// ================================
const cekData = new Promise((resolve, reject) => {
  let sukses = true;
  if (sukses) {
    resolve("Data berhasil diambil");
  } else {
    reject("Gagal mengambil data");
  }
});

cekData
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

// ================================
// 14. ASYNC / AWAIT
// ================================
function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("User ditemukan!");
    }, 1000);
  });
}

async function tampilUser() {
  const hasil = await getUser();
  console.log(hasil);
}

tampilUser();
