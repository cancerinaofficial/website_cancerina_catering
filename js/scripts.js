/**
 * scripts.js - Optimized & Modular System for Cancerina Catering
 */

// 1. Fungsi Universal Loader (Hanya satu fungsi untuk semua)
async function loadSection(id, filePath) {
    const container = document.getElementById(id);
    if (!container) return;

    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`Gagal memuat ${filePath}`);
        const content = await response.text();
        
        container.innerHTML = content;

        // Logika khusus setelah konten dimuat
        if (id === 'navbar-placeholder') {
            applySavedThemeToToggle(); // Sinkronisasi tema saat Navbar dimuat
            initThemeToggle(); // Inisialisasi toggle setelah Navbar dimuat
          }

        if (id === 'menu-preview-placeholder')  {
          startAutoSlider();
        }

        // PENTING : Refresh AOS setiap kali konten baru dimuat agar animasi tetap berfungsi
        if (typeof AOS !== 'undefined') {
          AOS.refresh();
          AOS.refreshHard();
        }

    } catch (error) {
        console.error('Error loading section:', error);
        container.innerHTML = `<div class="text-center py-10 text-error font-bold">Gagal memuat ${filePath}</div>`;
    }
}

// 2. Eksekusi Saat DOM Siap
document.addEventListener('DOMContentLoaded', () => {
    // Jalankan AOS pertama kali
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }

    // Muat semua bagian secara berurutan
    // Jalur diperbarui ke subfolder 'navigasi'
    loadSection('navbar-placeholder', 'navigasi/navbar.html');
    loadSection('menu-preview-placeholder', 'navigasi/menu-preview.html');

    // Section lainnya tetap di root karena tidak ada folder khusus untuk mereka
    loadSection('hero-placeholder', 'hero.html');
    loadSection('trust-container', 'trust.html');
    loadSection('about-container', 'about.html');
    loadSection('menu-container', 'menu.html');
    loadSection('contact-container', 'contact.html');

    // Support tombol Enter di input chat (jika chat window diaktifkan)
    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
});

// Jalankan fungsi ini saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Cek apakah URL mengandung #order-form
    if (window.location.hash === '#order-form') {
        const targetForm = document.getElementById('order-form');
        
        if (targetForm) {
            // 1. Munculkan form
            targetForm.classList.remove('hidden');
            
            // 2. Beri jeda kecil untuk efek animasi fade-in
            setTimeout(() => {
                targetForm.classList.add('opacity-100');
                
                // 3. Gulir layar ke form secara halus
                targetForm.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }, 100);
        }
    }
});

// Fungsi untuk memanggil komponen HTML (Footer)
function loadFooter() {
    const footerPlace = document.getElementById('footer-placeholder');
    if (footerPlace) {
        fetch('navigasi/footer.html')
            .then(response => response.text())
            .then(data => {
                footerPlace.innerHTML = data;
            })
            .catch(error => console.error('Gagal memuat footer:', error));
    }
}

// Jalankan fungsi saat halaman selesai dimuat
document.addEventListener('DOMContentLoaded', loadFooter);

// Fungsi Pengiriman WhatsApp (Untuk Form ini)
function sendToWhatsapp() {
    const nama = document.getElementById('wa-name').value;
    const kategori = document.getElementById('wa-category').value;
    const detail = document.getElementById('wa-detail').value;

    if (!nama || !detail) {
        Swal.fire({
            icon: 'warning',
            title: 'Data Belum Lengkap',
            text: 'Mohon isi Nama dan Detail Pesanan ya kak!',
            confirmButtonColor: '#166534'
        });
        return;
    }

    const noWA = "6282334232196";
    const pesan = `Halo Cancerina Catering! 🥗\n\n*Formulir Pesanan*\nNama: ${nama}\nKategori: ${kategori}\nDetail/Alamat: ${detail}`;
    
    const url = `https://api.whatsapp.com/send?phone=${noWA}&text=${encodeURIComponent(pesan)}`;
    window.open(url, '_blank');
}

