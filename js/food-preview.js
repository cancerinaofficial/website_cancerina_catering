function initFoodSwiper() {
    if (typeof Swiper === 'undefined') return;

    // Bersihkan semua instance lama agar tidak 'nyangkut' di memori
    if (window.foodSwiper && typeof window.foodSwiper.destroy === 'function') {
        window.foodSwiper.destroy(true, true);
    }

    const isMobile = window.innerWidth < 768;
    const mobileElem = document.querySelector('.foodBestSellerSwiperMobile');
    const desktopElem = document.querySelector('.foodBestSellerSwiper');

    if (isMobile && mobileElem) {
        // KONFIGURASI KHUSUS MOBILE
        window.foodSwiper = new Swiper('.foodBestSellerSwiperMobile', {
            slidesPerView: 1.2,
            spaceBetween: 16,
            centeredSlides: true,
            loop: true,
            observer: true,
            observeParents: true,
            autoplay: { delay: 3000 },
            pagination: { el: '.swiper-pagination', clickable: true, dynamicBullets: true }
        });
    } else if (!isMobile && desktopElem) {
        // KONFIGURASI KHUSUS DESKTOP (KEMBALI KE 4 KOLOM)
        window.foodSwiper = new Swiper('.foodBestSellerSwiper', {
            slidesPerView: 4,      // WAJIB: Agar di desktop tetap 4 kolom
            spaceBetween: 25,     // Jarak antar kartu desktop
            loop: true,
            observer: true,
            observeParents: true,
            autoplay: { delay: 3000 },
            pagination: { el: '.swiper-pagination', clickable: true },
            scrollbar: { el: '.swiper-scrollbar', draggable: true },
            // Breakpoint untuk tablet (opsional)
            breakpoints: {
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 }
            }
        });
    }
}

// Inisialisasi otomatis saat script dimuat (opsional)
document.addEventListener('DOMContentLoaded', () => {
    // Beri jeda sedikit agar DOM benar-benar siap
    setTimeout(initFoodSwiper, 500);
});