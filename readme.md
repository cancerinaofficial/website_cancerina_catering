<!-- Phill Badge menu makanan -->

<!-- Tradisional (Amber / Brown) -->
<span class="px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400 rounded-full border border-amber-200/60 dark:border-amber-700/40 shadow-sm">
    Tradisional
</span>

<!-- Nasi Kotak (Orange) -->
<span class="px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-400 rounded-full border border-orange-200/60 dark:border-orange-700/40 shadow-sm">
    Nasi Kotak
</span>

<!-- Snack Box (Indigo / Purple) -->
<span class="px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-400 rounded-full border border-indigo-200/60 dark:border-indigo-700/40 shadow-sm">
    Snack Box
</span>

<!-- Parcel (Rose / Pink) -->
<span class="px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-400 rounded-full border border-rose-200/60 dark:border-rose-700/40 shadow-sm">
    Parcel
</span>

<!-- Ayam (Red) -->
<span class="px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400 rounded-full border border-red-200/60 dark:border-red-700/40 shadow-sm">
    Ayam
</span>

<!-- Lele (Cyan / Blue) -->
<span class="px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-400 rounded-full border border-cyan-200/60 dark:border-cyan-700/40 shadow-sm">
    Lele
</span>

<!-- Telur (Yellow) -->
<span class="px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-400 rounded-full border border-yellow-200/60 dark:border-yellow-700/40 shadow-sm">
    Telur
</span>

<!-- Aneka Macam (Slate / Gray) -->
<span class="px-3 py-1 text-[10px] font-extrabold uppercase tracking-widest bg-slate-100 text-slate-700 dark:bg-slate-800/60 dark:text-slate-400 rounded-full border border-slate-200/60 dark:border-slate-700/40 shadow-sm">
    Aneka Macam
</span>


<!-- menu.html -->
<section id="full-menu" 
        class="hidden md:flex py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 min-h-screen" 
        x-data="{ kategoriAktif: 'all' }">

    <div class="container mx-auto px-6">
        
        <div class="text-center max-w-2xl mx-auto mb-16" 
            data-aos="fade-up">

            <h2 class="text-4xl md:text-5xl font-black text-slate-950 dark:text-white mb-6">
                Pilih Menu 
                <span class="text-green-600">
                    Favoritmu
                </span>
            </h2>

            <div class="flex flex-wrap justify-center gap-3 p-2 bg-white dark:bg-slate-900 rounded-[2rem] shadow-sm border border-slate-200 dark:border-slate-800">

                <button @click="kategoriAktif = 'all'" 
                        :class="kategoriAktif === 'all' ? 'bg-green-600 text-white' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800'" 
                        class="px-6 py-2.5 rounded-2xl font-bold transition-all text-sm">
                        Semua
                </button>

                <button @click="kategoriAktif = 'best_seller'" 
                        :class="kategoriAktif === 'best_seller' ? 'bg-green-600 text-white' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800'" 
                        class="px-6 py-2.5 rounded-2xl font-bold transition-all text-sm">
                        Best Seller
                </button>

                <button @click="kategoriAktif = 'tradisional'" 
                        :class="kategoriAktif === 'tradisional' ? 'bg-green-600 text-white' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800'" 
                        class="px-6 py-2.5 rounded-2xl font-bold transition-all text-sm">
                        Tradisional
                </button>

                <button @click="kategoriAktif = 'nasi_kotak'" 
                        :class="kategoriAktif === 'nasi_kotak' ? 'bg-green-600 text-white' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800'" 
                        class="px-6 py-2.5 rounded-2xl font-bold transition-all text-sm">
                        Nasi Kotak
                </button>

                <button @click="kategoriAktif = 'snack_box'" 
                        :class="kategoriAktif === 'snack_box' ? 'bg-green-600 text-white' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800'" 
                        class="px-6 py-2.5 rounded-2xl font-bold transition-all text-sm">
                        Snack Box
                </button>

                <button @click="kategoriAktif = 'parcel'" 
                        :class="kategoriAktif === 'parcel' ? 'bg-green-600 text-white' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800'" 
                        class="px-6 py-2.5 rounded-2xl font-bold transition-all text-sm">
                        Parcel
                </button>

                <button @click="kategoriAktif = 'aneka_macam'" 
                        :class="kategoriAktif === 'aneka_macam' ? 'bg-green-600 text-white' : 'text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800'" 
                        class="px-6 py-2.5 rounded-2xl font-bold transition-all text-sm">
                        Aneka Macam
                </button>

            </div>

        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 h-auto overflow-visible" 
            x-data="{ isiMenu: '' }" 
            x-init="fetch('Resources/Layouts/isi-menu.html')
                    .then(res => res.text())
                    .then(data => { 
                        isiMenu = data; 
                        $nextTick(() => initAOS()); 
                    })" 
            x-html="isiMenu">
        </div>

    </div>

</section>


<!-- isi-menu.html -->
<div class="group" 
     data-aos="fade-up" 
     data-aos-anchor="#anchor-menu" 
     data-category="tradisional best_seller">
    <div class="bg-white dark:bg-slate-900 p-4 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all border border-transparent hover:border-amber-500/20 flex flex-col h-full relative">
        <div class="relative overflow-hidden rounded-[2rem] mb-5">
            <img src="Storage/img/menu-makanan/ayam-lodho.jpeg" loading="lazy" class="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700">
            <div class="absolute top-4 right-4 bg-amber-50/90 dark:bg-orange-950/50 backdrop-blur-sm px-3.5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 border border-amber-200/50 dark:border-orange-800/30 shadow-md">
                <span class="text-xs">🔥</span>
                <span class="text-orange-700 italic dark:text-orange-300">Best Seller</span>
            </div>
        </div>
        <div class="px-2 pb-2 flex flex-col flex-grow">
            <div class="flex gap-2 mb-3">
                <span class="px-2 py-0.5 text-[8px] font-extrabold uppercase tracking-widest bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-400 rounded-full border border-amber-200/60 shadow-sm">Tradisional</span>
                <span class="px-2 py-0.5 text-[8px] font-extrabold uppercase tracking-widest bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400 rounded-full border border-red-200/60 dark:border-red-700/40 shadow-sm">Ayam</span>
            </div>
            <h3 class="font-black text-slate-950 dark:text-white text-xl mb-2 group-hover:text-amber-600 transition-colors">Ayam Lodho Signature</h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-6">Ayam kampung pilihan dengan kuah santan kental rempah pedas otentik.</p>
            <div class="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">
                <div class="flex flex-col"><span class="text-[10px] text-slate-400 font-bold uppercase">Harga</span><span class="text-xl font-black dark:text-white">Rp 25k</span></div>
                <button class="h-12 w-12 bg-green-600 hover:bg-green-500 text-white rounded-2xl flex items-center justify-center shadow-lg transition-all active:scale-90">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6"><path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>
                </button>
            </div>
        </div>
    </div>
</div>