// 2. Fungsi Inisialisasi Dark Mode (Dipanggil setelah Navbar load)
function initThemeToggle() {
    // Pastikan variabel ini didefinisikan dengan 'const'
    const toggleBtn = document.querySelector('#theme-toggle'); 
    
    if (!toggleBtn) {
      console.warn("Theme toggle not found yet, retrying...");
      return; // Keluar jika tombol tidak ditemukan
    }

    // Ambil tema dari storage
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Sinkronisasi status toggle jika tombolnya adalah input
    if (toggleBtn.type === 'checkbox') {
        toggleBtn.checked = currentTheme === 'dark';
    }

    //  Hapus listener lama (biar tidak double) dan pasang yang baru
    toggleBtn.replaceWith(toggleBtn.cloneNode(true));
    const newToggleBtn = document.querySelector('#theme-toggle');

    newToggleBtn.addEventListener('click', () => {
        const html = document.documentElement;
        const isDark = html.classList.contains('dark');
        const newTheme = isDark ? 'light' : 'dark';

        html.setAttribute('data-theme', newTheme);
        html.classList.toggle('dark');
        localStorage.setItem('theme', newTheme);
    });
}

function syncThemeWithToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    if (!toggleBtn) return;

    // Ambil status awal
    const savedTheme = localStorage.getItem('theme') || 'light';
    
    // APLIKASIKAN KE HTML (Penting untuk kartu menu)
    if (savedTheme === 'dark') {
        html.classList.add('dark');
        html.setAttribute('data-theme', 'dark');
        toggleBtn.checked = true;
    } else {
        html.classList.remove('dark');
        html.setAttribute('data-theme', 'light');
        toggleBtn.checked = false;
    }

    toggleBtn.onchange = () => {
        if (toggleBtn.checked) {
            html.classList.add('dark');
            html.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            html.classList.remove('dark');
            html.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    };
}

function applySavedThemeToToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    if (!toggleBtn) return;

    // 1. Ambil tema dari localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';

    // 2. Terapkan status ke elemen HTML (untuk warna background)
    html.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
        html.classList.add('dark');
        toggleBtn.checked = true; // Ini yang menggeser slider toggle ke posisi ON (dark)
    } else {
        html.classList.remove('dark');
        toggleBtn.checked = false; // Ini yang menggeser slider toggle ke posisi OFF (light)
    }

    // 3. Listener untuk perubahan manual oleh user
    toggleBtn.onchange = () => {
        if (toggleBtn.checked) {
            html.setAttribute('data-theme', 'dark');
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            html.setAttribute('data-theme', 'light');
            html.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    };
}

// 3. Kontrol Navigasi Horizontal Menu
function scrollMenu(direction) {
    const container = document.getElementById('menu-container');
    if (!container) return;
    
    const scrollAmount = 350;
    container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
    });
}

// 4. Fungsi Slider Otomatis
function startAutoSlider() {
    const slider = document.getElementById('auto-slider');
    if (!slider) return;

    let isHovered = false;

    // Deteksi jika kursor ada di atas slider
    slider.addEventListener('mouseenter', () => isHovered = true);
    slider.addEventListener('mouseleave', () => isHovered = false);

    setInterval(() => {
        if (!isHovered) {
            const itemWidth = 320 + 32; // Lebar kartu (w-80 = 320px) + Gap (space-x-8 = 32px)
            
            // Jika sudah di ujung kanan, balik ke awal
            if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 10) {
                slider.scrollTo({ left: 0, behavior: 'smooth' });
            } else {
                // Geser ke item berikutnya
                slider.scrollBy({ left: itemWidth, behavior: 'smooth' });
            }
        }
    }, 3000); // Durasi ganti slide (3 detik)
}

