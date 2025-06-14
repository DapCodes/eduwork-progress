// Inisialisasi array untuk menyimpan tugas
let todos = [];

// Ambil elemen DOM
const form = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
const list = document.getElementById("todoList");

// Event listener untuk form submit
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah halaman reload

    // Ambil data dari input
    const task = input.value;

    // Tambahkan tugas baru di posisi paling atas array
    todos.unshift(task);

    // Perbarui tampilan list
    renderList();

    // Kosongkan input
    input.value = "";
});

// Fungsi untuk render daftar tugas ke DOM
function renderList() {
    // Kosongkan tampilan list sebelumnya
    list.innerHTML = "";

    // Iterasi setiap tugas dalam array
    todos.forEach((todo, index) => {
        // Buat elemen <li> untuk tugas
        const li = document.createElement("li");
        li.textContent = todo;

        // Buat tombol hapus
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Hapus";
        deleteButton.onclick = function () {
            // Hapus tugas dari array
            todos.splice(index, 1);

            // Render ulang daftar
            renderList();
        };

        // Tambahkan tombol hapus ke <li>
        li.appendChild(deleteButton);

        // Tambahkan <li> ke <ul>
        list.appendChild(li);
    });
}
