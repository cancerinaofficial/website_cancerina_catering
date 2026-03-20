const DATABASE_MENU = [
    {
        id: 1,
        nama: "Ayam Lodho Signature",
        harga: "200.000",
        hargaInt: 200000,
        kategori: "tradisional best_seller",
        deskripsi: "Ayam kampung bakar dengan bumbu rempah khas, disajikan dalam kuah santan gurih pedas yang kaya rasa. Aroma smoky dan cita rasa autentik Jawa Timur.",
        gambar: "Storage/img/menu-makanan/ayam-lodho.jpeg",
        bestSeller: true
    },
    {
        id: 2,
        nama: "Tumpeng",
        harga: "50.000",
        hargaInt: 50000,
        kategori: "tradisional",
        deskripsi: "Nasi kuning dengan aneka lauk tradisional pilihan, disajikan lengkap dengan rasa gurih, harum rempah, dan tampilan yang istimewa dan sempurna untuk momen spesial dan kebersamaan.",
        gambar: "Storage/img/menu-makanan/tumpeng.jpeg",
        bestSeller: false
    },
    {
        id: 3,
        nama: "Nasi Kotak",
        harga: "18.000",
        hargaInt: 18000,
        kategori: "nasi_kotak",
        deskripsi: "Nasi pulen dan lauk pilihan yang lengkap, diolah dengan bumbu khas Nusantara. Lezat, higienis, dan siap menemani setiap momen.",
        gambar: "Storage/img/menu-makanan/nasi-kotak.jpeg",
        bestSeller: true,
        minOrder: 10
    },
    {
        id: 4,
        nama: "Snack Box (Basah)",
        harga: "12.000",
        hargaInt: 12000,
        kategori: "snack_box",
        deskripsi: "3 pilihan jajanan pasar basah yang lembut dan manis, dipadukan dengan air mineral kemasan gelas. Praktis, segar, dan cocok untuk berbagai acara.",
        gambar: "Storage/img/menu-makanan/snack-box-basah.jpeg",
        bestSeller: true,
        minOrder: 10
    },
    {
        id: 5,
        nama: "Snack Box (Kering)",
        harga: "18.000",
        hargaInt: 18000,
        kategori: "snack_box",
        deskripsi: "Snack box berisi 3 pilihan jajanan pasar kering yang renyah dan gurih, dilengkapi air mineral kemasan gelas. Praktis, tahan lama, dan cocok untuk berbagai acara.",
        gambar: "Storage/img/menu-makanan/snack-box-kering.jpeg",
        bestSeller: false,
        minOrder: 10
    },
    {
        id: 6,
        nama: "Acar Matang",
        harga: "30.000",
        hargaInt: 30000,
        kategori: "sayur lainnya",
        deskripsi: "Acar matang segar dengan perpaduan sayur pilihan dengan kuah asam manis yang menyegarkan. Pas sebagai pelengkap yang menambah cita rasa di setiap hidangan.",
        gambar: "Storage/img/menu-makanan/acar-matang.jpeg",
        bestSeller: false
    },
    {
        id: 7,
        nama: "Tjap Tjay",
        harga: "50.000",
        hargaInt: 50000,
        kategori: "sayur",
        deskripsi: "Masakan sayur segar dengan aneka pilihan bahan yang dimasak dalam kuah gurih ringan—sehat, lezat, dan cocok dinikmati kapan saja.",
        gambar: "Storage/img/menu-makanan/tjap-tjay.jpeg",
        bestSeller: false
    },
    {
        id: 8,
        nama: "Acar Mentah",
        harga: "25.000",
        hargaInt: 25000,
        kategori: "sayur lainnya",
        deskripsi: "Acar mentah segar dari irisan sayur pilihan dengan rasa asam manis yang ringan dan renyah. Memberi sensasi segar sebagai pelengkap hidangan.",
        gambar: "Storage/img/menu-makanan/acar-mentah.jpeg",
        bestSeller: false
    },
    {
        id: 9,
        nama: "Sambal Goreng Jeroan",
        harga: "50.000",
        hargaInt: 50000,
        kategori: "sayur lainnya",
        deskripsi: "Sambal goreng jeroan dengan potongan hati, paru, dan usus yang dimasak dalam bumbu pedas gurih bersantan. Kaya rempah, nikmat, dan cocok sebagai lauk pendamping nasi hangat.",
        gambar: "Storage/img/menu-makanan/sambal-goreng-jeroan.jpeg",
        bestSeller: false
    },
    {
        id: 10,
        nama: "Mie Goreng",
        harga: "50.000",
        hargaInt: 50000,
        kategori: "mie lainnya",
        deskripsi: "Mie goreng dengan bumbu gurih manis khas Nusantara, dipadukan dengan sayur dan topping pilihan. Aromatik, lezat, dan selalu jadi favorit.",
        gambar: "Storage/img/menu-makanan/mie-goreng.jpeg",
        bestSeller: false
    },
    {
        id: 11,
        nama: "Mie Hun / Putih",
        harga: "50.000",
        hargaInt: 50000,
        kategori: "mie lainnya",
        deskripsi: "Mie hun putih dengan tekstur lembut dan ringan, dimasak dengan bumbu gurih sederhana serta sayuran pilihan. Hangat, lezat, dan nyaman dinikmati kapan saja.",
        gambar: "Storage/img/menu-makanan/mie-hun.jpeg",
        bestSeller: false
    },
    {
        id: 12,
        nama: "Kering Tempe",
        harga: "50.000",
        hargaInt: 50000,
        kategori: "sayur lainnya",
        deskripsi: "Kering tempe dengan irisan tempe renyah yang dimasak dalam bumbu manis pedas khas. Gurih, tahan lama, dan jadi pelengkap favorit di setiap hidangan.",
        gambar: "Storage/img/menu-makanan/kering-tempe.jpeg",
        bestSeller: false
    },
    {
        id: 13,
        nama: "Mie Kuah",
        harga: "50.000",
        hargaInt: 50000,
        kategori: "mie lainnya",
        deskripsi: "Mie kuah hangat dengan kuah gurih yang kaya rasa, dipadukan dengan sayur dan topping pilihan—nikmat, menghangatkan, dan pas dinikmati kapan saja.",
        gambar: "Storage/img/menu-makanan/mie-kuah.jpeg",
        bestSeller: false
    },
    {
        id: 14,
        nama: "Tumis Buncis",
        harga: "50.000",
        hargaInt: 50000,
        kategori: "sayur lainnya",
        deskripsi: "Tumis buncis segar yang dimasak dengan bumbu gurih sederhana. Renyah, lezat, dan jadi pelengkap sempurna di setiap hidangan.",
        gambar: "Storage/img/menu-makanan/tumis-buncis.jpeg",
        bestSeller: false
    },
    {
        id: 15,
        nama: "Aneka Lalapan",
        harga: "18.000",
        hargaInt: 18000,
        kategori: "nasi_kotak",
        deskripsi: "",
        gambar: "Storage/img/menu-makanan/lalapan.jpeg",
        bestSeller: false,
        minOrder: 10
    },
    {
        id: 16,
        nama: "Ayam Balado",
        harga: "18.000",
        hargaInt: 18000,
        kategori: "nasi_kotak ayam",
        deskripsi: "Ayam balado berbumbu pedas gurih khas Nusantara, dilengkapi lauk pelengkap pilihan—praktis, lezat, dan siap memanjakan selera di setiap kesempatan.",
        gambar: "Storage/img/menu-makanan/ayam-balado.jpeg",
        bestSeller: false,
        minOrder: 10
    },
    {
        id: 17,
        nama: "Ayam Bakar",
        harga: "18.000",
        hargaInt: 18000,
        kategori: "nasi_kotak ayam",
        deskripsi: "Ayam bakar dengan bumbu rempah meresap hingga ke dalam, dipanggang hingga harum dengan sentuhan manis gurih. Lezat, juicy, dan menggugah selera.",
        gambar: "Storage/img/menu-makanan/ayam-bakar.jpeg",
        bestSeller: false,
        minOrder: 10
    },
    {
        id: 18,
        nama: "Ayam Goreng",
        harga: "18.000",
        hargaInt: 18000,
        kategori: "nasi_kotak ayam",
        deskripsi: "Ayam goreng dengan bumbu rempah meresap, digoreng hingga kulitnya renyah dan dagingnya juicy. Gurih, lezat, dan selalu jadi favorit.",
        gambar: "Storage/img/menu-makanan/ayam-goreng.jpeg",
        bestSeller: false,
        minOrder: 10
    },
    {
        id: 19,
        nama: "Ayam Kentucky",
        harga: "18.000",
        hargaInt: 18000,
        kategori: "nasi_kotak ayam",
        deskripsi: "Ayam Kentucky dengan balutan tepung renyah dan bumbu gurih khas, digoreng hingga golden crispy di luar dan juicy di dalam. Praktis, lezat, dan disukai semua kalangan.",
        gambar: "Storage/img/menu-makanan/ayam-kentucky.jpeg",
        bestSeller: false,
        minOrder: 10
    },
    {
        id: 20,
        nama: "Ayam Laos",
        harga: "18.000",
        hargaInt: 18000,
        kategori: "nasi_kotak ayam",
        deskripsi: "Ayam laos dengan taburan serundeng lengkuas yang gurih dan harum, dimasak dengan bumbu rempah meresap. Lezat, renyah, dan kaya cita rasa tradisional.",
        gambar: "Storage/img/menu-makanan/ayam-laos.jpeg",
        bestSeller: false,
        minOrder: 10
    },
    {
        id: 21,
        nama: "Tempe Bacem",
        harga: "18.000",
        hargaInt: 18000,
        kategori: "nasi_kotak lainnya",
        deskripsi: "Tempe bacem dengan cita rasa manis gurih khas Jawa, dimasak hingga bumbu meresap sempurna. Lembut, legit, dan cocok sebagai lauk pelengkap.",
        gambar: "Storage/img/menu-makanan/tempe-bacem.jpeg",
        bestSeller: false,
        minOrder: 10
    },
    {
        id: 22,
        nama: "Tahu Bacem",
        harga: "18.000",
        hargaInt: 18000,
        kategori: "nasi_kotak lainnya",
        deskripsi: "Tahu bacem dengan cita rasa manis gurih khas Jawa, dimasak hingga bumbu meresap sempurna. Lembut, legit, dan nikmat sebagai lauk pelengkap.",
        gambar: "Storage/img/menu-makanan/tahu-bacem.jpeg",
        bestSeller: false,
        minOrder: 10
    },
    {
        id: 23,
        nama: "Telur Bacem",
        harga: "18.000",
        hargaInt: 18000,
        kategori: "nasi_kotak lainnya",
        deskripsi: "Telur bacem dengan rasa manis gurih khas Jawa, dimasak hingga bumbu meresap sempurna. Empuk, lezat, dan cocok sebagai pelengkap hidangan.",
        gambar: "Storage/img/menu-makanan/telur-bacem.jpeg",
        bestSeller: false,
        minOrder: 10
    },
    {
        id: 24,
        nama: "Telur Balado",
        harga: "18.000",
        hargaInt: 18000,
        kategori: "nasi_kotak lainnya",
        deskripsi: "Telur balado dengan balutan sambal merah pedas gurih yang meresap. Lezat, menggugah selera, dan cocok jadi lauk favorit pendamping nasi hangat.",
        gambar: "Storage/img/menu-makanan/telur-balado.jpeg",
        bestSeller: false,
        minOrder: 10
    },
    {
        id: 25,
        nama: "Telur Bali",
        harga: "18.000",
        hargaInt: 18000,
        kategori: "nasi_kotak lainnya",
        deskripsi: "Telur bumbu Bali dengan kuah merah pedas gurih khas rempah Nusantara. Kaya rasa, aromatik, dan nikmat sebagai lauk pendamping nasi hangat.",
        gambar: "Storage/img/menu-makanan/telur-bali.jpeg",
        bestSeller: false,
        minOrder: 10
    }

];