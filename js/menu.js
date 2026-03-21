document.addEventListener('alpine:init', () => {
    Alpine.data('menuManager', () => ({
        kategoriAktif: 'all',
        halamanAktif: 1,
        perHalaman: 8,
        isMobile: window.innerWidth < 768,

        // Menu Filter Mobile
        openFilterMobile: false,
        filterTerpilih: ['all'],

        init() {
            window.addEventListener('resize', () => {
                this.isMobile = window.innerWidth < 768;
            });
            this.$watch('kategoriAktif', (val) => {
                // Setiap kali tombol kategori (desktop) diklik, reset checklist mobile ke kategori tersebut
                this.filterTerpilih = [val]; 
                this.halamanAktif = 1;
            });
        },

        // Helper untuk template HTML Desktop
        renderDesktop(item) {
            // 1. Kamus Warna Kategori (Mudah ditambah & dimodifikasi)
            const skemaWarna = {
                'tradisional': 'bg-amber-100 text-amber-700 border-amber-200/60 dark:bg-amber-900/40 dark:text-amber-400 dark:border-amber-700/40',
                'best_seller': 'bg-red-100 text-red-700 border-red-200/60 dark:bg-red-900/40 dark:text-red-400 dark:border-red-700/40',
                'nasi_kotak':  'bg-emerald-100 text-emerald-700 border-emerald-200/60 dark:bg-emerald-900/40 dark:text-emerald-400 dark:border-emerald-700/40',
                'snack_box':   'bg-blue-100 text-blue-700 border-blue-200/60 dark:bg-blue-900/40 dark:text-blue-400 dark:border-blue-700/40',
                'parcel':      'bg-purple-100 text-purple-700 border-purple-200/60 dark:bg-purple-900/40 dark:text-purple-400 dark:border-purple-700/40',
                'default':     'bg-slate-100 text-slate-700 border-slate-200/60 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700/40'
            };

            // 2. Logika Memecah Kategori (Jika ada spasi, dipisah jadi beberapa badge)
            const daftarKategori = item.kategori ? item.kategori.split(' ') : [];
            const htmlBadgeKategori = daftarKategori.map(cat => {
                const warna = skemaWarna[cat] || skemaWarna['default'];
                return `
                    <a class="px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest rounded-full border shadow-sm whitespace-nowrap ${warna}">
                        ${cat.replace('_', ' ')}
                    </a>
                `;
            }).join('');

            const containerBadge = htmlBadgeKategori 
                ? `<div class="mb-3 flex flex-wrap gap-2">${htmlBadgeKategori}</div>` 
                : '';

            const labelNote = item.note 
                ? `<p class="mt-1 text-[10px] italic text-amber-600 dark:text-amber-400 flex items-start gap-1">
                    <i class="fa-solid fa-pen-to-square mt-0.5"></i>
                    <a>${item.note}</a>
                </p>` 
                : '';

            // 3. Logika Min Order (Warna Hijau agar tetap informatif)
            const labelMinOrder = item.minOrder 
                ? `<div class="mt-auto mb-4 relative overflow-hidden group">
                        <div class="absolute inset-0 bg-gradient-to-r from-amber-100/80 via-amber-50/40 to-transparent dark:from-amber-900/30 dark:via-amber-900/10 dark:to-transparent rounded-r-full"></div>
                        
                        <div class="relative flex items-center gap-3 px-4 py-2.5 border-l-4 border-amber-500">
                            
                            <div class="flex items-center justify-center flex-shrink-0">
                                <i class="fa-solid fa-circle-exclamation text-amber-600 dark:text-amber-400 text-sm animate-pulse"></i>
                            </div>

                            <div class="flex flex-col justify-center">
                                <a class="text-[10px] font-black text-amber-900 dark:text-amber-200 uppercase tracking-widest leading-none">
                                    Minimal Order: ${item.minOrder} Box / pcs
                                </a>
                            </div>
                        </div>
                </div>` 
                : '';

            // 4. Return HTML Template
            return `
                <div class="group bg-white dark:bg-slate-900 p-4 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all border border-transparent hover:border-amber-500/20 flex flex-col h-full relative">
                    
                    <div class="relative overflow-hidden rounded-[2rem] mb-5">
                        <img src="${item.gambar}" class="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700" alt="${item.nama}">
                        ${item.isBestSeller ? `<div class="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm px-3.5 py-2 rounded-full text-[10px] font-black uppercase flex items-center gap-2 border border-slate-200/50 shadow-md text-orange-600">🔥 <span>Best Seller</span></div>` : ''}
                    </div>

                    <div class="px-2 pb-2 flex flex-col flex-grow">
                        
                        ${containerBadge}

                        <h3 class="font-black text-slate-950 dark:text-white text-xl mb-2 leading-tight">${item.nama}</h3>
                        <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-2">${item.deskripsi}</p>

                        ${labelNote}

                        ${labelMinOrder}

                        <div class="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                            <div class="flex flex-col">
                                <a class="text-[10px] text-slate-400 uppercase font-bold tracking-tighter">Harga</a>
                                <a class="text-xl font-black dark:text-white">Rp ${item.harga.toLocaleString('id-ID')}</a>
                            </div>
                            
                            <div class="flex items-center gap-2">
                                <button onclick="window.dispatchEvent(new CustomEvent('open-detail-menu', { detail: ${JSON.stringify(item).replace(/"/g, '&quot;')} }))"
                                        class="w-12 h-12 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl flex items-center justify-center shadow-sm active:scale-90 transition-all border border-slate-200/50 dark:border-white/10 flex-shrink-0">
                                    <i class="fa-solid fa-eye text-xl"></i>
                                </button>

                                <button class="tombol-tambah h-12 w-12 bg-green-600 text-white rounded-2xl flex items-center justify-center shadow-lg active:scale-90 hover:bg-green-700 transition-all" 
                                        data-id="${item.id}" 
                                        data-name="${item.nama}" 
                                        data-price="${item.harga}" 
                                        data-img="${item.gambar}"
                                        data-min="${item.minOrder || 1}"> 
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 4.5v15m7.5-7.5h-15"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>`;
        },

        // Helper untuk template HTML Mobile
        renderMobile(item) {
            // 1. Kamus Warna Kategori (Sama dengan Desktop)
            const skemaWarna = {
                'tradisional': 'bg-amber-100 text-amber-700 border-amber-200/60 dark:bg-amber-900/40 dark:text-amber-400 dark:border-amber-700/40',
                'best_seller': 'bg-red-100 text-red-700 border-red-200/60 dark:bg-red-900/40 dark:text-red-400 dark:border-red-700/40',
                'nasi_kotak':  'bg-emerald-100 text-emerald-700 border-emerald-200/60 dark:bg-emerald-900/40 dark:text-emerald-400 dark:border-emerald-700/40',
                'snack_box':   'bg-blue-100 text-blue-700 border-blue-200/60 dark:bg-blue-900/40 dark:text-blue-400 dark:border-blue-700/40',
                'parcel':      'bg-purple-100 text-purple-700 border-purple-200/60 dark:bg-purple-900/40 dark:text-purple-400 dark:border-purple-700/40',
                'default':     'bg-slate-100 text-slate-700 border-slate-200/60 dark:bg-slate-800 dark:text-slate-400 dark:border-slate-700/40'
            };

            // 2. Logika Memecah Kategori (Sama dengan Desktop)
            const daftarKategori = item.kategori ? item.kategori.split(' ') : [];
            const htmlBadgeKategori = daftarKategori.map(cat => {
                const warna = skemaWarna[cat] || skemaWarna['default'];
                return `
                    <span class="px-2 py-0.5 text-[6px] font-extrabold uppercase tracking-wider rounded-full border shadow-sm whitespace-nowrap ${warna}">
                        ${cat.replace('_', ' ')}
                    </span>
                `;
            }).join('');

            const containerBadge = htmlBadgeKategori 
                ? `<div class="mb-1.5 flex flex-wrap gap-1">${htmlBadgeKategori}</div>` 
                : '';

            const labelNote = item.note 
            ? `<p class="mt-1 text-[10px] italic text-amber-600 dark:text-amber-400 flex items-start gap-1">
                <i class="fa-solid fa-pen-to-square mt-0.5"></i>
                <a>${item.note}</a>
            </p>` 
            : '';

            // 3. Label Min Order
            const minOrderTag = item.minOrder 
                ? `<div class="mt-1 flex items-center gap-1 text-[9px] font-black text-amber-600 dark:text-amber-400 bg-amber-50/50 dark:bg-amber-900/20 px-1.5 py-0.5 rounded-md border border-amber-200/30 w-fit">
                    <i class="fa-solid fa-circle-info scale-75"></i>
                    Min. ${item.minOrder} Box
                </div>` 
                : '';

            return `
                <div class="bg-white dark:bg-slate-900 p-3 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex gap-4 items-start">
                    <div class="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-2xl bg-slate-100">
                        <img src="${item.gambar}" class="w-full h-full object-cover">
                    </div>
                    <div class="flex-1 flex flex-col py-0.5 min-h-[96px]">
                        <div>
                            ${containerBadge}

                            <h3 class="font-black text-slate-900 dark:text-white text-sm line-clamp-1">${item.nama}</h3>
                            <p class="text-[10px] text-slate-400 dark:text-slate-500 line-clamp-1 mt-0.5">${item.deskripsi}</p>

                            ${labelNote}

                            ${minOrderTag}
                        </div>
                        <div class="flex items-center justify-end gap-2 mt-auto pt-2">
                            <span class="mr-auto text-[16px] font-black text-slate-900 dark:text-white">
                                Rp ${item.harga.toLocaleString('id-ID')}
                            </span>

                            <button onclick="window.dispatchEvent(new CustomEvent('open-detail-menu', { detail: ${JSON.stringify(item).replace(/"/g, '&quot;')} }))"
                                    class="w-8 h-8 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl flex items-center justify-center shadow-sm active:scale-90 transition-all border border-slate-200/50 dark:border-white/10 flex-shrink-0">
                                <i class="fa-solid fa-eye text-xs"></i>
                            </button>

                            <button class="tombol-tambah h-8 w-8 bg-green-600 text-white rounded-xl flex items-center justify-center active:scale-90 flex-shrink-0 shadow-lg shadow-green-600/20"
                                    data-id="${item.id}" 
                                    data-name="${item.nama}" 
                                    data-price="${item.harga}" 
                                    data-img="${item.gambar}"
                                    data-min="${item.minOrder || 1}"> 
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.5v15m7.5-7.5h-15"/></svg>
                            </button>
                        </div>
                    </div>
                </div>`;
        },

        get filteredMenu() {
            // Ambil data mentah dari database
            let filtered = DATABASE_MENU;
            
            // 1. Jika 'all' terpilih, jangan filter apa-apa (langsung return semua)
            if (this.filterTerpilih.includes('all')) {
                return filtered;
            }

            // 2. Jika bukan 'all', lakukan penyaringan mendalam
            return filtered.filter(item => {
                // Pastikan item punya kategori, jika tidak ada (null/undefined) beri string kosong
                const kategoriProduk = item.kategori ? item.kategori.toLowerCase() : '';
                
                // Pecah kategori produk menjadi array (misal: "tradisional ayam" -> ["tradisional", "ayam"])
                const arrayKategoriProduk = kategoriProduk.split(' ');

                // Cek apakah ada SALAH SATU kategori produk yang cocok dengan daftar filterTerpilih
                return arrayKategoriProduk.some(kat => this.filterTerpilih.includes(kat));
            });
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
        },
    }));
});



