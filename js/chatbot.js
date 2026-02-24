// chatbot.js

const GEMINI_API_KEY = "AIzaSyBPoE_xDviP4PV02B7Yy1de5RDyUTkttRs"; 

async function askAI() {
    const input = document.getElementById('ai-input');
    const body = document.getElementById('ai-chat-body');
    const userText = input.value.trim();

    if (!userText) return;

    // Tampilkan pesan user
    body.innerHTML += `
        <div class="flex justify-end mb-4">
            <div class="bg-cancerina-green text-white p-4 rounded-2xl rounded-tr-none max-w-[85%] shadow-sm">
                ${userText}
            </div>
        </div>`;
    
    input.value = '';
    body.scrollTop = body.scrollHeight;

    // Loading State
    const loadingId = 'loading-' + Date.now();
    body.innerHTML += `
        <div id="${loadingId}" class="flex justify-start mb-4">
            <div class="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-2xl rounded-tl-none text-[10px] italic opacity-50">
                Cancerina AI sedang mengetik...
            </div>
        </div>`;
    body.scrollTop = body.scrollHeight;

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: "Kamu adalah Cancerina AI, asisten ramah untuk Cancerina Catering Trenggalek. Jawab singkat, tanpa markdown, maksimal 3 paragraf. Pertanyaan: " + userText
                    }]
                }]
            })
        });

        const data = await response.json();
        let aiResponse = data.candidates[0].content.parts[0].text;

        // Bersihkan simbol bintang (*) jika Gemini masih mengirimkannya
        aiResponse = aiResponse.replace(/\*/g, '');

        document.getElementById(loadingId).remove();
        body.innerHTML += `
            <div class="flex justify-start mb-4">
                <div class="bg-zinc-100 dark:bg-zinc-800 p-4 rounded-2xl rounded-tl-none max-w-[85%] shadow-sm border border-zinc-200/50 dark:border-white/5 animate-fade-in">
                    ${aiResponse}
                </div>
            </div>`;
        
    } catch (error) {
        if(document.getElementById(loadingId)) document.getElementById(loadingId).remove();
        body.innerHTML += `<div class="text-center text-[10px] text-red-500">Gagal terhubung ke AI. Periksa koneksi atau API Key.</div>`;
    }

    body.scrollTop = body.scrollHeight;
}

// Fungsi Toggle Jendela Chat
function toggleAIChat() {
    const chatWindow = document.getElementById('ai-chat-window');
    chatWindow.classList.toggle('hidden');
    chatWindow.classList.toggle('flex');
}

// Support Enter Key
document.getElementById('ai-input')?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') askAI();
});