<!-- Cart,html -->
<section class="max-w-6xl mx-auto py-12 px-6" data-aos="fade-up">
    
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
        <div class="flex items-center gap-5">
            <button @click="$store.navigasi.pindah('home')" 
                    class="group flex items-center justify-center w-12 h-12 bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-white/20 dark:border-slate-800/50 shadow-sm hover:shadow-xl hover:bg-green-600 transition-all duration-300">
                <svg class="w-6 h-6 text-slate-600 dark:text-slate-300 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/>
                </svg>
            </button>
            
            <div>
                <h1 class="text-4xl font-black dark:text-white tracking-tight">
                    Keranjang 
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                        Pesanan
                    </span>
                </h1>
                <p class="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mt-1">
                    Konfirmasi menu pilihanmu
                </p>
            </div>
        </div>

        <div class="flex items-center gap-3 self-start md:self-center px-5 py-2.5 bg-white/50 dark:bg-slate-900/50 backdrop-blur-md rounded-2xl border border-white/20 shadow-inner">
            <span class="text-xl">
                🍽️
            </span>
            <span class="font-black text-slate-700 dark:text-slate-200" x-text="$store.keranjang.totalItem + ' Items'"></span>
        </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
    
        <div class="lg:col-span-2 space-y-4">
            <template x-if="$store.keranjang.items.length === 0">
                <div class="text-center py-20 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border-2 border-dashed border-slate-200 dark:border-slate-800">
                    <div class="text-6xl mb-4 inline-block animate-[bounce_3s_infinite]">
                        🛒
                    </div>
                    <p class="text-slate-500 font-medium font-sans">
                        Wah, keranjangmu masih kosong nih!
                    </p>
                    <button @click="$store.navigasi.pindah('menu')" 
                            class="group relative mt-8 px-8 py-4 font-black rounded-2xl transition-all duration-300 active:scale-95 overflow-hidden
                                bg-white text-green-600 border border-slate-100
                                hover:bg-green-600 hover:text-white
                                dark:bg-slate-800 dark:text-green-400 dark:border-slate-700 dark:shadow-none
                                dark:hover:bg-green-800 dark:hover:text-white dark:hover:border-green-700">
                        
                        <div class="flex items-center gap-4 relative z-10">
                            <span>Cari Makanan Enak</span>
                        </div>
                    </button>
                </div>
            </template>

            <template x-for="(item, index) in $store.keranjang.items" :key="index">
                <div class="p-5 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-100 dark:border-slate-800 flex items-center gap-6 group shadow-sm">
                    <img :src="item.image" class="w-24 h-24 rounded-2xl object-cover shadow-sm group-hover:scale-105 transition-transform">
                    <div class="flex-grow">
                        <h4 class="text-lg font-black dark:text-white font-sans" x-text="item.name"></h4>
                        <p class="text-green-600 font-black text-xl" x-text="'Rp ' + (item.price * item.qty).toLocaleString()">
                            Rp 0
                        </p>
                        
                        <div class="flex items-center justify-between mt-4">
                            <div class="flex items-center bg-slate-100 dark:bg-slate-800 rounded-xl p-1">
                                <button @click="$store.keranjang.updateQty(index, -1)" class="w-9 h-9 flex items-center justify-center hover:bg-white dark:hover:bg-slate-700 rounded-lg transition-all font-bold dark:text-white">
                                    -
                                </button>
                                <span class="w-12 text-center font-black dark:text-white" x-text="item.qty"></span>
                                <button @click="$store.keranjang.updateQty(index, 1)" class="w-9 h-9 flex items-center justify-center hover:bg-white dark:hover:bg-slate-700 rounded-lg transition-all font-bold dark:text-white">
                                    +
                                </button>
                            </div>
                            <button @click="$store.keranjang.hapus(index)" class="text-sm text-red-500 font-bold hover:bg-red-50 dark:hover:bg-red-900/20 px-3 py-1.5 rounded-xl transition-all">
                                Hapus
                            </button>
                        </div>
                    </div>
                </div>
            </template>
        </div>

        <div class="lg:col-span-1">
            <div class="p-8 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 sticky top-24 shadow-xl shadow-slate-200/50 dark:shadow-none">
                <h2 class="font-black mb-4 dark:text-white uppercase text-[11px] tracking-[0.2em] italic text-slate-400">
                    Ringkasan Pesanan
                </h2>
                
                <div class="space-y-4">
                    <div class="flex justify-between text-slate-500 font-bold text-sm">
                        <span>
                            Subtotal
                        </span>
                        <span class="dark:text-white" x-text="'Rp ' + ($store.keranjang.totalHarga || 0).toLocaleString()">
                            Rp 0
                        </span>
                    </div>
                    <div class="flex justify-between text-slate-500 font-bold text-sm">
                        <span>
                            Biaya Layanan
                        </span>
                        <span class="dark:text-white" 
                            x-text="$store.keranjang.items.length > 0 ? 'Rp ' + $store.keranjang.biayaLayanan.toLocaleString() : 'Rp 0'">
                            Rp 2,500
                        </span>
                    </div>
                    
                    <div class="h-[1px] bg-slate-100 dark:bg-slate-800 my-6"></div>
                    
                    <div class="flex flex-col gap-1 mb-8">
                        <span class="text-slate-400 text-[10px] font-black uppercase tracking-widest">
                            Total Bayar
                        </span>
                        <span class="text-4xl font-black text-green-600" 
                            x-text="'Rp ' + ($store.keranjang.totalBayar || 0).toLocaleString()">
                            Rp 0
                        </span>
                    </div>

                    <button class="w-full py-5 bg-green-600 text-white text-lg font-black rounded-2xl shadow-[0_20px_40px_-10px_rgba(22,163,74,0.3)] hover:bg-green-700 transition-all active:scale-95 flex items-center justify-center gap-3">
                        Lanjut Pembayaran
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- cart.js -->
document.addEventListener('alpine:init', () => {
    Alpine.store('keranjang', {
        items: JSON.parse(localStorage.getItem('cart_items')) || [],
        biayaLayanan: 2500,
        isOpen: false,
        showToast: false,
        toastMsg: '',

        // Simpan data ke Local Storage
        simpanKeLokal() {
            localStorage.setItem('cart_items', JSON.stringify(this.items));
        },
        
        // Fungsi Tambah Item
        tambah(name, price, image) {
            let found = this.items.find(i => i.name === name);
            if (found) {
                found.qty++;
            } else {
                this.items.push({ name, price, image, qty: 1 });
            }

            this.simpanKeLokal();

            // Logika Notifikasi
            this.toastMsg = 'Makanan berhasil ditambahkan ke keranjang';
            this.showToast = true;

            // Notifikasi akan hilang setelah 3 detik
            setTimeout(() => {
                this.showToast = false;
            }, 3000);
        },
        
        // Fungsi Update Quantity
        updateQty(index, val) {
            this.items[index].qty += val;
            if (this.items[index].qty < 1) {
                this.hapus(index);
            } else {
                this.simpanKeLokal();
            }
        },

        // Fungsi Hapus Item
        hapus(index) {
            this.items.splice(index, 1);

            this.simpanKeLokal();
        },
        
        // Kalkulasi Total Harga
        get totalHarga() {
            const total = this.items.reduce((sum, item) => sum + (Number(item.price) * Number(item.qty)), 0);
            return total;
        },

        get totalBayar() {
            if (this.items.length === 0) return 0;
            return this.totalHarga + this.biayaLayanan;
        },
        
        // Kalkulasi Total Item untuk Badge di Navbar
        get totalItem() {
            return this.items.reduce((total, item) => total + item.qty, 0);
        }
    });
});

// Logika Daftar Menu Makanan
// document.addEventListener('alpine:init', () => {
//     Alpine.data('menuResto', () => ({
//         foods: [
//             {
//                 id: 1,
//                 name: 'Matcha Latte Latte',
//                 price: 25000,
//                 image: 'img/matcha.jpg',
//                 category: 'minuman'
//             },
//             {
//                 id: 2,
//                 name: 'Beef Teriyaki Bento',
//                 price: 45000,
//                 image: 'img/bento.jpg',
//                 category: 'makanan'
//             },
//             {
//                 id: 3,
//                 name: 'Salmon Sushi',
//                 price: 35000,
//                 image: 'img/sushi.jpg',
//                 category: 'makanan'
//             }
//         ]
//     }));
// });



isi-menu.html
<!-- Contoh Isi Menu || Desktop -->
<!-- <div class="group hidden md:block" 
    data-aos="fade-up" 
    data-category="tradisional best_seller parcel">

    <div class="bg-white dark:bg-slate-900 p-4 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all border border-transparent hover:border-amber-500/20 flex flex-col h-full relative">

        <div class="relative overflow-hidden rounded-[2rem] mb-5">
            <img src="https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&w=600&auto=format&fit=crop" 
                loading="lazy"
                alt="Ayam Lodho Signature"
                class="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700">

            <div class="absolute top-4 right-4 bg-amber-50/90 dark:bg-orange-950/50 backdrop-blur-sm px-3.5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 border border-amber-200/50 dark:border-orange-800/30 shadow-md">
                <span class="text-xs">
                    🔥
                </span>
                <span class="text-orange-700 italic dark:text-orange-300">
                    Best Seller
                </span>
            </div>

        </div>

        <div class="px-2 pb-2 flex flex-col flex-grow">

            <div class="flex gap-2 mb-3">
                <span class="px-2 py-0.5 text-[8px] font-extrabold uppercase bg-amber-100 text-amber-700 dark:bg-amber-900/40 rounded-full">
                    Tradisional
                </span>
                <span class="px-2 py-0.5 text-[8px] font-extrabold uppercase bg-pink-100 text-pink-700 dark:bg-pink-900/40 rounded-full">
                    Parcel
                </span>
            </div>

            <h3 class="font-black text-slate-950 dark:text-white text-xl mb-2">
                Ayam Lodho Signature
            </h3>

            <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-6">
                Ayam kampung pilihan dengan kuah santan kental rempah pedas otentik.
            </p>

            <div class="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">

                <div class="flex flex-col">
                    <span class="text-[10px] text-slate-400 font-bold uppercase">
                        Harga
                    </span>

                    <span class="text-xl font-black dark:text-white">
                        Rp 25k
                    </span>
                </div>

                <button class="tombol-tambah h-12 w-12 bg-green-600 hover:bg-green-500 text-white rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:ring-4 group-hover:ring-green-500/30 active:scale-90"
                        data-name="Ayam Lodho Signature" 
                        data-price="25000"
                        data-image="Storage/img/menu-makanan/ayam-lodho.jpeg">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                        class="w-6 h-6 transition-transform duration-300 group-hover:scale-125">
                        <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </button>

            </div>

        </div>

    </div>

</div>

