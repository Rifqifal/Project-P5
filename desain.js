document.querySelector('.cover button').addEventListener('click', function() {
    document.getElementById('ayat').scrollIntoView({ behavior: 'smooth' });
});

window.addEventListener('scroll', function() {
    var coverHeight = document.querySelector('.cover').offsetHeight;
    var navbar = document.getElementById('navbar');

    if (window.scrollY > coverHeight) {
        navbar.classList.add('show-navbar');
    } else {
        navbar.classList.remove('show-navbar');
    }
});


// Tentukan tanggal pernikahan
let weddingDate = new Date("2024-12-23T00:00:00").getTime();

// Fungsi untuk menghitung waktu mundur
let countdownFunction = setInterval(function() {
    // Dapatkan tanggal saat ini
    let now = new Date().getTime();


    // Hitung selisih antara waktu sekarang dan tanggal pernikahan
    let distance = weddingDate - now;

    // Hitung waktu untuk hari, jam, menit, dan detik
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Tampilkan hasil ke dalam kotak masing-masing
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

    // Jika countdown selesai, tampilkan pesan
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("days").textContent = 0;
        document.getElementById("hours").textContent = 0;
        document.getElementById("minutes").textContent = 0;
        document.getElementById("seconds").textContent = 0;
        document.querySelector("h1").textContent = "Selamat Menikah!";
    }
}, 1000);

