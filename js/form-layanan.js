document.addEventListener('alpine:init', () => {
    Alpine.data('formlayanan', () => ({
        nama: '',
        layanan: '', // Sesuai dengan "disabled selected" di HTML
        catatan: '',

        // Notifikasi "*wajib"
        touchedNama: false,
        touchedLayanan: false,

        // Notifikasi Error
        showError: false,

        // Notifikasi Getar
        isShaking: false,

        // Loading Halaman WA WEB
        isLoading: false,

        sendWhatsApp() {
            // 1. Reset State
            this.showError = false;
            this.touchedNama = true;
            this.touchedLayanan = true;
            
            // 2. Cek Validasi
            if(this.nama.length < 4 || !this.layanan || this.layanan === 'layanan') {
                // alert('Nama lengkap jangan dikosongkan ya!');
                this.showError = true;
                this.isShaking = true;

                // Durasi Getar
                setTimeout(() => {
                    this.isShaking = false;
                }, 500);

                return;
            }

            // 3. Loading SweetAlert2
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

                willClose: () => {
                    clearInterval(timerInterval);
                },

                customClass: {
                    popup: 'rounded-[2.5rem] p-8 dark:bg-slate-900 dark:text-white',
                    title: 'font-black text-slate-800 dark:text-white uppercase tracking-tight',
                    timerProgressBar: 'bg-green-500'
                }

            }).then((result) => {
                // 4. Setelah timer habis, arahkan ke WhatsApp
                if (result.dismiss === Swal.DismissReason.timer) {
                    const adminNumber = '6282334232196';
                    const text = `Halo Cancerina Catering!%0A%0A` +
                                `*Nama:* ${encodeURIComponent(this.nama)}%0A` +
                                `*Layanan:* ${encodeURIComponent(this.layanan)}%0A` +
                                `*Catatan:* ${encodeURIComponent(this.catatan || '-')}`;

                    window.open(`https://wa.me/${adminNumber}?text=${text}`, '_blank');
                }
            });
        }
    }));
});