// 5. Update Jam Operasional
function updateLiveEverything() {
    const now = new Date();
    
    // 1. Logika Jam Digital
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const clockElement = document.getElementById('digital-clock');
    if (clockElement) {
        // Efek titik dua (:) berkedip bisa ditambahkan di sini jika mau
        clockElement.innerText = `${hours}:${minutes}:${seconds}`;
    }

    // 2. Logika Status Operasional (Sinkron dengan jam)
    const statusDot = document.getElementById('status-dot');
    const statusPulse = document.getElementById('status-pulse');
    const statusText = document.getElementById('status-text');
    const timeRemainingText = document.getElementById('time-remaining-text');

    if (!statusDot) return;

    const day = now.getDay(); 
    const currentTime = now.getHours() * 60 + now.getMinutes();

    let isOpen = false;
    let message = "";

    // Aturan Jadwal Cancerina
    if (day >= 1 && day <= 5) { // Senin - Jumat
        isOpen = (currentTime >= 7 * 60 && currentTime < 17 * 60);
        message = isOpen ? "Cancerina Catering Siap Melayani" : "Cancerina Catering Buka Kembali Besok Pukul 07:00 WIB";
    } else if (day === 6) { // Sabtu
        isOpen = (currentTime >= 7 * 60 && currentTime < 14 * 60);
        message = isOpen ? "Cancerina Catering Siap Melayani" : "Minggu: Khusus Event & Large Order";
    } else { // Minggu
        isOpen = false;
        message = "Hari Ini: Event / Large Order Only";
    }

    // Update Visual Status
    if (isOpen) {
        // Tampilan HIJAU saat Buka
        statusDot.className = "relative inline-flex rounded-full h-3 w-3 bg-green-500";
        statusPulse.className = "animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75";
        statusText.innerText = "OPEN NOW";
    } else {
        // Tampilan MERAH saat Tutup
        statusDot.className = "relative inline-flex rounded-full h-3 w-3 bg-red-500";
        statusPulse.className = "animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75";
        statusText.innerText = "CLOSE NOW";
    }
    
    if (timeRemainingText) timeRemainingText.innerText = message;
}

// Jalankan setiap 1 detik (1000ms) agar jam digital berdetik
setInterval(updateLiveEverything, 1000);
updateLiveEverything(); // Inisialisasi awal

// 6. Daftar Produk
const daftarProduk = [
    { 
        nama: "Nasi Kotak Premium", 
        harga: 22000, 
        kategori: ["Nasi Box", "Acara / Event"],
        img: "/img/menu-makanan/nasi-kotak-premium.jpeg" 
    },
    { 
        nama: "Kids Bento Box", 
        harga: 28000, 
        kategori: ["Nasi Box"],
        img: "/img/menu-makanan/kids-bento-box.jpeg" 
    },
    { 
        nama: "Ayam Lodho Kampung", 
        harga: 250000, 
        kategori: ["Tradisional", "Acara / Event"],
        img: "/img/menu-makanan/ayam-lodho-kampung.jpeg" 
    },
    { 
        nama: "Tumpeng Mini", 
        harga: 50000, 
        kategori: ["Tradisional", "Acara / Event"],
        img: "/img/menu-makanan/tumpeng-mini-syukuran.jpeg" 
    },
    { 
        nama: "Snack Box", 
        harga: 15000, 
        kategori: ["Snack Box"],
        img: "/img/menu-makanan/snack-box-elegant.jpeg" 
    },
    { 
        nama: "Healthy Clean Eating", 
        harga: 40000, 
        kategori: ["Sehat"],
        img: "/img/menu-makanan/healthy-clean-eating.jpeg" 
    },
];

//  Fungsi urutkan sesuai abjad (A-Z)
daftarProduk.sort((a, b) => {
  if (a.kategori < b.kategori) return -1;
  if (a.kategori > b.kategori) return 1;
  return a.nama.localeCompare(b.nama);
});

