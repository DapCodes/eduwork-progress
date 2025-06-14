// // Cara membuat object pada JS

// -----------------------------------------
// // Object Literal
// let siswa1 = {
//     nama: 'Daffa',
//     energi: 10,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }

// let siswa2 = {
//     nama: 'Rio',
//     energi: 7,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }
// }



// -----------------------------------------
// // Function Declaration
// function Mahasiswa(nama, energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan!`);
//     }

//     return mahasiswa;
// }


// let daffa = Mahasiswa('Daffa Ramadhan', 5);
// let rio = Mahasiswa('Rio Oktora', 6);



// -----------------------------------------
// // Constructor Function
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan! energi kamu ${this.energi}`);
//     } 
//     this.main = function(main) {
//         this.energi -= main;
//         if (this.energi < 5 && this.energi >= 1) {
//             console.log(`Halo ${this.nama}, Kamu kelelahan. makan terlebih dahulu. energi kamu ${this.energi}`);
//         } else if (this.energi < 1) {
//             console.log(`Halo ${this.nama}, Kamu mati. energi kamu ${this.energi}`);
//         } else {
//             console.log(`Halo ${this.nama}, selamat main! energi kamu ${this.energi}`);
//         }

//     }
// }

// let dhea = new Mahasiswa('Dhea Febrianti', 9)



// -----------------------------------------
// Object Create
// const methodMahasiswa = {

//     makan: function (porsi) {
//         this.energi += porsi;
//         console.log(`Halo ${this.nama}, selamat makan! energi kamu ${this.energi}`);
//     },

//     main: function (main) {
//         this.energi -= main;
//         if (this.energi < 5 && this.energi >= 1) {
//             console.log(`Halo ${this.nama}, Kamu kelelahan. makan terlebih dahulu. energi kamu ${this.energi}`);
//         } else if (this.energi < 1) {
//             console.log(`Halo ${this.nama}, Kamu pingsan. energi kamu ${this.energi}`);
//         } else {
//             console.log(`Halo ${this.nama}, selamat main! energi kamu ${this.energi}`);
//         }
//     },

//     tidur: function (jam) {
//         this.energi += jam * 2;
//         console.log(`Halo ${this.nama}, selamat pagi! energi kamu ${this.energi}`);
//     }
// }

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }


// let daffa = Mahasiswa('Daffa Ramadhan', 5);
// let rio = Mahasiswa('Rio Oktora', 6);



// ------------------------------------------
// Prorotype
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi; 
// }

// Mahasiswa.prototype.makan = function makan(porsi) {
//     this.energi += porsi;
//     console.log(`Halo ${this.nama}, selamat makan! energi kamu ${this.energi}`);
// }

// Mahasiswa.prototype.tidur = function tidur(jam) {
//     this.energi += jam * 2;
//     console.log(`Halo ${this.nama}, selamat pagi! energi kamu ${this.energi}`);
// }

// Mahasiswa.prototype.main = function main(jam) {
//     this.energi -= jam;
//     console.log(`Halo ${this.nama}, selamat pagi! energi kamu ${this.energi}`);
// }

// let daffa = new Mahasiswa('Daffa', 20);



// ------------------------------------------
// Class

class Siswa {
    constructor(nama, energi) {
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, selamat makan! energi kamu ${this.energi}`);
    }

    tidur(jam) {
        this.energi += jam * 2;
        console.log(`Halo ${this.nama}, selamat pagi! energi kamu ${this.energi}`);
    }

    main(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, selamat pagi! energi kamu ${this.energi}`);
    }
}

const daffa = new Siswa('Daffa', 5);    

class ArrayHandler {
    constructor(array) {
        this.array = array;
    }

    // Mengurutkan dari kecil ke besar
    terkecil() {
        const beforeSort = this.array.slice(); // Salin array sebelum diurutkan
        this.array.sort((a, b) => a - b); // Sort ascending (numerik)
        console.log(`Sebelum: ${beforeSort}`);
        console.log(`Sesudah (Ascending): ${this.array}`);
    }

    // Mengurutkan dari besar ke kecil
    terbesar() {
        const beforeSort = this.array.slice(); // Salin array sebelum diurutkan
        this.array.sort((a, b) => b - a); // Sort descending (numerik)
        console.log(`Sebelum: ${beforeSort}`);
        console.log(`Sesudah (Descending): ${this.array}`);
    }
}

// Contoh penggunaan
const angka = new ArrayHandler([3, 5, 7, 2, 5, 6, 2, 6, 9, 10, 3, 7, 4, 1, 8]);

