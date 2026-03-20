document.addEventListener('alpine:init', () => {
    Alpine.data('menuManager', () => ({
        kategoriAktif: 'all',
        halamanAktif: 1,
        perHalaman: 8,
        isMobile: window.innerWidth < 768,

        init() {
            window.addEventListener('resize', () => {
                this.isMobile = window.innerWidth < 768;
            });
            this.$watch('kategoriAktif', () => this.halamanAktif = 1);
        },

        // Helper untuk template HTML Desktop
        renderDesktop(item) {
            // 1. Logika: Jika ada data minOrder di JSON, buat HTML labelnya
            const labelMinOrder = item.minOrder 
                ? `<div class="mt-auto mb-4 inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 dark:bg-amber-950/30 border border-amber-200/50 rounded-xl">
                        <a class="text-[10px] font-black text-amber-700 dark:text-amber-400 uppercase tracking-widest flex items-center gap-1.5">
                            <i class="fa-solid fa-circle-info w-3 h-3"></i>
                            Min. Order: ${item.minOrder} Box
                        </a>
                </div>` 
                : '';

            return `
                <div class="group bg-white dark:bg-slate-900 p-4 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all border border-transparent hover:border-amber-500/20 flex flex-col h-full relative">
                    <div class="relative overflow-hidden rounded-[2rem] mb-5">
                        <img src="${item.gambar}" class="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700">
                        ${item.isBestSeller ? `<div class="absolute top-4 right-4 bg-amber-50/90 dark:bg-orange-950/50 backdrop-blur-sm px-3.5 py-2 rounded-full text-[10px] font-black uppercase flex items-center gap-2 border border-amber-200/50 shadow-md">🔥 <span class="text-orange-700 italic">Best Seller</span></div>` : ''}
                    </div>
                    <div class="px-2 pb-2 flex flex-col flex-grow">
                        <h3 class="font-black text-slate-950 dark:text-white text-xl mb-2">${item.nama}</h3>
                        <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-4">${item.deskripsi}</p>
                        
                        ${labelMinOrder}

                        <div class="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                            <span class="text-xl font-black dark:text-white">Rp ${item.harga}</span>
                            <button class="tombol-tambah h-12 w-12 bg-green-600 text-white rounded-2xl flex items-center justify-center shadow-lg active:scale-90" 
                                    data-id="${item.id}" 
                                    data-name="${item.nama}" 
                                    data-price="${item.harga}" 
                                    data-img="${item.gambar}"
                                    data-min="${item.minOrder || 1}"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" d="M12 4.5v15m7.5-7.5h-15"/></svg>
                            </button>
                        </div>
                    </div>
                </div>`;
        },

        // Helper untuk template HTML Mobile
        renderMobile(item) {
            // 1. Buat label yang lebih compact untuk Mobile
            const minOrderTag = item.minOrder 
                ? `<div class="mt-1 flex items-center gap-1 text-[9px] font-black text-amber-600 dark:text-amber-400 bg-amber-50/50 dark:bg-amber-900/20 px-1.5 py-0.5 rounded-md border border-amber-200/30 w-fit">
                    <i class="fa-solid fa-circle-info w-2.5 h-2.5"></i>
                    Min. ${item.minOrder} Box
                </div>` 
                : '';

            return `
                <div class="bg-white dark:bg-slate-900 p-3 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex gap-4">
                    <div class="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-2xl">
                        <img src="${item.gambar}" class="w-full h-full object-cover">
                    </div>
                    <div class="flex-1 flex flex-col justify-between py-0.5">
                        <div>
                            <h3 class="font-black text-slate-900 dark:text-white text-sm line-clamp-1">${item.nama}</h3>
                            <p class="text-[10px] text-slate-400 dark:text-slate-500 line-clamp-1 mt-0.5">${item.deskripsi}</p>
                            
                            ${minOrderTag}
                        </div>
                        <div class="flex items-center justify-between mt-auto">
                            <span class="text-[14px] font-black text-green-600">Rp ${item.harga}</span>
                            <button class="tombol-tambah h-7 w-7 bg-green-600 text-white rounded-xl flex items-center justify-center active:scale-90"
                                    data-id="${item.id}" 
                                    data-name="${item.nama}" 
                                    data-price="${item.harga}" 
                                    data-img="${item.gambar}"
                                    data-min="${item.minOrder || 1}"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" d="M12 4.5v15m7.5-7.5h-15"/></svg>
                            </button>
                        </div>
                    </div>
                </div>`;
        },

        get filteredMenu() {
            let filtered = DATABASE_MENU;
            if (this.kategoriAktif !== 'all') {
                filtered = DATABASE_MENU.filter(m => m.kategori.includes(this.kategoriAktif));
            }
            return filtered;
        },

        get menuTampil() {
            const start = (this.halamanAktif - 1) * this.perHalaman;
            const paginated = this.filteredMenu.slice(start, start + this.perHalaman);
            
            return paginated.map(item => {
                return this.isMobile ? this.renderMobile(item) : this.renderDesktop(item);
            }).join('');
        },

        get totalHalaman() {
            return Math.ceil(this.filteredMenu.length / this.perHalaman) || 1;
        },

        gantiHalaman(p) {
            this.halamanAktif = p;
            document.getElementById('anchor-menu')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        },

        tangkapKlik(e) {
            const tombol = e.target.closest('.tombol-tambah');
            if (tombol) {
                // 1. Ambil data dari atribut tombol
                const id = tombol.getAttribute('data-id'); // Pastikan di render ada data-id
                const nama = tombol.getAttribute('data-name');
                const harga = tombol.getAttribute('data-price');
                const gambar = tombol.getAttribute('data-img'); // Pastikan di render ada data-img
                const minOrder = parseInt(tombol.getAttribute('data-min')) || 1;

                // 2. Susun objek produk sesuai struktur addItem di cart.js
                const produk = {
                    id: id,
                    name: nama,
                    price: parseInt(harga.replace(/[^0-9]/g, '')), // Pastikan jadi angka
                    img: gambar,
                    minOrder: minOrder
                };

                // 3. PANGGIL STORE KERANJANG
                // Note: Nama store kamu di cart.js adalah 'keranjang'
                Alpine.store('keranjang').addItem(produk);

                // 4. Feedback Visual (Opsional tapi keren)
                tombol.classList.add('scale-110', 'bg-emerald-500');
                setTimeout(() => tombol.classList.remove('scale-110', 'bg-emerald-500'), 200);
            }
        }
    }));
});