<div class="group hidden md:block" 
    data-aos="fade-up" 
    data-category="tradisional best_seller parcel">

    <div class="bg-white dark:bg-slate-900 p-4 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all border border-transparent hover:border-amber-500/20 flex flex-col h-full relative">

        <div class="relative overflow-hidden rounded-[2rem] mb-5">
            <img src="https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&w=600&auto=format&fit=crop" 
                loading="lazy"
                alt="Ayam Lodho Signature"
                class="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700">

            <div class="absolute top-4 right-4 bg-amber-50/90 dark:bg-orange-950/50 backdrop-blur-sm px-3.5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 border border-amber-200/50 dark:border-orange-800/30 shadow-md">
                <span class="text-xs">
                    🔥
                </span>
                <span class="text-orange-700 italic dark:text-orange-300">
                    Best Seller
                </span>
            </div>

        </div>

        <div class="px-2 pb-2 flex flex-col flex-grow">

            <div class="flex gap-2 mb-3">
                <span class="px-2 py-0.5 text-[8px] font-extrabold uppercase bg-amber-100 text-amber-700 dark:bg-amber-900/40 rounded-full">
                    Tradisional
                </span>
                <span class="px-2 py-0.5 text-[8px] font-extrabold uppercase bg-pink-100 text-pink-700 dark:bg-pink-900/40 rounded-full">
                    Parcel
                </span>
            </div>

            <h3 class="font-black text-slate-950 dark:text-white text-xl mb-2">
                Ayam Lodho Signature
            </h3>

            <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-6">
                Ayam kampung pilihan dengan kuah santan kental rempah pedas otentik.
            </p>

            <div class="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">

                <div class="flex flex-col">
                    <span class="text-[10px] text-slate-400 font-bold uppercase">
                        Harga
                    </span>

                    <span class="text-xl font-black dark:text-white">
                        Rp 25k
                    </span>
                </div>

                <button class="tombol-tambah h-12 w-12 bg-green-600 hover:bg-green-500 text-white rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:ring-4 group-hover:ring-green-500/30 active:scale-90"
                        data-name="Ayam Lodho Signature" 
                        data-price="25000"
                        data-image="Storage/img/menu-makanan/ayam-lodho.jpeg">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                        class="w-6 h-6 transition-transform duration-300 group-hover:scale-125">
                        <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </button>

            </div>

        </div>

    </div>

</div>

<div class="group hidden md:block" 
    data-aos="fade-up" 
    data-category="tradisional best_seller parcel">

    <div class="bg-white dark:bg-slate-900 p-4 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all border border-transparent hover:border-amber-500/20 flex flex-col h-full relative">

        <div class="relative overflow-hidden rounded-[2rem] mb-5">
            <img src="https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&w=600&auto=format&fit=crop" 
                loading="lazy"
                alt="Ayam Lodho Signature"
                class="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700">

            <div class="absolute top-4 right-4 bg-amber-50/90 dark:bg-orange-950/50 backdrop-blur-sm px-3.5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 border border-amber-200/50 dark:border-orange-800/30 shadow-md">
                <span class="text-xs">
                    🔥
                </span>
                <span class="text-orange-700 italic dark:text-orange-300">
                    Best Seller
                </span>
            </div>

        </div>

        <div class="px-2 pb-2 flex flex-col flex-grow">

            <div class="flex gap-2 mb-3">
                <span class="px-2 py-0.5 text-[8px] font-extrabold uppercase bg-amber-100 text-amber-700 dark:bg-amber-900/40 rounded-full">
                    Tradisional
                </span>
                <span class="px-2 py-0.5 text-[8px] font-extrabold uppercase bg-pink-100 text-pink-700 dark:bg-pink-900/40 rounded-full">
                    Parcel
                </span>
            </div>

            <h3 class="font-black text-slate-950 dark:text-white text-xl mb-2">
                Ayam Lodho Signature
            </h3>

            <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-6">
                Ayam kampung pilihan dengan kuah santan kental rempah pedas otentik.
            </p>

            <div class="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">

                <div class="flex flex-col">
                    <span class="text-[10px] text-slate-400 font-bold uppercase">
                        Harga
                    </span>

                    <span class="text-xl font-black dark:text-white">
                        Rp 25k
                    </span>
                </div>

                <button class="tombol-tambah h-12 w-12 bg-green-600 hover:bg-green-500 text-white rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:ring-4 group-hover:ring-green-500/30 active:scale-90"
                        data-name="Ayam Lodho Signature" 
                        data-price="25000"
                        data-image="Storage/img/menu-makanan/ayam-lodho.jpeg">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                        class="w-6 h-6 transition-transform duration-300 group-hover:scale-125">
                        <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </button>

            </div>

        </div>

    </div>

</div>

<div class="group hidden md:block" 
    data-aos="fade-up" 
    data-category="tradisional best_seller parcel">

    <div class="bg-white dark:bg-slate-900 p-4 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all border border-transparent hover:border-amber-500/20 flex flex-col h-full relative">

        <div class="relative overflow-hidden rounded-[2rem] mb-5">
            <img src="https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&w=600&auto=format&fit=crop" 
                loading="lazy"
                alt="Ayam Lodho Signature"
                class="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700">

            <div class="absolute top-4 right-4 bg-amber-50/90 dark:bg-orange-950/50 backdrop-blur-sm px-3.5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 border border-amber-200/50 dark:border-orange-800/30 shadow-md">
                <span class="text-xs">
                    🔥
                </span>
                <span class="text-orange-700 italic dark:text-orange-300">
                    Best Seller
                </span>
            </div>

        </div>

        <div class="px-2 pb-2 flex flex-col flex-grow">

            <div class="flex gap-2 mb-3">
                <span class="px-2 py-0.5 text-[8px] font-extrabold uppercase bg-amber-100 text-amber-700 dark:bg-amber-900/40 rounded-full">
                    Tradisional
                </span>
                <span class="px-2 py-0.5 text-[8px] font-extrabold uppercase bg-pink-100 text-pink-700 dark:bg-pink-900/40 rounded-full">
                    Parcel
                </span>
            </div>

            <h3 class="font-black text-slate-950 dark:text-white text-xl mb-2">
                Ayam Lodho Signature
            </h3>

            <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-6">
                Ayam kampung pilihan dengan kuah santan kental rempah pedas otentik.
            </p>

            <div class="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">

                <div class="flex flex-col">
                    <span class="text-[10px] text-slate-400 font-bold uppercase">
                        Harga
                    </span>

                    <span class="text-xl font-black dark:text-white">
                        Rp 25k
                    </span>
                </div>

                <button class="tombol-tambah h-12 w-12 bg-green-600 hover:bg-green-500 text-white rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:ring-4 group-hover:ring-green-500/30 active:scale-90"
                        data-name="Ayam Lodho Signature" 
                        data-price="25000"
                        data-image="Storage/img/menu-makanan/ayam-lodho.jpeg">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                        class="w-6 h-6 transition-transform duration-300 group-hover:scale-125">
                        <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </button>

            </div>

        </div>

    </div>

</div>

<div class="group hidden md:block" 
    data-aos="fade-up" 
    data-category="tradisional best_seller parcel">

    <div class="bg-white dark:bg-slate-900 p-4 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all border border-transparent hover:border-amber-500/20 flex flex-col h-full relative">

        <div class="relative overflow-hidden rounded-[2rem] mb-5">
            <img src="https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&w=600&auto=format&fit=crop" 
                loading="lazy"
                alt="Ayam Lodho Signature"
                class="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700">

            <div class="absolute top-4 right-4 bg-amber-50/90 dark:bg-orange-950/50 backdrop-blur-sm px-3.5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 border border-amber-200/50 dark:border-orange-800/30 shadow-md">
                <span class="text-xs">
                    🔥
                </span>
                <span class="text-orange-700 italic dark:text-orange-300">
                    Best Seller
                </span>
            </div>

        </div>

        <div class="px-2 pb-2 flex flex-col flex-grow">

            <div class="flex gap-2 mb-3">
                <span class="px-2 py-0.5 text-[8px] font-extrabold uppercase bg-amber-100 text-amber-700 dark:bg-amber-900/40 rounded-full">
                    Tradisional
                </span>
                <span class="px-2 py-0.5 text-[8px] font-extrabold uppercase bg-pink-100 text-pink-700 dark:bg-pink-900/40 rounded-full">
                    Parcel
                </span>
            </div>

            <h3 class="font-black text-slate-950 dark:text-white text-xl mb-2">
                Ayam Lodho Signature
            </h3>

            <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-6">
                Ayam kampung pilihan dengan kuah santan kental rempah pedas otentik.
            </p>

            <div class="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">

                <div class="flex flex-col">
                    <span class="text-[10px] text-slate-400 font-bold uppercase">
                        Harga
                    </span>

                    <span class="text-xl font-black dark:text-white">
                        Rp 25k
                    </span>
                </div>

                <button class="tombol-tambah h-12 w-12 bg-green-600 hover:bg-green-500 text-white rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:ring-4 group-hover:ring-green-500/30 active:scale-90"
                        data-name="Ayam Lodho Signature" 
                        data-price="25000"
                        data-image="Storage/img/menu-makanan/ayam-lodho.jpeg">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                        class="w-6 h-6 transition-transform duration-300 group-hover:scale-125">
                        <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </button>

            </div>

        </div>

    </div>

</div>