// 7. Fungsi Hitung Harga (Simulasi Harga)
// Fungsi menambah baris menu baru
function addRow() {
    const container = document.getElementById('calculator-rows');
    const emptyState = document.getElementById('empty-state');

    // Sembunyikan pesan kosong jika ada
    if (emptyState) {
      emptyState.style.display = 'none';
    }

    // Buat baris baru
    const newRow = document.createElement('div');
    newRow.className = "calc-row grid grid-cols-12 gap-3 items-center animate-fade-in";
    newRow.innerHTML = `
        <div class="col-span-6 relative">
            <button onclick="toggleDropdown(this)" class="w-full flex items-center gap-2 p-2 bg-white dark:bg-zinc-700 rounded-xl text-[10px] font-bold outline-none border border-zinc-200 dark:border-white/10 dropdown-trigger">
                <img src="https://via.placeholder.com/30" class="w-6 h-6 rounded-lg object-cover selected-img opacity-0">
                <span class="selected-text text-left truncate">-- Pilih Menu --</span>
                <input type="hidden" class="menu-select" value="0">
            </button>
            
            <div class="absolute z-50 w-full mt-2 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-white/10 rounded-2xl shadow-xl hidden custom-dropdown-list overflow-hidden">
                <div class="p-2 border-b border-zinc-100 dark:border-white/5 bg-zinc-50 dark:bg-zinc-900/30">
                    <input type="text" 
                          placeholder="Cari menu..." 
                          class="w-full p-2 text-[10px] bg-white dark:bg-zinc-700 rounded-lg outline-none border border-zinc-200 dark:border-white/10 dropdown-search"
                          onkeyup="filterMenu(this)">
                </div>

                <div class="max-h-60 overflow-y-auto menu-items-container">
                    ${(() => {
                        const semuaKategori = [...new Set(daftarProduk.flatMap(p => p.kategori))].sort();
                        return semuaKategori.map(kat => {
                            const produkPerKategori = daftarProduk.filter(p => p.kategori.includes(kat));
                            return `
                                <div class="category-group">
                                    <div class="category-header bg-zinc-50 dark:bg-zinc-900/50 px-3 py-2 text-[9px] font-black uppercase tracking-widest text-leaf-dark dark:text-zinc-500 border-y border-zinc-100 dark:border-white/5">
                                        ${kat}
                                    </div>
                                    ${produkPerKategori.map(p => `
                                        <div onclick="selectProduct(this, ${p.harga}, '${p.nama}', '${p.img}')" 
                                            class="menu-item flex items-center gap-3 p-3 hover:bg-zinc-100 dark:hover:bg-zinc-700 cursor-pointer transition-all"
                                            data-name="${p.nama.toLowerCase()}">
                                            <img src="${p.img}" class="w-8 h-8 rounded-lg object-cover shadow-sm" onerror="this.src='https://via.placeholder.com/50'">
                                            <div class="flex flex-col overflow-hidden">
                                                <span class="text-[11px] font-bold text-zinc-800 dark:text-white truncate item-name">${p.nama}</span>
                                                <span class="text-[9px] text-zinc-500">Rp ${p.harga.toLocaleString('id-ID')}</span>
                                            </div>
                                        </div>
                                    `).join('')}
                                </div>
                            `;
                        }).join('');
                    })()}
                </div>
            </div>
        </div>
        
        <input type="number" placeholder="0" value="0" min="0" 
            onfocus="if(this.value=='0')this.value=''" 
            onblur="if(this.value=='')this.value='0'"
            class="col-span-4 p-3 rounded-xl bg-white dark:bg-zinc-700 text-center text-xs outline-none qty-input font-black" 
            oninput="updateTotal()">
            
        <button class="col-span-2 flex items-center justify-center text-zinc-400 hover:text-red-500 transition-all transform hover:scale-110" onclick="removeRow(this)">
            <i class="fas fa-trash-alt text-lg"></i>
        </button>
    `;
    container.appendChild(newRow);
}

// Fungsi menghapus baris menu
function removeRow(btn) {
    btn.closest('.calc-row').remove();

    const container = document.getElementById('calculator-rows');
    const rows = document.getElementsByClassName('calc-row');
    const emptyState = document.getElementById('empty-state');

    // Tampilkan pesan kosong jika tidak ada baris
    if (rows.length === 0 && emptyState) {
        emptyState.style.display = 'block';
    }

        updateTotal();
}

