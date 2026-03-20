tailwind.config = {
    darkMode: 'class', // Mengaktifkan dark mode berbasis class (untuk Alpine.js)
    theme: {
        extend: {
            // Anda bisa menambahkan warna custom bisnis Anda di sini nanti
            colors: {
                brand: {
                    green: {
                        light: '#4ade80', // hijau muda (fresh)
                        dark: '#166534',  // hijau tua (premium/trusted)
                    },
                        light: '#38bdf8',
                        dark: '#1e40af',
                    },
                },
            fontFamily: {
                sans: ['Inter', 'sans-serif'], // Font utama kamu
                // Daftarkan font script di sini
                'script': ['Caveat', 'cursive'], 
            },
        }
    }
}