<div class="group hidden md:block" 
    data-aos="fade-up" 
    data-category="tradisional best_seller parcel">

    <div class="bg-white dark:bg-slate-900 p-4 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all border border-transparent hover:border-amber-500/20 flex flex-col h-full relative">

        <div class="relative overflow-hidden rounded-[2rem] mb-5">
            <img src="https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&w=600&auto=format&fit=crop" 
                loading="lazy"
                alt="Ayam Lodho Signature"
                class="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700">

            <div class="absolute top-4 right-4 bg-amber-50/90 dark:bg-orange-950/50 backdrop-blur-sm px-3.5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 border border-amber-200/50 dark:border-orange-800/30 shadow-md">
                <span class="text-xs">
                    🔥
                </span>
                <span class="text-orange-700 italic dark:text-orange-300">
                    Best Seller
                </span>
            </div>

        </div>

        <div class="px-2 pb-2 flex flex-col flex-grow">

            <div class="flex gap-2 mb-3">
                <span class="px-2 py-0.5 text-[8px] font-extrabold uppercase bg-amber-100 text-amber-700 dark:bg-amber-900/40 rounded-full">
                    Tradisional
                </span>
                <span class="px-2 py-0.5 text-[8px] font-extrabold uppercase bg-pink-100 text-pink-700 dark:bg-pink-900/40 rounded-full">
                    Parcel
                </span>
            </div>

            <h3 class="font-black text-slate-950 dark:text-white text-xl mb-2">
                Ayam Lodho Signature
            </h3>

            <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-6">
                Ayam kampung pilihan dengan kuah santan kental rempah pedas otentik.
            </p>

            <div class="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">

                <div class="flex flex-col">
                    <span class="text-[10px] text-slate-400 font-bold uppercase">
                        Harga
                    </span>

                    <span class="text-xl font-black dark:text-white">
                        Rp 25k
                    </span>
                </div>

                <button class="tombol-tambah h-12 w-12 bg-green-600 hover:bg-green-500 text-white rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:ring-4 group-hover:ring-green-500/30 active:scale-90"
                        data-name="Ayam Lodho Signature" 
                        data-price="25000"
                        data-image="Storage/img/menu-makanan/ayam-lodho.jpeg">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                        class="w-6 h-6 transition-transform duration-300 group-hover:scale-125">
                        <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </button>

            </div>

        </div>

    </div>

</div>

<div class="group hidden md:block" 
    data-aos="fade-up" 
    data-category="tradisional best_seller parcel">

    <div class="bg-white dark:bg-slate-900 p-4 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all border border-transparent hover:border-amber-500/20 flex flex-col h-full relative">

        <div class="relative overflow-hidden rounded-[2rem] mb-5">
            <img src="https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&w=600&auto=format&fit=crop" 
                loading="lazy"
                alt="Ayam Lodho Signature"
                class="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700">

            <div class="absolute top-4 right-4 bg-amber-50/90 dark:bg-orange-950/50 backdrop-blur-sm px-3.5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 border border-amber-200/50 dark:border-orange-800/30 shadow-md">
                <span class="text-xs">
                    🔥
                </span>
                <span class="text-orange-700 italic dark:text-orange-300">
                    Best Seller
                </span>
            </div>

        </div>

        <div class="px-2 pb-2 flex flex-col flex-grow">

            <div class="flex gap-2 mb-3">
                <span class="px-2 py-0.5 text-[8px] font-extrabold uppercase bg-amber-100 text-amber-700 dark:bg-amber-900/40 rounded-full">
                    Tradisional
                </span>
                <span class="px-2 py-0.5 text-[8px] font-extrabold uppercase bg-pink-100 text-pink-700 dark:bg-pink-900/40 rounded-full">
                    Parcel
                </span>
            </div>

            <h3 class="font-black text-slate-950 dark:text-white text-xl mb-2">
                Ayam Lodho Signature
            </h3>

            <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-6">
                Ayam kampung pilihan dengan kuah santan kental rempah pedas otentik.
            </p>

            <div class="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">

                <div class="flex flex-col">
                    <span class="text-[10px] text-slate-400 font-bold uppercase">
                        Harga
                    </span>

                    <span class="text-xl font-black dark:text-white">
                        Rp 25k
                    </span>
                </div>

                <button class="tombol-tambah h-12 w-12 bg-green-600 hover:bg-green-500 text-white rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:ring-4 group-hover:ring-green-500/30 active:scale-90"
                        data-name="Ayam Lodho Signature" 
                        data-price="25000"
                        data-image="Storage/img/menu-makanan/ayam-lodho.jpeg">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                        class="w-6 h-6 transition-transform duration-300 group-hover:scale-125">
                        <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </button>

            </div>

        </div>

    </div>

</div>

<div class="group hidden md:block" 
    data-aos="fade-up" 
    data-category="tradisional best_seller parcel">

    <div class="bg-white dark:bg-slate-900 p-4 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all border border-transparent hover:border-amber-500/20 flex flex-col h-full relative">

        <div class="relative overflow-hidden rounded-[2rem] mb-5">
            <img src="https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&w=600&auto=format&fit=crop" 
                loading="lazy"
                alt="Ayam Lodho Signature"
                class="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700">

            <div class="absolute top-4 right-4 bg-amber-50/90 dark:bg-orange-950/50 backdrop-blur-sm px-3.5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 border border-amber-200/50 dark:border-orange-800/30 shadow-md">
                <span class="text-xs">
                    🔥
                </span>
                <span class="text-orange-700 italic dark:text-orange-300">
                    Best Seller
                </span>
            </div>

        </div>

        <div class="px-2 pb-2 flex flex-col flex-grow">

            <div class="flex gap-2 mb-3">
                <span class="px-2 py-0.5 text-[8px] font-extrabold uppercase bg-amber-100 text-amber-700 dark:bg-amber-900/40 rounded-full">
                    Tradisional
                </span>
                <span class="px-2 py-0.5 text-[8px] font-extrabold uppercase bg-pink-100 text-pink-700 dark:bg-pink-900/40 rounded-full">
                    Parcel
                </span>
            </div>

            <h3 class="font-black text-slate-950 dark:text-white text-xl mb-2">
                Ayam Lodho Signature
            </h3>

            <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-6">
                Ayam kampung pilihan dengan kuah santan kental rempah pedas otentik.
            </p>

            <div class="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">

                <div class="flex flex-col">
                    <span class="text-[10px] text-slate-400 font-bold uppercase">
                        Harga
                    </span>

                    <span class="text-xl font-black dark:text-white">
                        Rp 25k
                    </span>
                </div>

                <button class="tombol-tambah h-12 w-12 bg-green-600 hover:bg-green-500 text-white rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:ring-4 group-hover:ring-green-500/30 active:scale-90"
                        data-name="Ayam Lodho Signature" 
                        data-price="25000"
                        data-image="Storage/img/menu-makanan/ayam-lodho.jpeg">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                        class="w-6 h-6 transition-transform duration-300 group-hover:scale-125">
                        <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </button>

            </div>

        </div>

    </div>

</div>

<div class="group hidden md:block" 
    data-aos="fade-up" 
    data-category="tradisional best_seller parcel">

    <div class="bg-white dark:bg-slate-900 p-4 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all border border-transparent hover:border-amber-500/20 flex flex-col h-full relative">

        <div class="relative overflow-hidden rounded-[2rem] mb-5">
            <img src="https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&w=600&auto=format&fit=crop" 
                loading="lazy"
                alt="Ayam Lodho Signature"
                class="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700">

            <div class="absolute top-4 right-4 bg-amber-50/90 dark:bg-orange-950/50 backdrop-blur-sm px-3.5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 border border-amber-200/50 dark:border-orange-800/30 shadow-md">
                <span class="text-xs">
                    🔥
                </span>
                <span class="text-orange-700 italic dark:text-orange-300">
                    Best Seller
                </span>
            </div>

        </div>

        <div class="px-2 pb-2 flex flex-col flex-grow">

            <div class="flex gap-2 mb-3">
                <span class="px-2 py-0.5 text-[8px] font-extrabold uppercase bg-amber-100 text-amber-700 dark:bg-amber-900/40 rounded-full">
                    Tradisional
                </span>
                <span class="px-2 py-0.5 text-[8px] font-extrabold uppercase bg-pink-100 text-pink-700 dark:bg-pink-900/40 rounded-full">
                    Parcel
                </span>
            </div>

            <h3 class="font-black text-slate-950 dark:text-white text-xl mb-2">
                Ayam Lodho Signature
            </h3>

            <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-6">
                Ayam kampung pilihan dengan kuah santan kental rempah pedas otentik.
            </p>

            <div class="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">

                <div class="flex flex-col">
                    <span class="text-[10px] text-slate-400 font-bold uppercase">
                        Harga
                    </span>

                    <span class="text-xl font-black dark:text-white">
                        Rp 25k
                    </span>
                </div>

                <button class="tombol-tambah h-12 w-12 bg-green-600 hover:bg-green-500 text-white rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:ring-4 group-hover:ring-green-500/30 active:scale-90"
                        data-name="Ayam Lodho Signature" 
                        data-price="25000"
                        data-image="Storage/img/menu-makanan/ayam-lodho.jpeg">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                        class="w-6 h-6 transition-transform duration-300 group-hover:scale-125">
                        <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </button>

            </div>

        </div>

    </div>

</div>