// Fungsi menghitung total harga berdasarkan pilihan menu dan jumlah
function updateTotal() {
    let total = 0;
    const rows = document.getElementsByClassName('calc-row');
    
    Array.from(rows).forEach(row => {
        const price = parseInt(row.querySelector('.menu-select').value);
        const qty = parseInt(row.querySelector('.qty-input').value) || 0;
        total += price * qty;
    });

    document.getElementById('grand-total').innerText = `Rp ${total.toLocaleString('id-ID')}`;
}

// 8. Fungsi Dropdown Menu Pilihan Produk
function toggleDropdown(btn) {
    // Ambil dropdown yang sesuai dengan tombol yang diklik
    const currentDropdown = btn.nextElementSibling;

    // Jika dropdown tidak ditemukan, keluar dari fungsi
    if (!currentDropdown) return;

    // Tutup semua dropdown lain yang mungkin sedang terbuka
    document.querySelectorAll('.custom-dropdown-list').forEach(list => {
        if (list !== currentDropdown) {
          list.classList.add('hidden');
        }
    });

    // Buka/Tutup dropdown yang sesuai dengan tombol yang diklik
    currentDropdown.classList.toggle('hidden');

    // Auto-focus ke kolom Search
    if (!currentDropdown.classList.contains('hidden')) {
        const searchInput = currentDropdown.querySelector('.dropdown-search');
        if (searchInput) {
            searchInput.value = ""; // Reset pencarian
            filterMenu(searchInput); // Reset tampilan
            setTimeout(() => searchInput.focus(), 100); // Fokus setelah dropdown muncul
        }
    } 
}

function selectProduct(item, price, name, img) {
    // 1. Cari kontainer utama (calc-row) agar tidak salah sasaran
    const row = item.closest('.calc-row');
    if (!row) return;

    // 2. Cari tombol trigger (tempat menampilkan teks & gambar terpilih)
    const trigger = row.querySelector('.dropdown-trigger');
    const hiddenInput = row.querySelector('.menu-select');

    if (trigger && hiddenInput) {
        // Update teks menu yang dipilih
        const textSpan = trigger.querySelector('.selected-text');
        if (textSpan) textSpan.innerText = name;

        // Update nilai harga yang disembunyikan
        hiddenInput.value = price;

        // Update gambar menu
        const imgEl = trigger.querySelector('.selected-img');
        if (imgEl) {
            imgEl.src = img;
            imgEl.classList.remove('opacity-0');
        }
    }

    // 3. Tutup dropdown secara otomatis setelah memilih
    const dropdown = row.querySelector('.custom-dropdown-list');
    if (dropdown) dropdown.classList.add('hidden');

    // 4. Hitung ulang total harga
    updateTotal();
}

// Tutup dropdown jika klik di luar area
window.onclick = function(event) {
    if (!event.target.closest('.dropdown-trigger')) {
        document.querySelectorAll('.custom-dropdown-list').forEach(list => {
            list.classList.add('hidden');
        });
    }
};

// 9. Fungsi Filter Menu di Dropdown
function filterMenu(input) {
    const filter = input.value.toLowerCase();
    const dropdown = input.closest('.custom-dropdown-list');
    const items = dropdown.getElementsByClassName('menu-item');
    const groups = dropdown.getElementsByClassName('category-group');

    // Filter setiap item menu
    Array.from(items).forEach(item => {
        const name = item.getAttribute('data-name') || "";
        item.style.display = name.includes(filter) ? "flex" : "none";
    });

    // Sembunyikan Header Kategori jika semua item di dalamnya tersembunyi
    Array.from(groups).forEach(group => {
        const hasVisibleItem = Array.from(group.querySelectorAll('.menu-item'))
                                    .some(item => item.style.display === "flex");
        group.style.display = hasVisibleItem ? "block" : "none";
    });
}

// Jalankan fungsi ini saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    // Cek apakah URL mengandung #order-form
    if (window.location.hash === '#order-form') {
        const targetForm = document.getElementById('order-form');
        
        if (targetForm) {
            // 1. Munculkan form
            targetForm.classList.remove('hidden');
            
            // 2. Beri jeda kecil untuk efek animasi fade-in
            setTimeout(() => {
                targetForm.classList.add('opacity-100');
                
                // 3. Gulir layar ke form secara halus
                targetForm.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }, 100);
        }
    }
});


