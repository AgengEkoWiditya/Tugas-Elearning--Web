// Simpan data pengguna sementara di localStorage (simulasi database)
function registerUser(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name && email && password) {
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userPassword', password);

        alert('Registrasi berhasil! Silakan login.');
        window.location.href = 'login.html';
    } else {
        alert('Semua field harus diisi!');
    }
}

// Login pengguna
function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const storedEmail = localStorage.getItem('userEmail');
    const storedPassword = localStorage.getItem('userPassword');

    if (email === storedEmail && password === storedPassword) {
        alert('Login berhasil!');
        window.location.href = 'main.html';
    } else {
        alert('Email atau password salah!');
    }
}

// Tampilkan pesan selamat datang di halaman utama
function displayWelcomeMessage() {
    const userName = localStorage.getItem('userName');
    if (userName) {
        document.getElementById('welcomeMessage').innerText = `Selamat Datang, ${userName}!`;
    }
}

// Logout pengguna
function logoutUser() {
    localStorage.clear();
    alert('Anda telah logout.');
    window.location.href = 'index.html';
}