<div class="group hidden md:block" 
    data-aos="fade-up" 
    data-category="tradisional best_seller parcel">

    <div class="bg-white dark:bg-slate-900 p-4 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all border border-transparent hover:border-amber-500/20 flex flex-col h-full relative">

        <div class="relative overflow-hidden rounded-[2rem] mb-5">
            <img src="https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&w=600&auto=format&fit=crop" 
                loading="lazy"
                alt="Ayam Lodho Signature"
                class="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700">

            <div class="absolute top-4 right-4 bg-amber-50/90 dark:bg-orange-950/50 backdrop-blur-sm px-3.5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 border border-amber-200/50 dark:border-orange-800/30 shadow-md">
                <span class="text-xs">
                    🔥
                </span>
                <span class="text-orange-700 italic dark:text-orange-300">
                    Best Seller
                </span>
            </div>

        </div>

        <div class="px-2 pb-2 flex flex-col flex-grow">

            <div class="flex gap-2 mb-3">
                <span class="px-2 py-0.5 text-[8px] font-extrabold uppercase bg-amber-100 text-amber-700 dark:bg-amber-900/40 rounded-full">
                    Tradisional
                </span>
                <span class="px-2 py-0.5 text-[8px] font-extrabold uppercase bg-pink-100 text-pink-700 dark:bg-pink-900/40 rounded-full">
                    Parcel
                </span>
            </div>

            <h3 class="font-black text-slate-950 dark:text-white text-xl mb-2">
                Ayam Lodho Signature
            </h3>

            <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-6">
                Ayam kampung pilihan dengan kuah santan kental rempah pedas otentik.
            </p>

            <div class="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">

                <div class="flex flex-col">
                    <span class="text-[10px] text-slate-400 font-bold uppercase">
                        Harga
                    </span>

                    <span class="text-xl font-black dark:text-white">
                        Rp 25k
                    </span>
                </div>

                <button class="tombol-tambah h-12 w-12 bg-green-600 hover:bg-green-500 text-white rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:ring-4 group-hover:ring-green-500/30 active:scale-90"
                        data-name="Ayam Lodho Signature" 
                        data-price="25000"
                        data-image="Storage/img/menu-makanan/ayam-lodho.jpeg">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                        class="w-6 h-6 transition-transform duration-300 group-hover:scale-125">
                        <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </button>

            </div>

        </div>

    </div>

</div>

<div class="group hidden md:block" 
    data-aos="fade-up" 
    data-category="tradisional best_seller parcel">

    <div class="bg-white dark:bg-slate-900 p-4 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all border border-transparent hover:border-amber-500/20 flex flex-col h-full relative">

        <div class="relative overflow-hidden rounded-[2rem] mb-5">
            <img src="https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&w=600&auto=format&fit=crop" 
                loading="lazy"
                alt="Ayam Lodho Signature"
                class="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700">

            <div class="absolute top-4 right-4 bg-amber-50/90 dark:bg-orange-950/50 backdrop-blur-sm px-3.5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 border border-amber-200/50 dark:border-orange-800/30 shadow-md">
                <span class="text-xs">
                    🔥
                </span>
                <span class="text-orange-700 italic dark:text-orange-300">
                    Best Seller
                </span>
            </div>

        </div>

        <div class="px-2 pb-2 flex flex-col flex-grow">

            <div class="flex gap-2 mb-3">
                <span class="px-2 py-0.5 text-[8px] font-extrabold uppercase bg-amber-100 text-amber-700 dark:bg-amber-900/40 rounded-full">
                    Tradisional
                </span>
                <span class="px-2 py-0.5 text-[8px] font-extrabold uppercase bg-pink-100 text-pink-700 dark:bg-pink-900/40 rounded-full">
                    Parcel
                </span>
            </div>

            <h3 class="font-black text-slate-950 dark:text-white text-xl mb-2">
                Ayam Lodho Signature
            </h3>

            <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-6">
                Ayam kampung pilihan dengan kuah santan kental rempah pedas otentik.
            </p>

            <div class="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">

                <div class="flex flex-col">
                    <span class="text-[10px] text-slate-400 font-bold uppercase">
                        Harga
                    </span>

                    <span class="text-xl font-black dark:text-white">
                        Rp 25k
                    </span>
                </div>

                <button class="tombol-tambah h-12 w-12 bg-green-600 hover:bg-green-500 text-white rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:ring-4 group-hover:ring-green-500/30 active:scale-90"
                        data-name="Ayam Lodho Signature" 
                        data-price="25000"
                        data-image="Storage/img/menu-makanan/ayam-lodho.jpeg">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                        class="w-6 h-6 transition-transform duration-300 group-hover:scale-125">
                        <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </button>

            </div>

        </div>

    </div>

</div>

<div class="group hidden md:block" 
    data-aos="fade-up" 
    data-category="tradisional best_seller parcel">

    <div class="bg-white dark:bg-slate-900 p-4 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all border border-transparent hover:border-amber-500/20 flex flex-col h-full relative">

        <div class="relative overflow-hidden rounded-[2rem] mb-5">
            <img src="https://images.unsplash.com/photo-1606471191009-63994c53433b?q=80&w=600&auto=format&fit=crop" 
                loading="lazy"
                alt="Ayam Lodho Signature"
                class="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700">

            <div class="absolute top-4 right-4 bg-amber-50/90 dark:bg-orange-950/50 backdrop-blur-sm px-3.5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2 border border-amber-200/50 dark:border-orange-800/30 shadow-md">
                <span class="text-xs">
                    🔥
                </span>
                <span class="text-orange-700 italic dark:text-orange-300">
                    Best Seller
                </span>
            </div>

        </div>

        <div class="px-2 pb-2 flex flex-col flex-grow">

            <div class="flex gap-2 mb-3">
                <span class="px-2 py-0.5 text-[8px] font-extrabold uppercase bg-amber-100 text-amber-700 dark:bg-amber-900/40 rounded-full">
                    Tradisional
                </span>
                <span class="px-2 py-0.5 text-[8px] font-extrabold uppercase bg-pink-100 text-pink-700 dark:bg-pink-900/40 rounded-full">
                    Parcel
                </span>
            </div>

            <h3 class="font-black text-slate-950 dark:text-white text-xl mb-2">
                Ayam Lodho Signature
            </h3>

            <p class="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-6">
                Ayam kampung pilihan dengan kuah santan kental rempah pedas otentik.
            </p>

            <div class="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-4">

                <div class="flex flex-col">
                    <span class="text-[10px] text-slate-400 font-bold uppercase">
                        Harga
                    </span>

                    <span class="text-xl font-black dark:text-white">
                        Rp 25k
                    </span>
                </div>

                <button class="tombol-tambah h-12 w-12 bg-green-600 hover:bg-green-500 text-white rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 group-hover:ring-4 group-hover:ring-green-500/30 active:scale-90"
                        data-name="Ayam Lodho Signature" 
                        data-price="25000"
                        data-image="Storage/img/menu-makanan/ayam-lodho.jpeg">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                        class="w-6 h-6 transition-transform duration-300 group-hover:scale-125">
                        <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </button>

            </div>

        </div>

    </div>

</div> -->
<!-- End Contoh Item || Desktop -->

