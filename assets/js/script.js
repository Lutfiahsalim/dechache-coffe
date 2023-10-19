// document.addEventListener("DOMContentLoaded", function () {
//     const menuToggle = document.querySelector('.menu-toggle input');
//     const nav = document.querySelector('nav ul');

//     menuToggle.addEventListener('click', function() {
//         nav.classList.toggle('slide');
//     });

//     // Tambahkan event listener untuk setiap elemen menu
//     const menuItems = document.querySelectorAll('nav ul li a');
//     for (let i = 0; i < menuItems.length; i++) {
//         menuItems[i].addEventListener('click', function() {
//             // Tutup menu mobile setelah elemen <a> diklik
//             nav.classList.remove('slide');
//         });
//     }
// });

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector('.menu-toggle input');
    const nav = document.querySelector('nav ul');
    let isMenuOpen = false;
    
    menuToggle.addEventListener('click', function() {
        toggleMenu();
    });

    // Fungsi untuk menutup menu
    function closeMenu() {
        nav.classList.remove('slide');
        isMenuOpen = false;
        // Mengganti ikon tombol toggle ketika menu ditutup
        const spans = document.querySelectorAll('.menu-toggle input');
        spans.forEach(span => span.classList.remove('active'));
    }

    // Tambahkan event listener pada scroll window
    window.addEventListener('scroll', function() {
        // Periksa posisi scroll
        if (window.scrollY > 40 && isMenuOpen) {
            // Jika layar di-scroll ke atas dan menu terbuka, tutup menu
            closeMenu();
        }
    });

    // Tambahkan event listener untuk setiap elemen menu
    const menuItems = document.querySelectorAll('nav ul li a');
    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('click', function() {
            if (isMenuOpen) {
                // Tutup menu mobile setelah elemen <a> diklik
                closeMenu();
            }
        });
    }

    // Fungsi untuk toggle menu
    function toggleMenu() {
        nav.classList.toggle('slide');
        isMenuOpen = !isMenuOpen;
        // Mengganti ikon tombol toggle setelah mengkliknya
        const spans = document.querySelectorAll('.menu-toggle input');
        spans.forEach(span => span.classList.toggle('active'));
    }
});


// SCROLLED NAV
// Dapatkan elemen navbar Anda
const navbar = document.querySelector('nav');

// Fungsi untuk mengubah kelas saat di-scroll
function toggleNavbarBackground() {
    if (window.scrollY > 10) { // Anda dapat menyesuaikan offset scroll yang diperlukan di sini
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Tambahkan event listener untuk mengaktifkan fungsi di atas saat di-scroll
window.addEventListener('scroll', toggleNavbarBackground);
