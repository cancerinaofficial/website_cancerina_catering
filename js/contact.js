document.addEventListener('alpine:init', () => {
    Alpine.data('contactForm', () => ({
        // State Form
        nama: '',
        email: '',
        telepon: '',
        layanan: '',
        pesan: '',
        
        // State UI
        isLayananOpen: false,
        touched: {
            nama: false,
            email: false,
            telepon: false,
            layanan: false,
            pesan: false
        },
        isSending: false,
        
        // Opsi Dropdown
        opsiLayanan: [
            "Konsultasi Katering",
            "Kerjasama Kemitraan",
            "Katering Jum'at Berkah",
            "Lainnya"
        ],

        // Fungsi Pilih Layanan
        pilihLayanan(opsi) {
            this.layanan = opsi;
            this.isLayananOpen = false;
            this.touched.layanan = true;
        },

        // Validasi Sederhana
        isValid() {
            return this.nama && this.email && this.telepon && this.layanan && this.pesan;
        },

        // Fungsi Kirim (Bisa ke WhatsApp atau Email)
        async kirimPesan() {
            if (!this.isValid()) {
                // Tandai semua field sebagai touched agar error muncul
                Object.keys(this.touched).forEach(key => this.touched[key] = true);
                return;
            }

            this.isSending = true;

            // Susun Pesan WhatsApp
            const nomorWA = "6285188647503";
            let teks = `*HALO CANCERINA CATERING*\n`;
            teks += `--------------------------\n`;
            teks += `Nama    : ${this.nama}\n`;
            teks += `Email   : ${this.email}\n`;
            teks += `Layanan : ${this.layanan}\n`;
            teks += `Pesan   : ${this.pesan}\n`;
            teks += `--------------------------`;

            // Simulasi loading sebentar
            setTimeout(() => {
                window.open(`https://wa.me/${nomorWA}?text=${encodeURIComponent(teks)}`, '_blank');
                this.isSending = false;
                // Opsional: Reset form
                this.resetForm();
            }, 1000);
        },

        resetForm() {
            this.nama = this.email = this.telepon = this.layanan = this.pesan = '';
            Object.keys(this.touched).forEach(key => this.touched[key] = false);
        }
    }));
});