// 10. Fungsi Aktifkan WhatsApp Form
function activateOrderForm() {

    Swal.fire({
        title: 'Membuka Form...',
        timer: 800,
        showConfirmButton: false,
        icon: 'success',
        toast: true, // Opsional: Ubah toast agar tidak menghalangi tampilan
        position: 'top-end', // Opsional: Posisi toast di pojok kanan atas
    });

    const targetForm = document.getElementById('order-form');
    
    if (targetForm) {
        // 1. Jika form masih tersembunyi, munculkan
        targetForm.classList.remove('hidden');
        
        // 2. Beri jeda 10ms agar browser sadar elemen sudah tidak hidden, lalu jalankan animasi fade-in
        setTimeout(() => {
            targetForm.classList.remove('opacity-0');
            targetForm.classList.add('opacity-100');
            
            // 3. Scroll halus ke lokasi form
            targetForm.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }, 10);
    }
}

// 11. Fungsi Pengiriman WhatsApp (Untuk Form ini)
function sendToWhatsapp() {
    const nama = document.getElementById('wa-name').value;
    const kategori = document.getElementById('wa-category').value;
    const detail = document.getElementById('wa-detail').value;

    if (!nama || !detail) {
        Swal.fire({
            icon: 'warning',
            title: 'Data Belum Lengkap',
            text: 'Mohon isi Nama dan Detail Pesanan ya kak!',
            confirmButtonColor: '#166534'
        });
        return;
    }

    const noWA = "6282334232196";
    const pesan = `Halo Cancerina Catering! 🥗\n\n*Formulir Pesanan*\nNama: ${nama}\nKategori: ${kategori}\nDetail/Alamat: ${detail}`;
    
    const url = `https://api.whatsapp.com/send?phone=${noWA}&text=${encodeURIComponent(pesan)}`;
    window.open(url, '_blank');
}

