// Botón para reproducir la canción de YouTube
document.getElementById("playSongButton").addEventListener("click", function() {
    const songContainer = document.getElementById("songContainer");
    songContainer.innerHTML = `
        <iframe width="560" height="315" src="https://www.youtube.com/embed/PykXcyfPUk4?autoplay=1" 
        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
});

// Mensajes bonitos sobre amor y flores amarillas
const messages = [
    "En cada flor amarilla veo el brillo de tu sonrisa.",
    "Las flores amarillas representan nuestro amor vibrante y eterno.",
    "Cada pétalo me recuerda los momentos más felices contigo.",
    "Como las flores en primavera, mi amor por ti florece más cada día.",
    "Tu amor ilumina mi vida como el sol lo hace con los campos de flores."
];

// Variable para controlar qué mensaje se mostrará
let currentMessageIndex = 0;

// Botón para mostrar mensajes bonitos
document.getElementById("showMessagesButton").addEventListener("click", function() {
    const messagesContainer = document.getElementById("messagesContainer");
    messagesContainer.innerHTML = ""; // Limpiar mensaje anterior

    // Mostrar un nuevo mensaje si aún quedan mensajes
    if (currentMessageIndex < messages.length) {
        const p = document.createElement('p');
        p.textContent = messages[currentMessageIndex];
        messagesContainer.appendChild(p);
        currentMessageIndex++; // Incrementar el índice para el siguiente mensaje
    } else {
        const p = document.createElement('p');
        p.textContent = "Te amo, mi niña ❤️"; // Mensaje final personalizado
        messagesContainer.appendChild(p);
    }
});
