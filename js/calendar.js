document.addEventListener('alpine:init', () => {
    Alpine.directive('datepicker', (el, { expression }, { evaluateLater, cleanup }) => {
        // PERBAIKAN: Gunakan fungsi evaluasi yang menerima parameter $event
        const setModel = evaluateLater(`${expression} = $event`);

        const picker = flatpickr(el, {
            dateFormat: "Y-m-d",
            minDate: "today", 
            disableMobile: true,
            prevArrow: '<i class="fa-solid fa-chevron-left text-[10px]"></i>',
            nextArrow: '<i class="fa-solid fa-chevron-right text-[10px]"></i>',
            locale: {
                firstDayOfWeek: 1,
                weekdays: {
                    shorthand: ["Min", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"],
                    longhand: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"]
                },
                months: {
                    shorthand: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"],
                    longhand: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]
                }
            },

            onChange: (selectedDates, dateStr) => {
                // Pastikan mengirim scope $event agar Alpine mengenalnya
                setModel(() => {}, { scope: { $event: dateStr } });
                
                // Memberitahu Alpine bahwa ada input baru untuk memicu validasi
                el.dispatchEvent(new CustomEvent('input', { bubbles: true }));
            }
        });

        cleanup(() => picker.destroy());
    });
});