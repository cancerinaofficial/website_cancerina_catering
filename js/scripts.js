/* ==========================================================================
   1. ANIMASI SCROLL (Reveal Effect)
   ========================================================================== */
const observerOptions = { threshold: 0.1 };

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

// Fungsi untuk mengaktifkan observer pada elemen baru
function observeCards() {
    document.querySelectorAll('.card').forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";
        card.style.transition = "all 0.6s ease-out";
        observer.observe(card);
    });
}
observeCards();

/* ==========================================================================
   2. FUNGSI UTAMA (Menunggu HTML Selesai Dimuat)
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {

    const loadExternalContent = (id, file, logMsg) => {
        const container = document.getElementById(id);
        if (container) {
            fetch(file)
                .then(response => response.text())
                .then(data => {
                    container.innerHTML = data;
                    console.log(logMsg);
                    
                    // AKTIFKAN SEMUA: Kembang api dan animasi scroll untuk konten baru
                    initAllFireworkButtons(); 
                    observeCards(); 
                })
                .catch(error => console.error("Error:", error));
        }
    };

    // Memanggil fungsi konten
    loadExternalContent('menu-container', 'menu.html', "Menu Berhasil Dimuat!");
    loadExternalContent('about-container', 'about.html', "Tentang Kami Dimuat!");
    loadExternalContent('contact-container', 'contact.html', "Kontak Berhasil Dimuat!");

    /* --- B. LOGIKA TEMA (Dark & Light Mode) --- */
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    htmlElement.setAttribute('data-theme', currentTheme);
    if (themeToggle && currentTheme === 'dark') themeToggle.checked = true;

    if (themeToggle) {
        themeToggle.addEventListener('change', function() {
            const newTheme = this.checked ? 'dark' : 'light';
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // Inisialisasi awal untuk tombol yang sudah ada (Hero)
    initAllFireworkButtons();

}); // Penutup DOMContentLoaded

/* ==========================================================================
   3. SISTEM KEMBANG API (GLOBAL)
   ========================================================================== */

function initAllFireworkButtons() {
    const buttons = document.querySelectorAll('.firework-button');
    buttons.forEach(button => {
        // Hapus listener lama dulu supaya tidak double ledakan
        button.removeEventListener('mouseenter', handleFireworkEvent);
        button.addEventListener('mouseenter', handleFireworkEvent);
    });
}

function handleFireworkEvent(e) {
    const button = e.currentTarget; 
    const rect = button.getBoundingClientRect();
    
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Di sini kita atur jumlah partikel (40 agar meriah)
    for (let i = 0; i < 40; i++) { 
        createParticle(centerX, centerY);
    }
}

function createParticle(x, y) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    document.body.appendChild(particle);

    const colors = ['#ff0000', '#ffd700', '#ff69b4', '#00ff00', '#ffffff', '#4ecdc4'];
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    
    particle.style.position = 'fixed';
    particle.style.left = '0';
    particle.style.top = '0';
    particle.style.zIndex = '10000';

    // Daya ledak (550 agar besar keluar border)
    const destinationX = (Math.random() - 0.5) * 550;
    const destinationY = (Math.random() - 0.5) * 550;

    const animation = particle.animate([
        { transform: `translate(${x}px, ${y}px) scale(1)`, opacity: 1 },
        { transform: `translate(${x + destinationX}px, ${y + destinationY}px) scale(0)`, opacity: 0 }
    ], {
        duration: 1000 + Math.random() * 800,
        easing: 'cubic-bezier(0, .9, .57, 1)'
    });

    animation.onfinish = () => particle.remove();
}

function scrollMenu(direction) {
    const grid = document.querySelector('.menu-grid');
    // Geser sejauh 325px (lebar kartu 300px + gap 25px) agar pas di kartu berikutnya
    const scrollAmount = 325; 
    
    if (direction === 'left') {
        grid.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        grid.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
}

// Fungsi untuk mengecek apakah tombol navigasi perlu muncul atau tidak
function updateScrollButtons() {
    const container = document.getElementById('menu-container');
    const prevBtn = document.querySelector('.scroll-btn.prev');
    const nextBtn = document.querySelector('.scroll-btn.next');

    if (!container || !prevBtn || !nextBtn) return;

    // Jika lebar konten (scrollWidth) lebih kecil atau sama dengan lebar box (clientWidth)
    // Berarti semua card sudah terlihat, maka sembunyikan tombol
    if (container.scrollWidth <= container.clientWidth) {
        prevBtn.classList.add('hidden');
        nextBtn.classList.add('hidden');
    } else {
        prevBtn.classList.remove('hidden');
        nextBtn.classList.remove('hidden');
    }
}

// Jalankan fungsi saat halaman selesai dimuat
window.addEventListener('load', updateScrollButtons);

// Jalankan fungsi saat layar di-resize (misal dari Desktop ke Mobile)
window.addEventListener('resize', updateScrollButtons);

// PENTING: Jika kamu menggunakan fetch untuk menu.html, 
// panggil updateScrollButtons() SETELAH data menu berhasil dimasukkan ke innerHTML.

function updateScrollButtons() {
    const container = document.getElementById('menu-container');
    const prevBtn = document.querySelector('.scroll-btn.prev');
    const nextBtn = document.querySelector('.scroll-btn.next');

    if (!container || !prevBtn || !nextBtn) return;

    // Cek apakah konten meluap (lebih lebar dari layarnya)
    const isScrollable = container.scrollWidth > container.clientWidth;

    if (isScrollable) {
        // Jika meluap: Munculkan tombol & ratakan kiri
        prevBtn.classList.remove('hidden');
        nextBtn.classList.remove('hidden');
        container.classList.add('has-scroll');
    } else {
        // Jika tidak meluap: Sembunyikan tombol & ratakan tengah
        prevBtn.classList.add('hidden');
        nextBtn.classList.add('hidden');
        container.classList.remove('has-scroll');
    }
}

function updateScrollButtons() {
    const container = document.getElementById('menu-container');
    const prevBtn = document.querySelector('.scroll-btn.prev');
    const nextBtn = document.querySelector('.scroll-btn.next');

    if (!container || !prevBtn || !nextBtn) return;

    // Memberi sedikit jeda agar browser selesai menghitung layouting
    setTimeout(() => {
        const isScrollable = container.scrollWidth > container.clientWidth;

        if (isScrollable) {
            prevBtn.classList.remove('hidden');
            nextBtn.classList.remove('hidden');
            container.classList.add('has-scroll');
        } else {
            prevBtn.classList.add('hidden');
            nextBtn.classList.add('hidden');
            container.classList.remove('has-scroll');
        }
    }, 50); // Jeda 50ms sudah cukup untuk render engine
}

// Pastikan dipanggil di sini juga
window.addEventListener('resize', updateScrollButtons);

fetch('menu.html')
    .then(response => response.text())
    .then(data => {
        const container = document.getElementById('menu-container');
        container.innerHTML = data;
        
        // WAJIB: Panggil di sini setelah data benar-benar masuk ke DOM
        updateScrollButtons();
    })
    .catch(err => console.error("Gagal memuat menu:", err));



const isScrollable = container.scrollWidth > (container.clientWidth + 5);