// 12. Fungsi Kirim Simulasi Pesanan via WhatsApp
function sendSimulasiWA() {
    const rows = document.getElementsByClassName('calc-row');
    let detailPesanan = "";
    
    // Ambil teks dari span .selected-text dan harga dari input hidden .menu-select untuk setiap baris yang memiliki jumlah > 0
    Array.from(rows).forEach(row => {
        const menuName = row.querySelector('.selected-text').innerText;
        const price = parseInt(row.querySelector('.menu-select').value) || 0;
        const qty = parseInt(row.querySelector('.qty-input').value) || 0;
            
        // Cek jika menu dipilih (bukan default) dan jumlah lebih dari 0
        if (price > 0 && qty > 0) {
            detailPesanan += `- ${menuName} x ${qty} porsi\n`;
        }
    });

    // Alert jika pesanan kosong
    if (!detailPesanan) {
        Swal.fire({
            title: 'Oops!',
            text: 'Silakan pilih menu dan tentukan jumlah pesanan terlebih dahulu sebelum mengirim pesanan.',
            icon: 'warning',
            iconColor: '#facc15',

            buttonStyling: true,
            confirmButtonColor: '#166534',
            confirmButtonText: 'Siap, Mengerti',
            background: document.documentElement.classList.contains('dark') ? '#18181b' : '#ffffff',
            color: document.documentElement.classList.contains('dark') ? '#ffffff' : '#18181b',
            customClass: {
              popup: 'rounded-[2rem]',
              confirmButton: 'swal-button-fix',
            }
        });
        return;
    }

    const totalHarga = document.getElementById('grand-total').innerText;
    const noWA = "6282334232196"; 
    const teksPesan = `Halo Cancerina Catering! 🥗\n\nSaya ingin memesan:\n${detailPesanan}\nTotal Harga: ${totalHarga}`;

    // ALERT BERHASIL (ESTETIK)
    Swal.fire({
        title: 'Pesanan Disusun!',
        text: 'Rincian pesanan sudah siap. Kamu akan diarahkan ke WhatsApp sekarang.',
        icon: 'success',
        iconColor: '#22c55e',
        showConfirmButton: false, // Sembunyikan tombol agar terlihat otomatis
        timer: 2000, // Alert muncul selama 2 detik
        timerProgressBar: true, // Ada bar loading di bawah alert
        background: document.documentElement.classList.contains('dark') ? '#18181b' : '#ffffff',
        color: document.documentElement.classList.contains('dark') ? '#ffffff' : '#18181b',
        borderRadius: '2rem',
        didOpen: () => {
            Swal.showLoading(); // Tampilkan loading spinner di dalam alert
        }
    }).then(() => {
        // Buka WhatsApp setelah alert selesai (2 detik)
        const link = document.createElement('a');
        link.href = `https://api.whatsapp.com/send?phone=${noWA}&text=${encodeURIComponent(teksPesan)}`;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

// 13. Fungsi Kirim Pertanyaan via WhatsApp (Form Pertanyaan di Contact)
function sendInquiryToWhatsapp() {
    const nama = document.getElementById('wa-name').value;
    const topik = document.getElementById('wa-topic').value;
    const detail = document.getElementById('wa-question').value;

    if (!nama || !detail) {
        Swal.fire({
            icon: 'warning',
            title: 'Oops!',
            text: 'Mohon isi Nama dan Pertanyaan terlebih dahulu, terima kasih.',
            confirmButtonColor: '#166534'
        });
        return;
    }

    const noWA = "6282334232196";
    
    // Pesan ini didesain agar dibaca oleh sistem Auto-Reply WA Business
    // Gunakan tanda pagar atau kode unik di awal agar bot mudah mengenali
    const pesan = `Halo Cancerina Catering! 🥗\n\n` +
                  `ID_PELANGGAN: ${nama}\n` +
                  `KODE_TANYA: #${topik}\n\n` + // Bot akan membaca #INFO_PRICELIST dsb.
                  `Pertanyaan: ${detail}`;
    
    const url = `https://api.whatsapp.com/send?phone=${noWA}&text=${encodeURIComponent(pesan)}`;
    window.open(url, '_blank');
}

// 14. Fungsi Chat Window AI dengan Gemini API
const GEMINI_API_KEY = "AIzaSyAwiyQOnXLbjqnPtsGPla1NvTHmIC0SR-g";

function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    chatWindow.classList.toggle('hidden');
}

// async function sendMessage() {
//     const input = document.getElementById('chat-input');
//     const content = document.getElementById('chat-content');
//     const userText = input.value.trim();

//     if (!userText) return;

//     // Tampilkan pesan user di layar
//     content.innerHTML += `<div class="bg-cancerina-green text-white p-3 rounded-2xl self-end max-w-[80%] text-[12px] shadow-sm">${userText}</div>`;
//     input.value = "";
//     content.scrollTop = content.scrollHeight;

//     // Tampilkan indikator mengetik
//     const typingId = "typing-" + Date.now();
//     content.innerHTML += `<div id="${typingId}" class="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-2xl self-start text-[12px] italic opacity-50">Cancerina AI sedang berpikir...</div>`;

//     // Instruksi sistem untuk AI (bisa disesuaikan agar lebih relevan dengan bisnis catering)
//     const systemPrompt = "Kamu adalah asisten virtual untuk Cancerina Catering, bisnis katering sehat dan praktis. Jawab pertanyaan pelanggan dengan ramah, informatif, dan sesuai dengan layanan yang kami tawarkan. Jika tidak tahu jawabannya, katakan dengan sopan bahwa kamu akan membantu mencari tahu.";

//     try {
//         const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({
//                 contents: [{
//                     parts: [{ 
//                         text: `${systemPrompt}\n\nPertanyaan Pelanggan: ${userText}` 
//                     }]
//                 }]
//             })
//         });

//         const data = await response.json();

//         // Cek error dari API
//         if (data.error) {
//             throw new Error(data.error.message || "Error dari Gemini API");
//         }

//         const aiResponse = data.candidates[0].content.parts[0].text;

//         // Hapus indikator mengetik dan tampilkan balasan AI
//         const typingElement = document.getElementById(typingId);
//         if (typingElement) typingElement.remove();
        
//         content.innerHTML += `<div class="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-2xl self-start max-w-[80%] text-[12px] border border-zinc-200 dark:border-white/5">${aiResponse}</div>`;
//         content.scrollTop = content.scrollHeight;

//     } catch (error) {
//         console.error("AI Error:", error);
//         const typingElement = document.getElementById(typingId);
//         if (typingElement) typingElement.remove();
//         content.innerHTML += `<div class="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-2xl self-start max-w-[80%] text-[12px] border border-zinc-200 dark:border-white/5 mb-2 dark:white text-zinc-800">${airesponse}</div>`;
//     }
// }

//  15. Fungsi Chat Window AI dengan OpenAI API (Alternatif jika ingin coba OpenAI)
async function sendMessage() {
    const input = document.getElementById('chat-input');
    const content = document.getElementById('chat-content');
    const userText = input.value.trim();

    // Pastikan API KEY sudah diisi di bagian atas file
    if (!userText || !GEMINI_API_KEY) return;

    // 1. Tampilkan pesan user
    content.innerHTML += `<div class="bg-cancerina-green text-white p-3 rounded-2xl self-end max-w-[80%] text-[12px] mb-2 shadow-sm">${userText}</div>`;
    input.value = "";
    content.scrollTop = content.scrollHeight;

    // 2. Indikator mengetik
    const typingId = "typing-" + Date.now();
    content.innerHTML += `<div id="${typingId}" class="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-2xl self-start text-[11px] italic opacity-50 mb-2">Cancerina AI sedang mengetik...</div>`;
    content.scrollTop = content.scrollHeight;

    try {
        // PERBAIKAN URL: Format paling stabil untuk v1beta
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;
        
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{
                    parts: [{ 
                        text: `Kamu adalah Cancerina AI, asisten ramah Cancerina Catering di Tulungagung. Panggil Kak/Bunda. Jawab singkat dan sopan. Pertanyaan: ${userText}` 
                    }]
                }]
            })
        });

        const data = await response.json();
        
        // Hapus indikator mengetik
        const typingElement = document.getElementById(typingId);
        if (typingElement) typingElement.remove();

        // 3. PENGECEKAN ERROR DARI GOOGLE
        if (data.error) {
            console.error("Google API Error:", data.error.message);
            throw new Error(data.error.message);
        }

        // 4. AMBIL JAWABAN (Struktur JSON yang benar)
        if (data.candidates && data.candidates[0].content && data.candidates[0].content.parts) {
            const aiResponse = data.candidates[0].content.parts[0].text;
            content.innerHTML += `<div class="bg-zinc-100 dark:bg-zinc-800 p-3 rounded-2xl self-start max-w-[80%] text-[12px] border border-zinc-200 dark:border-white/5 mb-2 dark:text-white text-zinc-800">${aiResponse}</div>`;
        } else {
            throw new Error("Respon tidak memiliki konten (mungkin karena filter keamanan)");
        }

        content.scrollTop = content.scrollHeight;

    } catch (error) {
        console.error("Detail Error:", error);
        const typingElement = document.getElementById(typingId);
        if (typingElement) typingElement.remove();
        
        // Pesan error ke user yang lebih informatif
        content.innerHTML += `<div class="bg-red-50 text-red-600 p-3 rounded-2xl self-start text-[11px] mb-2 border border-red-100">
            <strong>Error:</strong> ${error.message}<br>
            <span class="text-[10px] opacity-70 italic text-zinc-500">Pastikan API Key benar dan internet lancar.</span>
        </div>`;
    }
}

// Support tombol Enter
document.getElementById('chat-input')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});

window.addEventListener('click', function(e) {
    // Jika yang diklik bukan tombol dropdown dan bukan bagian dalam dropdown
    if (!e.target.closest('.dropdown-trigger') && !e.target.closest('.custom-dropdown-list')) {
        document.querySelectorAll('.custom-dropdown-list').forEach(list => {
            list.classList.add('hidden');
        });
    }
});
