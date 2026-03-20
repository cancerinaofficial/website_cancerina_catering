document.addEventListener('alpine:init', () => {
    Alpine.store('navigasi', {
        halaman: localStorage.getItem('active_page') || 'home',
        currentHash: window.location.hash || '',

        async pindah(namaHalaman, hashTarget = '') {
            const isGantiHalaman = this.halaman !== namaHalaman;

            // Jika ganti halaman, paksa scroll ke atas secara INSTAN
            if (isGantiHalaman) {
                window.scrollTo({ top: 0, behavior: 'instant' });
            }

            this.halaman = namaHalaman;
            this.currentHash = hashTarget;
            localStorage.setItem('active_page', namaHalaman);
            
            // Gunakan $nextTick (jika tersedia) atau requestAnimationFrame 
            // untuk memastikan Alpine sudah 'sadar' ada perubahan halaman
            requestAnimationFrame(() => {
                if (hashTarget) {
                    window.location.hash = hashTarget;
                    // Beri delay sedikit lebih lama untuk scroll ke ID agar elemennya sempat di-inject
                    setTimeout(() => {
                        const el = document.querySelector(hashTarget);
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                } else {
                    history.pushState("", document.title, window.location.pathname);
                }
            });

            // Re-init visual jika kembali ke home
            if (namaHalaman === 'home' && isGantiHalaman) {
                setTimeout(() => {
                    if (typeof initFoodSwiper === 'function') initFoodSwiper();
                    if (typeof initAOS === 'function') initAOS();
                }, 300); // Delay sedikit lebih lama agar konten fetch benar-benar 'nempel'
            }
        }
    });
});

// FUNGSI SCROLLSPY
const initScrollSpy = () => {
    const options = {
        root: null,
        rootMargin: '-20% 0px -70% 0px', // Memicu ketika elemen ada di area atas-tengah layar
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                // Update store Alpine secara langsung
                if (window.Alpine) {
                    // Jika di paling atas (Hero), kosongkan hash
                    if (id === 'hero') {
                        Alpine.store('navigasi').currentHash = '';
                    } else {
                        Alpine.store('navigasi').currentHash = '#' + id;
                    }
                }
            }
        });
    }, options);

    // Daftar ID yang ingin dipantau
    const sections = ['hero', 'trust', 'contact'];
    sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
    });
};

// Jalankan observer setelah konten dipastikan termuat
window.addEventListener('load', initScrollSpy);
// Jalankan ulang jika ada perpindahan halaman di SPA kamu
window.addEventListener('scrollspy:refresh', initScrollSpy);