@import "tailwindcss";
@config "../tailwind.config.js";

@theme {
  /* Font Utama (Sans) */
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
  
  /* Font Tulisan Tangan (Script) */
  --font-script: "Caveat", cursive;

  /* Font Jakarta yang tadi kita buat */
  --font-jakarta: "Plus Jakarta Sans", sans-serif;
}

/* Mengaktifkan Dark Mode strategi 'class' */
@custom-variant dark (&:where(.dark, .dark *));