<!-- Contoh Isi Menu || Mobile -->
<!-- <div class="md:hidden group"
    data-category="tradisional best_seller parcel">
    
    <div class="bg-white dark:bg-slate-900 p-3 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex gap-4">
        
        <div class="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-2xl">
            <img src="Storage/img/menu-makanan/ayam-lodho.jpeg" 
                alt="Ayam Lodho"
                class="w-full h-full object-cover">

            <div class="absolute top-1 left-1 bg-amber-50/90 dark:bg-orange-950/50 backdrop-blur-sm px-1.5 py-0.5 rounded-md text-[7px] font-black uppercase tracking-tighter flex items-center gap-2 border border-amber-200/50 dark:border-orange-800/30 shadow-md">
                <a class="text-[7px]">
                    🔥
                </a>
                <a class="text-orange-700 italic dark:text-orange-300">
                    Best Seller
                </a>
            </div>
        </div>

        <div class="flex-1 flex flex-col justify-between py-0.5">
            <div>
                <div class="flex gap-1.5 mb-1">
                    <a class="text-[7px] font-bold uppercase text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-md">
                        Tradisional
                    </a>
                </div>
                
                <h3 class="font-black text-slate-900 dark:text-white text-sm line-clamp-1">
                    Ayam Lodho Signature
                </h3>
                
                <p class="text-[10px] text-slate-400 dark:text-slate-500 line-clamp-1 mt-0.5">
                    Ayam kampung kuah santan kental...
                </p>
            </div>

            <div class="flex items-center justify-between mt-auto">
                <div class="flex flex-col">
                    <a class="text-[14px] font-black text-green-600">
                        Rp 25.000
                    </a>
                </div>

                <div class="flex items-center gap-2">
                    <button class="tombol-show h-7 w-7 bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-green-600 rounded-xl flex items-center justify-center transition-all duration-300 active:scale-90 border border-slate-200/50 dark:border-slate-700/50"
                            data-name="Ayam Lodho Signature" 
                            data-price="25000"
                            data-image="Storage/img/menu-makanan/ayam-lodho.jpeg"
                            data-desc="Ayam kampung pilihan dengan kuah santan kental rempah pedas otentik khas Tulungagung yang dimasak perlahan hingga meresap sempurna.">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </button>

                    <button class="tombol-tambah h-7 w-7 bg-green-600 hover:bg-green-500 text-white rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 active:scale-90"
                            data-name="Ayam Lodho Signature" 
                            data-price="25000"
                            data-image="Storage/img/menu-makanan/ayam-lodho.jpeg">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                            class="w-4 h-4 transition-transform duration-300 group-hover:scale-110">
                            <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="md:hidden group"
    data-category="tradisional best_seller parcel">
    
    <div class="bg-white dark:bg-slate-900 p-3 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex gap-4">
        
        <div class="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-2xl">
            <img src="Storage/img/menu-makanan/ayam-lodho.jpeg" 
                alt="Ayam Lodho"
                class="w-full h-full object-cover">

            <div class="absolute top-1 left-1 bg-amber-50/90 dark:bg-orange-950/50 backdrop-blur-sm px-1.5 py-0.5 rounded-md text-[7px] font-black uppercase tracking-tighter flex items-center gap-2 border border-amber-200/50 dark:border-orange-800/30 shadow-md">
                <a class="text-[7px]">
                    🔥
                </a>
                <a class="text-orange-700 italic dark:text-orange-300">
                    Best Seller
                </a>
            </div>
        </div>

        <div class="flex-1 flex flex-col justify-between py-0.5">
            <div>
                <div class="flex gap-1.5 mb-1">
                    <a class="text-[7px] font-bold uppercase text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-md">
                        Tradisional
                    </a>
                </div>
                
                <h3 class="font-black text-slate-900 dark:text-white text-sm line-clamp-1">
                    Ayam Lodho Signature
                </h3>
                
                <p class="text-[10px] text-slate-400 dark:text-slate-500 line-clamp-1 mt-0.5">
                    Ayam kampung kuah santan kental...
                </p>
            </div>

            <div class="flex items-center justify-between mt-auto">
                <div class="flex flex-col">
                    <a class="text-[14px] font-black text-green-600">
                        Rp 25.000
                    </a>
                </div>

                <div class="flex items-center gap-2">
                    <button class="tombol-show h-7 w-7 bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-green-600 rounded-xl flex items-center justify-center transition-all duration-300 active:scale-90 border border-slate-200/50 dark:border-slate-700/50"
                            data-name="Ayam Lodho Signature" 
                            data-price="25000"
                            data-image="Storage/img/menu-makanan/ayam-lodho.jpeg"
                            data-desc="Ayam kampung pilihan dengan kuah santan kental rempah pedas otentik khas Tulungagung yang dimasak perlahan hingga meresap sempurna.">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </button>

                    <button class="tombol-tambah h-7 w-7 bg-green-600 hover:bg-green-500 text-white rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 active:scale-90"
                            data-name="Ayam Lodho Signature" 
                            data-price="25000"
                            data-image="Storage/img/menu-makanan/ayam-lodho.jpeg">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                            class="w-4 h-4 transition-transform duration-300 group-hover:scale-110">
                            <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="md:hidden group"
    data-category="tradisional best_seller parcel">
    
    <div class="bg-white dark:bg-slate-900 p-3 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex gap-4">
        
        <div class="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-2xl">
            <img src="Storage/img/menu-makanan/ayam-lodho.jpeg" 
                alt="Ayam Lodho"
                class="w-full h-full object-cover">

            <div class="absolute top-1 left-1 bg-amber-50/90 dark:bg-orange-950/50 backdrop-blur-sm px-1.5 py-0.5 rounded-md text-[7px] font-black uppercase tracking-tighter flex items-center gap-2 border border-amber-200/50 dark:border-orange-800/30 shadow-md">
                <a class="text-[7px]">
                    🔥
                </a>
                <a class="text-orange-700 italic dark:text-orange-300">
                    Best Seller
                </a>
            </div>
        </div>

        <div class="flex-1 flex flex-col justify-between py-0.5">
            <div>
                <div class="flex gap-1.5 mb-1">
                    <a class="text-[7px] font-bold uppercase text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-md">
                        Tradisional
                    </a>
                </div>
                
                <h3 class="font-black text-slate-900 dark:text-white text-sm line-clamp-1">
                    Ayam Lodho Signature
                </h3>
                
                <p class="text-[10px] text-slate-400 dark:text-slate-500 line-clamp-1 mt-0.5">
                    Ayam kampung kuah santan kental...
                </p>
            </div>

            <div class="flex items-center justify-between mt-auto">
                <div class="flex flex-col">
                    <a class="text-[14px] font-black text-green-600">
                        Rp 25.000
                    </a>
                </div>

                <div class="flex items-center gap-2">
                    <button class="tombol-show h-7 w-7 bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-green-600 rounded-xl flex items-center justify-center transition-all duration-300 active:scale-90 border border-slate-200/50 dark:border-slate-700/50"
                            data-name="Ayam Lodho Signature" 
                            data-price="25000"
                            data-image="Storage/img/menu-makanan/ayam-lodho.jpeg"
                            data-desc="Ayam kampung pilihan dengan kuah santan kental rempah pedas otentik khas Tulungagung yang dimasak perlahan hingga meresap sempurna.">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </button>

                    <button class="tombol-tambah h-7 w-7 bg-green-600 hover:bg-green-500 text-white rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 active:scale-90"
                            data-name="Ayam Lodho Signature" 
                            data-price="25000"
                            data-image="Storage/img/menu-makanan/ayam-lodho.jpeg">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                            class="w-4 h-4 transition-transform duration-300 group-hover:scale-110">
                            <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="md:hidden group"
    data-category="tradisional best_seller parcel">
    
    <div class="bg-white dark:bg-slate-900 p-3 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex gap-4">
        
        <div class="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-2xl">
            <img src="Storage/img/menu-makanan/ayam-lodho.jpeg" 
                alt="Ayam Lodho"
                class="w-full h-full object-cover">

            <div class="absolute top-1 left-1 bg-amber-50/90 dark:bg-orange-950/50 backdrop-blur-sm px-1.5 py-0.5 rounded-md text-[7px] font-black uppercase tracking-tighter flex items-center gap-2 border border-amber-200/50 dark:border-orange-800/30 shadow-md">
                <a class="text-[7px]">
                    🔥
                </a>
                <a class="text-orange-700 italic dark:text-orange-300">
                    Best Seller
                </a>
            </div>
        </div>

        <div class="flex-1 flex flex-col justify-between py-0.5">
            <div>
                <div class="flex gap-1.5 mb-1">
                    <a class="text-[7px] font-bold uppercase text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-md">
                        Tradisional
                    </a>
                </div>
                
                <h3 class="font-black text-slate-900 dark:text-white text-sm line-clamp-1">
                    Ayam Lodho Signature
                </h3>
                
                <p class="text-[10px] text-slate-400 dark:text-slate-500 line-clamp-1 mt-0.5">
                    Ayam kampung kuah santan kental...
                </p>
            </div>

            <div class="flex items-center justify-between mt-auto">
                <div class="flex flex-col">
                    <a class="text-[14px] font-black text-green-600">
                        Rp 25.000
                    </a>
                </div>

                <div class="flex items-center gap-2">
                    <button class="tombol-show h-7 w-7 bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-green-600 rounded-xl flex items-center justify-center transition-all duration-300 active:scale-90 border border-slate-200/50 dark:border-slate-700/50"
                            data-name="Ayam Lodho Signature" 
                            data-price="25000"
                            data-image="Storage/img/menu-makanan/ayam-lodho.jpeg"
                            data-desc="Ayam kampung pilihan dengan kuah santan kental rempah pedas otentik khas Tulungagung yang dimasak perlahan hingga meresap sempurna.">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </button>

                    <button class="tombol-tambah h-7 w-7 bg-green-600 hover:bg-green-500 text-white rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 active:scale-90"
                            data-name="Ayam Lodho Signature" 
                            data-price="25000"
                            data-image="Storage/img/menu-makanan/ayam-lodho.jpeg">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                            class="w-4 h-4 transition-transform duration-300 group-hover:scale-110">
                            <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="md:hidden group"
    data-category="tradisional best_seller parcel">
    
    <div class="bg-white dark:bg-slate-900 p-3 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex gap-4">
        
        <div class="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-2xl">
            <img src="Storage/img/menu-makanan/ayam-lodho.jpeg" 
                alt="Ayam Lodho"
                class="w-full h-full object-cover">

            <div class="absolute top-1 left-1 bg-amber-50/90 dark:bg-orange-950/50 backdrop-blur-sm px-1.5 py-0.5 rounded-md text-[7px] font-black uppercase tracking-tighter flex items-center gap-2 border border-amber-200/50 dark:border-orange-800/30 shadow-md">
                <a class="text-[7px]">
                    🔥
                </a>
                <a class="text-orange-700 italic dark:text-orange-300">
                    Best Seller
                </a>
            </div>
        </div>

        <div class="flex-1 flex flex-col justify-between py-0.5">
            <div>
                <div class="flex gap-1.5 mb-1">
                    <a class="text-[7px] font-bold uppercase text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-md">
                        Tradisional
                    </a>
                </div>
                
                <h3 class="font-black text-slate-900 dark:text-white text-sm line-clamp-1">
                    Ayam Lodho Signature
                </h3>
                
                <p class="text-[10px] text-slate-400 dark:text-slate-500 line-clamp-1 mt-0.5">
                    Ayam kampung kuah santan kental...
                </p>
            </div>

            <div class="flex items-center justify-between mt-auto">
                <div class="flex flex-col">
                    <a class="text-[14px] font-black text-green-600">
                        Rp 25.000
                    </a>
                </div>

                <div class="flex items-center gap-2">
                    <button class="tombol-show h-7 w-7 bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-green-600 rounded-xl flex items-center justify-center transition-all duration-300 active:scale-90 border border-slate-200/50 dark:border-slate-700/50"
                            data-name="Ayam Lodho Signature" 
                            data-price="25000"
                            data-image="Storage/img/menu-makanan/ayam-lodho.jpeg"
                            data-desc="Ayam kampung pilihan dengan kuah santan kental rempah pedas otentik khas Tulungagung yang dimasak perlahan hingga meresap sempurna.">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </button>

                    <button class="tombol-tambah h-7 w-7 bg-green-600 hover:bg-green-500 text-white rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 active:scale-90"
                            data-name="Ayam Lodho Signature" 
                            data-price="25000"
                            data-image="Storage/img/menu-makanan/ayam-lodho.jpeg">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                            class="w-4 h-4 transition-transform duration-300 group-hover:scale-110">
                            <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="md:hidden group"
    data-category="tradisional best_seller parcel">
    
    <div class="bg-white dark:bg-slate-900 p-3 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex gap-4">
        
        <div class="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-2xl">
            <img src="Storage/img/menu-makanan/ayam-lodho.jpeg" 
                alt="Ayam Lodho"
                class="w-full h-full object-cover">

            <div class="absolute top-1 left-1 bg-amber-50/90 dark:bg-orange-950/50 backdrop-blur-sm px-1.5 py-0.5 rounded-md text-[7px] font-black uppercase tracking-tighter flex items-center gap-2 border border-amber-200/50 dark:border-orange-800/30 shadow-md">
                <a class="text-[7px]">
                    🔥
                </a>
                <a class="text-orange-700 italic dark:text-orange-300">
                    Best Seller
                </a>
            </div>
        </div>

        <div class="flex-1 flex flex-col justify-between py-0.5">
            <div>
                <div class="flex gap-1.5 mb-1">
                    <a class="text-[7px] font-bold uppercase text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-md">
                        Tradisional
                    </a>
                </div>
                
                <h3 class="font-black text-slate-900 dark:text-white text-sm line-clamp-1">
                    Ayam Lodho Signature
                </h3>
                
                <p class="text-[10px] text-slate-400 dark:text-slate-500 line-clamp-1 mt-0.5">
                    Ayam kampung kuah santan kental...
                </p>
            </div>

            <div class="flex items-center justify-between mt-auto">
                <div class="flex flex-col">
                    <a class="text-[14px] font-black text-green-600">
                        Rp 25.000
                    </a>
                </div>

                <div class="flex items-center gap-2">
                    <button class="tombol-show h-7 w-7 bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-green-600 rounded-xl flex items-center justify-center transition-all duration-300 active:scale-90 border border-slate-200/50 dark:border-slate-700/50"
                            data-name="Ayam Lodho Signature" 
                            data-price="25000"
                            data-image="Storage/img/menu-makanan/ayam-lodho.jpeg"
                            data-desc="Ayam kampung pilihan dengan kuah santan kental rempah pedas otentik khas Tulungagung yang dimasak perlahan hingga meresap sempurna.">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </button>

                    <button class="tombol-tambah h-7 w-7 bg-green-600 hover:bg-green-500 text-white rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 active:scale-90"
                            data-name="Ayam Lodho Signature" 
                            data-price="25000"
                            data-image="Storage/img/menu-makanan/ayam-lodho.jpeg">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                            class="w-4 h-4 transition-transform duration-300 group-hover:scale-110">
                            <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="md:hidden group"
    data-category="tradisional best_seller parcel">
    
    <div class="bg-white dark:bg-slate-900 p-3 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex gap-4">
        
        <div class="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-2xl">
            <img src="Storage/img/menu-makanan/ayam-lodho.jpeg" 
                alt="Ayam Lodho"
                class="w-full h-full object-cover">

            <div class="absolute top-1 left-1 bg-amber-50/90 dark:bg-orange-950/50 backdrop-blur-sm px-1.5 py-0.5 rounded-md text-[7px] font-black uppercase tracking-tighter flex items-center gap-2 border border-amber-200/50 dark:border-orange-800/30 shadow-md">
                <a class="text-[7px]">
                    🔥
                </a>
                <a class="text-orange-700 italic dark:text-orange-300">
                    Best Seller
                </a>
            </div>
        </div>

        <div class="flex-1 flex flex-col justify-between py-0.5">
            <div>
                <div class="flex gap-1.5 mb-1">
                    <a class="text-[7px] font-bold uppercase text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-md">
                        Tradisional
                    </a>
                </div>
                
                <h3 class="font-black text-slate-900 dark:text-white text-sm line-clamp-1">
                    Ayam Lodho Signature
                </h3>
                
                <p class="text-[10px] text-slate-400 dark:text-slate-500 line-clamp-1 mt-0.5">
                    Ayam kampung kuah santan kental...
                </p>
            </div>

            <div class="flex items-center justify-between mt-auto">
                <div class="flex flex-col">
                    <a class="text-[14px] font-black text-green-600">
                        Rp 25.000
                    </a>
                </div>

                <div class="flex items-center gap-2">
                    <button class="tombol-show h-7 w-7 bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-green-600 rounded-xl flex items-center justify-center transition-all duration-300 active:scale-90 border border-slate-200/50 dark:border-slate-700/50"
                            data-name="Ayam Lodho Signature" 
                            data-price="25000"
                            data-image="Storage/img/menu-makanan/ayam-lodho.jpeg"
                            data-desc="Ayam kampung pilihan dengan kuah santan kental rempah pedas otentik khas Tulungagung yang dimasak perlahan hingga meresap sempurna.">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </button>

                    <button class="tombol-tambah h-7 w-7 bg-green-600 hover:bg-green-500 text-white rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 active:scale-90"
                            data-name="Ayam Lodho Signature" 
                            data-price="25000"
                            data-image="Storage/img/menu-makanan/ayam-lodho.jpeg">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                            class="w-4 h-4 transition-transform duration-300 group-hover:scale-110">
                            <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="md:hidden group"
    data-category="tradisional best_seller parcel">
    
    <div class="bg-white dark:bg-slate-900 p-3 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex gap-4">
        
        <div class="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-2xl">
            <img src="Storage/img/menu-makanan/ayam-lodho.jpeg" 
                alt="Ayam Lodho"
                class="w-full h-full object-cover">

            <div class="absolute top-1 left-1 bg-amber-50/90 dark:bg-orange-950/50 backdrop-blur-sm px-1.5 py-0.5 rounded-md text-[7px] font-black uppercase tracking-tighter flex items-center gap-2 border border-amber-200/50 dark:border-orange-800/30 shadow-md">
                <a class="text-[7px]">
                    🔥
                </a>
                <a class="text-orange-700 italic dark:text-orange-300">
                    Best Seller
                </a>
            </div>
        </div>

        <div class="flex-1 flex flex-col justify-between py-0.5">
            <div>
                <div class="flex gap-1.5 mb-1">
                    <a class="text-[7px] font-bold uppercase text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-md">
                        Tradisional
                    </a>
                </div>
                
                <h3 class="font-black text-slate-900 dark:text-white text-sm line-clamp-1">
                    Ayam Lodho Signature
                </h3>
                
                <p class="text-[10px] text-slate-400 dark:text-slate-500 line-clamp-1 mt-0.5">
                    Ayam kampung kuah santan kental...
                </p>
            </div>

            <div class="flex items-center justify-between mt-auto">
                <div class="flex flex-col">
                    <a class="text-[14px] font-black text-green-600">
                        Rp 25.000
                    </a>
                </div>

                <div class="flex items-center gap-2">
                    <button class="tombol-show h-7 w-7 bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-green-600 rounded-xl flex items-center justify-center transition-all duration-300 active:scale-90 border border-slate-200/50 dark:border-slate-700/50"
                            data-name="Ayam Lodho Signature" 
                            data-price="25000"
                            data-image="Storage/img/menu-makanan/ayam-lodho.jpeg"
                            data-desc="Ayam kampung pilihan dengan kuah santan kental rempah pedas otentik khas Tulungagung yang dimasak perlahan hingga meresap sempurna.">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </button>

                    <button class="tombol-tambah h-7 w-7 bg-green-600 hover:bg-green-500 text-white rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 active:scale-90"
                            data-name="Ayam Lodho Signature" 
                            data-price="25000"
                            data-image="Storage/img/menu-makanan/ayam-lodho.jpeg">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                            class="w-4 h-4 transition-transform duration-300 group-hover:scale-110">
                            <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="md:hidden group"
    data-category="tradisional best_seller parcel">
    
    <div class="bg-white dark:bg-slate-900 p-3 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex gap-4">
        
        <div class="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-2xl">
            <img src="Storage/img/menu-makanan/ayam-lodho.jpeg" 
                alt="Ayam Lodho"
                class="w-full h-full object-cover">

            <div class="absolute top-1 left-1 bg-amber-50/90 dark:bg-orange-950/50 backdrop-blur-sm px-1.5 py-0.5 rounded-md text-[7px] font-black uppercase tracking-tighter flex items-center gap-2 border border-amber-200/50 dark:border-orange-800/30 shadow-md">
                <a class="text-[7px]">
                    🔥
                </a>
                <a class="text-orange-700 italic dark:text-orange-300">
                    Best Seller
                </a>
            </div>
        </div>

        <div class="flex-1 flex flex-col justify-between py-0.5">
            <div>
                <div class="flex gap-1.5 mb-1">
                    <a class="text-[7px] font-bold uppercase text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-md">
                        Tradisional
                    </a>
                </div>
                
                <h3 class="font-black text-slate-900 dark:text-white text-sm line-clamp-1">
                    Ayam Lodho Signature
                </h3>
                
                <p class="text-[10px] text-slate-400 dark:text-slate-500 line-clamp-1 mt-0.5">
                    Ayam kampung kuah santan kental...
                </p>
            </div>

            <div class="flex items-center justify-between mt-auto">
                <div class="flex flex-col">
                    <a class="text-[14px] font-black text-green-600">
                        Rp 25.000
                    </a>
                </div>

                <div class="flex items-center gap-2">
                    <button class="tombol-show h-7 w-7 bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-green-600 rounded-xl flex items-center justify-center transition-all duration-300 active:scale-90 border border-slate-200/50 dark:border-slate-700/50"
                            data-name="Ayam Lodho Signature" 
                            data-price="25000"
                            data-image="Storage/img/menu-makanan/ayam-lodho.jpeg"
                            data-desc="Ayam kampung pilihan dengan kuah santan kental rempah pedas otentik khas Tulungagung yang dimasak perlahan hingga meresap sempurna.">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </button>

                    <button class="tombol-tambah h-7 w-7 bg-green-600 hover:bg-green-500 text-white rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 active:scale-90"
                            data-name="Ayam Lodho Signature" 
                            data-price="25000"
                            data-image="Storage/img/menu-makanan/ayam-lodho.jpeg">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                            class="w-4 h-4 transition-transform duration-300 group-hover:scale-110">
                            <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="md:hidden group"
    data-category="tradisional best_seller parcel">
    
    <div class="bg-white dark:bg-slate-900 p-3 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex gap-4">
        
        <div class="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-2xl">
            <img src="Storage/img/menu-makanan/ayam-lodho.jpeg" 
                alt="Ayam Lodho"
                class="w-full h-full object-cover">

            <div class="absolute top-1 left-1 bg-amber-50/90 dark:bg-orange-950/50 backdrop-blur-sm px-1.5 py-0.5 rounded-md text-[7px] font-black uppercase tracking-tighter flex items-center gap-2 border border-amber-200/50 dark:border-orange-800/30 shadow-md">
                <a class="text-[7px]">
                    🔥
                </a>
                <a class="text-orange-700 italic dark:text-orange-300">
                    Best Seller
                </a>
            </div>
        </div>

        <div class="flex-1 flex flex-col justify-between py-0.5">
            <div>
                <div class="flex gap-1.5 mb-1">
                    <a class="text-[7px] font-bold uppercase text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-md">
                        Tradisional
                    </a>
                </div>
                
                <h3 class="font-black text-slate-900 dark:text-white text-sm line-clamp-1">
                    Ayam Lodho Signature
                </h3>
                
                <p class="text-[10px] text-slate-400 dark:text-slate-500 line-clamp-1 mt-0.5">
                    Ayam kampung kuah santan kental...
                </p>
            </div>

            <div class="flex items-center justify-between mt-auto">
                <div class="flex flex-col">
                    <a class="text-[14px] font-black text-green-600">
                        Rp 25.000
                    </a>
                </div>

                <div class="flex items-center gap-2">
                    <button class="tombol-show h-7 w-7 bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-green-600 rounded-xl flex items-center justify-center transition-all duration-300 active:scale-90 border border-slate-200/50 dark:border-slate-700/50"
                            data-name="Ayam Lodho Signature" 
                            data-price="25000"
                            data-image="Storage/img/menu-makanan/ayam-lodho.jpeg"
                            data-desc="Ayam kampung pilihan dengan kuah santan kental rempah pedas otentik khas Tulungagung yang dimasak perlahan hingga meresap sempurna.">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </button>

                    <button class="tombol-tambah h-7 w-7 bg-green-600 hover:bg-green-500 text-white rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 active:scale-90"
                            data-name="Ayam Lodho Signature" 
                            data-price="25000"
                            data-image="Storage/img/menu-makanan/ayam-lodho.jpeg">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                            class="w-4 h-4 transition-transform duration-300 group-hover:scale-110">
                            <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="md:hidden group"
    data-category="tradisional best_seller parcel">
    
    <div class="bg-white dark:bg-slate-900 p-3 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex gap-4">
        
        <div class="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-2xl">
            <img src="Storage/img/menu-makanan/ayam-lodho.jpeg" 
                alt="Ayam Lodho"
                class="w-full h-full object-cover">

            <div class="absolute top-1 left-1 bg-amber-50/90 dark:bg-orange-950/50 backdrop-blur-sm px-1.5 py-0.5 rounded-md text-[7px] font-black uppercase tracking-tighter flex items-center gap-2 border border-amber-200/50 dark:border-orange-800/30 shadow-md">
                <a class="text-[7px]">
                    🔥
                </a>
                <a class="text-orange-700 italic dark:text-orange-300">
                    Best Seller
                </a>
            </div>
        </div>

        <div class="flex-1 flex flex-col justify-between py-0.5">
            <div>
                <div class="flex gap-1.5 mb-1">
                    <a class="text-[7px] font-bold uppercase text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-md">
                        Tradisional
                    </a>
                </div>
                
                <h3 class="font-black text-slate-900 dark:text-white text-sm line-clamp-1">
                    Ayam Lodho Signature
                </h3>
                
                <p class="text-[10px] text-slate-400 dark:text-slate-500 line-clamp-1 mt-0.5">
                    Ayam kampung kuah santan kental...
                </p>
            </div>

            <div class="flex items-center justify-between mt-auto">
                <div class="flex flex-col">
                    <a class="text-[14px] font-black text-green-600">
                        Rp 25.000
                    </a>
                </div>

                <div class="flex items-center gap-2">
                    <button class="tombol-show h-7 w-7 bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-green-600 rounded-xl flex items-center justify-center transition-all duration-300 active:scale-90 border border-slate-200/50 dark:border-slate-700/50"
                            data-name="Ayam Lodho Signature" 
                            data-price="25000"
                            data-image="Storage/img/menu-makanan/ayam-lodho.jpeg"
                            data-desc="Ayam kampung pilihan dengan kuah santan kental rempah pedas otentik khas Tulungagung yang dimasak perlahan hingga meresap sempurna.">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </button>

                    <button class="tombol-tambah h-7 w-7 bg-green-600 hover:bg-green-500 text-white rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 active:scale-90"
                            data-name="Ayam Lodho Signature" 
                            data-price="25000"
                            data-image="Storage/img/menu-makanan/ayam-lodho.jpeg">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                            class="w-4 h-4 transition-transform duration-300 group-hover:scale-110">
                            <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="md:hidden group"
    data-category="tradisional best_seller parcel">
    
    <div class="bg-white dark:bg-slate-900 p-3 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-sm flex gap-4">
        
        <div class="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-2xl">
            <img src="Storage/img/menu-makanan/ayam-lodho.jpeg" 
                alt="Ayam Lodho"
                class="w-full h-full object-cover">

            <div class="absolute top-1 left-1 bg-amber-50/90 dark:bg-orange-950/50 backdrop-blur-sm px-1.5 py-0.5 rounded-md text-[7px] font-black uppercase tracking-tighter flex items-center gap-2 border border-amber-200/50 dark:border-orange-800/30 shadow-md">
                <a class="text-[7px]">
                    🔥
                </a>
                <a class="text-orange-700 italic dark:text-orange-300">
                    Best Seller
                </a>
            </div>
        </div>

        <div class="flex-1 flex flex-col justify-between py-0.5">
            <div>
                <div class="flex gap-1.5 mb-1">
                    <a class="text-[7px] font-bold uppercase text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded-md">
                        Tradisional
                    </a>
                </div>
                
                <h3 class="font-black text-slate-900 dark:text-white text-sm line-clamp-1">
                    Ayam Lodho Signature
                </h3>
                
                <p class="text-[10px] text-slate-400 dark:text-slate-500 line-clamp-1 mt-0.5">
                    Ayam kampung kuah santan kental...
                </p>
            </div>

            <div class="flex items-center justify-between mt-auto">
                <div class="flex flex-col">
                    <a class="text-[14px] font-black text-green-600">
                        Rp 25.000
                    </a>
                </div>

                <div class="flex items-center gap-2">
                    <button class="tombol-show h-7 w-7 bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-green-600 rounded-xl flex items-center justify-center transition-all duration-300 active:scale-90 border border-slate-200/50 dark:border-slate-700/50"
                            data-name="Ayam Lodho Signature" 
                            data-price="25000"
                            data-image="Storage/img/menu-makanan/ayam-lodho.jpeg"
                            data-desc="Ayam kampung pilihan dengan kuah santan kental rempah pedas otentik khas Tulungagung yang dimasak perlahan hingga meresap sempurna.">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-4 h-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </button>

                    <button class="tombol-tambah h-7 w-7 bg-green-600 hover:bg-green-500 text-white rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 active:scale-90"
                            data-name="Ayam Lodho Signature" 
                            data-price="25000"
                            data-image="Storage/img/menu-makanan/ayam-lodho.jpeg">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" 
                            class="w-4 h-4 transition-transform duration-300 group-hover:scale-110">
                            <path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
</div> -->
<!-- End Contoh Isi Menu || Mobile -->