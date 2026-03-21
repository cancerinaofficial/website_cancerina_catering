document.addEventListener('alpine:init', () => {
    Alpine.data('formlayanan', () => ({
        nama: '',
        layanan: '', 
        catatan: '',

        // UI State untuk Custom Dropdown
        isLayananOpen: false,
        opsiLayanan: [
            "Konsultasi Katering",
            "Kerjasama Kemitraan",
            "Katering Jum'at Berkah",
            "Lainnya"
        ],

        // Notifikasi "*wajib"
        touchedNama: false,
        touchedLayanan: false,

        // Notifikasi UI
        showError: false,
        isShaking: false,
        isLoading: false,

        // Fungsi khusus untuk pilih layanan
        pilihLayanan(opsi) {
            this.layanan = opsi;
            this.isLayananOpen = false; // Tutup otomatis setelah pilih
            this.touchedLayanan = true;
            this.showError = false;
        },

        sendWhatsApp() {
            // 1. Reset State
            this.showError = false;
            this.touchedNama = true;
            this.touchedLayanan = true;
            
            // 2. Cek Validasi (Layanan tidak boleh kosong)
            if(this.nama.length < 4 || !this.layanan) {
                this.showError = true;
                this.isShaking = true;

                setTimeout(() => {
                    this.isShaking = false;
                }, 500);

                return;
            }

            // 3. SweetAlert2 (Tetap sesuai desain kamu)
            let timerInterval;
            Swal.fire({
                title: "Menghubungkan ke WhatsApp",
                html: "Mohon tunggu sebentar... <b></b>",
                timer: 1000,
                timerProgressBar: true,
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                    const loader = Swal.getPopup().querySelector('.swal2-loader');
                    if (loader) {
                        loader.style.borderTopColor = '#16a34a';
                        loader.style.borderBottomColor = '#16a34a';
                    }
                    const timer = Swal.getPopup().querySelector("b");
                    timerInterval = setInterval(() => {
                        timer.textContent = `${Math.ceil(Swal.getTimerLeft() / 1000)}s`;
                    }, 100);
                },
                willClose: () => { clearInterval(timerInterval); },
                customClass: {
                    popup: 'rounded-[2.5rem] p-8 dark:bg-slate-900 dark:text-white shadow-2xl',
                    title: 'font-black text-slate-800 dark:text-white uppercase tracking-tight',
                    timerProgressBar: 'bg-green-500'
                }
            }).then((result) => {
                if (result.dismiss === Swal.DismissReason.timer) {
                    const adminNumber = '6285188647503';
                    const text = `*FORM LAYANAN CANCERINA*%0A` +
                                `--------------------------%0A` +
                                `*Nama:* ${encodeURIComponent(this.nama)}%0A` +
                                `*Layanan:* ${encodeURIComponent(this.layanan)}%0A` +
                                `*Catatan:* ${encodeURIComponent(this.catatan || '-')}%0A` +
                                `--------------------------`;

                    window.open(`https://wa.me/${adminNumber}?text=${text}`, '_blank');
                }
            });
        }
    }));
});