document.addEventListener('alpine:init', () => {
    Alpine.store('keranjang', {
        // 1. DATA STATE (Mengambil dari LocalStorage)
        items: JSON.parse(localStorage.getItem('cancerina_cart')) || [],
        ongkir: 0,
        biayaLayanan: 2500,
        selectedProduct: null,
        isDetailOpen: false,
        touchedMetode: false,
        isShakingModal: false,
        isProcessing: false,
        showToast: false,
        toastMsg: '',

        // Data Diri Sebelum Checkout
        step: 1,
        pelanggan: {
            nama: '',
            telepon: '',
            alamat: '',
            tanggalKirim: '',
            catatan: ''
        },

        touched: {
            nama: false,
            telepon: false,
            tanggalKirim: false,
            alamat: false
        },

        // 2. INITIALIZATION (Auto-save ke LocalStorage)
        init() {
            // Alpine.effect akan berjalan otomatis setiap kali ada perubahan pada this.items
            Alpine.effect(() => {
                localStorage.setItem('cancerina_cart', JSON.stringify(this.items));
            });
        },

        // 3. GETTERS (Computed Properties)
        get totalItem() {
            return this.items.reduce((sum, item) => sum + item.qty, 0);
        },

        get subtotal() {
            return this.items.reduce((sum, item) => sum + (item.price * item.qty), 0);
        },

        // Validasi Step 1 (Data Diri)
        get isStep1Lengkap() {
            return (this.pelanggan.nama || '').length >= 3 && 
                (this.pelanggan.telepon || '').length >= 10 && 
                (this.pelanggan.tanggalKirim || '').length > 0 && 
                (this.pelanggan.alamat || '').length >= 5;
        },

        // Fungsi untuk lanjut ke pembayaran
        lanjutKePembayaran() {
            if(this.isStep1Lengkap) {
                this.step = 2;
            } else {
                this.triggerToast("Mohon lengkapi data diri dengan benar");
            }
        },

        get total() {
            return this.items.length > 0 ? (this.subtotal + this.ongkir + this.biayaLayanan) : 0;
        },

        isShaking: false, // Untuk efek getar pada tombol

        validasiDanLanjut() {
            if (this.isStep1Lengkap) {
                this.step = 2;
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                // Paksa semua pesan error muncul
                this.touched.nama = true;
                this.touched.telepon = true;
                this.touched.tanggalKirim = true;
                this.touched.alamat = true;

                // Efek getar
                this.isShaking = true;
                setTimeout(() => { this.isShaking = false; }, 500);
            }
        },

        // 4. HELPERS
        formatRupiah(number) {
            return new Intl.NumberFormat('id-ID', { 
                style: 'currency', 
                currency: 'IDR', 
                minimumFractionDigits: 0 
            }).format(number);
        },

        // 5. ACTIONS (Fungsi-fungsi manipulasi)
        addItem(produk) {
            let itemExist = this.items.find(i => i.id === produk.id);

            // Ambil minOrder dari data (asumsikan kita mengirim minOrder di objek produk)
            const minQty = produk.minOrder || 10;

            if (itemExist) {
                itemExist.qty++;
                this.triggerToast(`Jumlah ${produk.name} ditambah`);
            } else {
                this.items.push({
                    id: produk.id,
                    name: produk.name,
                    price: produk.price,
                    img: produk.img,
                    // Jika ada minOrder, langsung set qty ke angka tersebut
                    qty: minQty,
                    minOrder: minQty,
                    note: ''
                });
                
                const pesan = minQty > 1 
                    ? `${produk.name} ditambah (Min. ${minQty} box)` 
                    : `${produk.name} masuk keranjang`;
                    
                this.triggerToast(pesan);
            }
        },

        save() {
            localStorage.setItem('cancerina_cart', JSON.stringify(this.items));
        },

        tambahQty(id) {
            let item = this.items.find(i => i.id === id);
            if (item) {
                item.qty++;
                this.save(); // Sekarang ini tidak akan error lagi
            }
        },

        kurangQty(id) {
            let item = this.items.find(i => i.id === id);
            if (item) {
                const batasMinimal = item.minOrder || 1;
                if (item.qty > batasMinimal) {
                    item.qty--;
                    this.save(); 
                } else {
                    // Beri feedback kalau sudah batas minimal
                    this.triggerToast(`Minimal order ${item.name} adalah ${batasMinimal} box`);
                }
            }
        },

        removeItem(id) {
            this.items = this.items.filter(i => i.id !== id);
            this.triggerToast("Menu dihapus dari keranjang");
        },

        openDetail(produk) {
            this.selectedProduct = produk;
            this.isDetailOpen = true;
            document.body.style.overflow = 'hidden'; // Kunci scroll biar gak lari
        },

        closeDetail() {
            this.isDetailOpen = false;
            this.selectedProduct = null;
            document.body.style.overflow = 'auto'; // Balikin scroll
        },

        clearCart() {
            // Jika keranjang sudah kosong, tidak perlu munculkan alert
            if (this.items.length === 0) return;

            Swal.fire({
                title: 'Kosongkan Keranjang?',
                text: "Semua menu yang sudah kamu pilih akan dihapus.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#16a34a', // cancerina-green (green-600)
                cancelButtonColor: '#94a3b8', // slate-400
                confirmButtonText: 'Ya, Hapus Semua!',
                cancelButtonText: 'Batal',
                borderRadius: '2rem',
                customClass: {
                    popup: 'rounded-[2.5rem]',
                    confirmButton: 'rounded-xl font-bold uppercase tracking-widest text-xs py-3 px-6',
                    cancelButton: 'rounded-xl font-bold uppercase tracking-widest text-xs py-3 px-6'
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    this.items = [];
                    
                    // Notifikasi sukses menggunakan toast SweetAlert
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 2000,
                        timerProgressBar: true
                    });
                    
                    Toast.fire({
                        icon: 'success',
                        title: 'Keranjang dikosongkan'
                    });
                }
            });
        },

        triggerToast(msg) {
            this.toastMsg = msg;
            this.showToast = true;
            setTimeout(() => { this.showToast = false; }, 3000);
        },

        // Lanjut Pembayaran (Modal / Pop-up)
        isModalOpen: false,

        openModal() {
            if (this.items.length === 0) {
                this.triggerToast("Keranjang masih kosong, nih!");
                return;
            }
            // Reset state setiap kali modal dibuka agar user mulai dari awal
            this.step = 1; 
            this.touchedMetode = false;
            this.isModalOpen = true;
            document.body.style.overflow = 'hidden';
        },

        closeModal() {
            this.isModalOpen = false;
            // Delay sedikit reset step agar transisi tutup modal tidak terlihat 'lompat'
            setTimeout(() => { this.step = 1; }, 300); 
            document.body.style.overflow = 'auto';
        },

        // Fungsi navigasi antar step di dalam modal
        pindahKePembayaran() {
            // Jika di Step 1 (Data Pengiriman), cek kelengkapan data
            if (this.step === 1) {
                if (this.isStep1Lengkap) {
                    this.step = 2; // Lanjut ke Pilih Metode
                } else {
                    this.triggerShake(); // Efek getar jika data belum lengkap
                }
            } 
            // Jika di Step 2 (Pilih Metode), cek apakah sudah pilih layanan
            else if (this.step === 2) {
                if (this.metodeTerpilih) {
                    this.step = 3; // Lanjut ke Instruksi Bayar
                } else {
                    this.touchedMetode = true;
                    this.isShakingModal = true;
                    setTimeout(() => { this.isShakingModal = false; }, 500);
                }
            }
        },

        // Opsi Pembayaran
        tipePembayaran: 'lunas', // default lunas

        get jumlahBayarSekarang() {
            if (this.tipePembayaran === 'dp') {
                return this.total * 0.5; // DP 50%
            }
            return this.total;
        },

        // Format Buat Pesanan Invoice & WhatsApp

        generateInvoiceNumber() {
            const now = new Date();
            const yy = now.getFullYear().toString().slice(-2);
            const mm = (now.getMonth() + 1).toString().padStart(2, '0');
            const dd = now.getDate().toString().padStart(2, '0');
            const datePart = `${yy}${mm}${dd}`;

            // 1. Ambil data counter saat ini (Tanpa mengubahnya dulu)
            let counter = parseInt(localStorage.getItem('cancerina_inv_counter')) || 1;
            let lastDate = localStorage.getItem('cancerina_inv_last_date') || datePart;

            // 2. Jika hari sudah berganti, angka kembali ke 1
            if (lastDate !== datePart) {
                counter = 1;
            }

            // 3. Kembalikan format nomor (01, 02, dst)
            const noUrut = counter.toString().padStart(2, '0');
            return `INV-${datePart}${noUrut}`;
        },

        async checkout() {
            if (this.items.length === 0 || this.isProcessing) return;

            this.isProcessing = true;
            const nomorWA = "6285188647503"; 
            const noInvoice = this.generateInvoiceNumber();

            // --- 1. SIAPKAN DATA WAKTU ---
            const sekarang = new Date();
            const tgl = String(sekarang.getDate()).padStart(2, '0');
            const bln = String(sekarang.getMonth() + 1).padStart(2, '0');
            const thn = sekarang.getFullYear();
            const jam = String(sekarang.getHours()).padStart(2, '0');
            const min = String(sekarang.getMinutes()).padStart(2, '0');

            const formatTgl = `${tgl}-${bln}-${thn}`;
            const formatJam = `${jam}:${min}`;

            // --- 2. SUSUN PESAN WHATSAPP (Harus di atas agar variabel 'pesan' tersedia) ---
            let pesan = "```\n";
            pesan += "================================\n";
            pesan += "       CANCERINA CATERING       \n";
            pesan += "       KATERING NUSANTARA       \n";
            pesan += "================================\n";
            pesan += `ID INV        : ${noInvoice}\n`;
            pesan += `TANGGAL       : ${formatTgl}\n`;
            pesan += `WAKTU         : ${formatJam}\n`;
            pesan += "--------------------------------\n";
            pesan += "         DATA PELANGGAN         \n";
            pesan += "--------------------------------\n";
            pesan += `NAMA          : ${this.pelanggan.nama.toUpperCase().substring(0, 20)}\n`;
            pesan += `WHATSAPP      : ${this.pelanggan.telepon}\n`;
            pesan += `TGL PESANAN   : ${this.pelanggan.tanggalKirim}\n`;
            pesan += `ALAMAT        : ${this.pelanggan.alamat.substring(0, 22)}...\n`;
            pesan += "--------------------------------\n";
            pesan += "         DAFTAR PESANAN         \n";
            pesan += "--------------------------------\n";
            
            this.items.forEach((item, index) => {
                const no = (index + 1).toString().padEnd(2, ' ');
                const nama = item.name.substring(0, 20); 
                const qty = item.qty.toString().padStart(2, ' ');
                const sub = this.formatRupiah(item.price * item.qty).padStart(12, ' ');
                pesan += `${no}. ${nama}\n`;
                pesan += `    ${qty} x ${this.formatRupiah(item.price).padEnd(10, ' ')} ${sub}\n`;
                if(item.note) pesan += `    Note : ${item.note}\n`;
            });

            pesan += "--------------------------------\n";
            pesan += `SUBTOTAL      : ${this.formatRupiah(this.subtotal).padStart(15, ' ')}\n`;
            pesan += `BIAYA LAYANAN : ${this.formatRupiah(this.biayaLayanan).padStart(15, ' ')}\n`;
            pesan += "--------------------------------\n";
            pesan += `TOTAL         : ${this.formatRupiah(this.total).padStart(15, ' ')}\n`;
            pesan += `METODE        : ${this.metodeTerpilih.toUpperCase().padStart(15, ' ')}\n`;
            pesan += `TIPE BAYAR    : ${this.tipePembayaran.toUpperCase().padStart(15, ' ')}\n`;
            pesan += "--------------------------------\n";
            pesan += `DIBAYAR       : ${this.formatRupiah(this.jumlahBayarSekarang).padStart(15, ' ')}\n`;
            
            if(this.tipePembayaran === 'dp') {
                const sisa = this.total - this.jumlahBayarSekarang;
                pesan += `SISA TAGIHAN  : ${this.formatRupiah(sisa).padStart(15, ' ')}\n`;
            }

            pesan += "================================\n";
            pesan += "   Terima kasih telah memesan   \n";
            pesan += "   Mohon tunggu konfirmasi CS   \n";
            pesan += "================================\n";
            pesan += "```\n\n";
            pesan += `*HARAP KIRIMKAN BUKTI PEMBAYARAN / TRANSFER*`;

            // --- 3. SIAPKAN DATA INVOICE & COUNTER ---
            const dataInvoice = {
                no: noInvoice,
                tanggal: formatTgl,
                items: [...this.items],
                subtotal: this.subtotal,
                biayaLayanan: this.biayaLayanan,
                total: this.total,
                bayarSekarang: this.jumlahBayarSekarang,
                tipe: this.tipePembayaran,
                metode: this.metodeTerpilih,
                pelanggan: this.pelanggan
            };

            // Update Counter LocalStorage
            let currentCounter = parseInt(localStorage.getItem('cancerina_inv_counter')) || 1;
            localStorage.setItem('cancerina_inv_counter', currentCounter + 1);
            localStorage.setItem('cancerina_inv_last_date', thn.toString().slice(-2) + bln + tgl);

            // --- 4. KIRIM KE GOOGLE SHEETS ---
            const scriptURL = 'https://script.google.com/macros/s/AKfycbyjLnNAZ6EhRsWqqhATYaj3-62rIb2jpymtB9rXTJY2VScLftZkeLib8t8b6ZCN_a9q/exec';
            const dataSheets = {
                invoice: noInvoice,
                tanggal: formatTgl,
                nama: this.pelanggan.nama,
                wa: this.pelanggan.telepon,
                alamat: this.pelanggan.alamat,
                tanggal_kirim: this.pelanggan.tanggalKirim,
                items: this.items.map(item => `${item.name} (${item.qty}x)`).join(", "),
                total: this.total,
                metode: this.metodeTerpilih,
                tipe_bayar: this.tipePembayaran
            };

            try {
                await fetch(scriptURL, {
                    method: 'POST',
                    mode: 'no-cors', 
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(dataSheets)
                });
            } catch (error) {
                console.error('Gagal simpan ke Sheets:', error);
            }

            // --- 5. EKSEKUSI FINAL (WA & Redirect) ---
            this.selesaikanPesanan(pesan, dataInvoice);
        },

        // Fungsi ini diletakkan terpisah (sejajar dengan checkout, bukan di dalamnya)
        selesaikanPesanan(pesan, dataInvoice) {
            const nomorWA = "6285188647503";
            
            // Simpan ke localStorage untuk halaman invoice.html
            localStorage.setItem('last_invoice', JSON.stringify(dataInvoice));
            
            // Buka WhatsApp
            window.open(`https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`, '_blank');

            // Redirect setelah delay
            setTimeout(() => {
                this.items = []; 
                this.isProcessing = false;
                window.location.href = 'Resources/Layouts/Invoices/invoice.html';
            }, 1200);
        }
    });
});

