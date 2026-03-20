// js/jam-operasional.js

window.jamOperasional = function() {
    return {
        currentTime: '',
        isOpen: false,
        isWeekday: false,
        isSaturday: false,
        isSunday: false,
        statusMessage: '',

        updateStatus() {
            // Jalankan sekali saat init
            this.tick();
            // Lalu jalankan setiap detik
            setInterval(() => {
                this.tick();
            }, 1000);
        },

        tick() {
            const now = new Date();
            // Set ke WIB (GMT+7)
            const wib = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
            
            const jam = wib.getHours();
            const menit = wib.getMinutes();
            const hari = wib.getDay(); // 0: Minggu, 1-5: Sen-Jum, 6: Sabtu

            // Format Jam Digital
            this.currentTime = wib.toLocaleTimeString('en-GB', { 
                hour: '2-digit', 
                minute: '2-digit', 
                second: '2-digit' 
            });

            // Status Hari
            this.isWeekday = hari >= 1 && hari <= 5;
            this.isSaturday = hari === 6;
            this.isSunday = hari === 0;

            // Logika Buka/Tutup
            if (this.isWeekday && jam >= 8 && jam < 17) {
                this.isOpen = true;
                this.statusMessage = 'Cancerina Catering siap melayani';
            } else if (this.isSaturday && jam >= 8 && jam < 15) {
                this.isOpen = true;
                this.statusMessage = 'Cancerina Catering siap melayani';
            } else if (this.isSunday) {
                this.isOpen = false;
                this.isSunday = true; // Memastikan highlight minggu aktif
                this.statusMessage = 'Hari Minggu Libur (Hanya melayani pesanan khusus)';
            } else {
                this.isOpen = false;
                this.statusMessage = 'Cancerina Catering buka kembali esok hari pukul 08:00 WIB';
            }
        }
    }
}