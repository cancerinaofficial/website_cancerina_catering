function initAOS() {
    AOS.init({
        duration: 700,      // Sedikit lebih cepat agar terasa lebih responsif
        once: false,         // PENTING: Animasi hanya jalan sekali saat di-scroll down
        mirror: false,      // Matikan mirror agar browser tidak re-calculating saat scroll up
        offset: 100,        // Mulai animasi 100px sebelum elemen terlihat (lebih smooth)
        disable: 'mobile'   // Opsional: Jika di HP masih terasa berat
    });
}

// Jalankan pertama kali saat halaman siap
document.addEventListener('DOMContentLoaded', function() {
    initAOS();
});

// KHUSUS: Refresh AOS setelah konten Footer/Modal berhasil di-fetch
// Karena x-html (fetch) merubah struktur DOM setelah halaman load
document.addEventListener('alpine:initialized', () => {
    setTimeout(() => {
        AOS.refresh();
    }, 600); // Beri jeda sedikit agar HTML fetch benar-benar terpasang
});