// --- Music Toggle Logic ---
const musicToggleBtn = document.getElementById('music-toggle');
const bgMusic = document.getElementById('bg-music');
const playIcon = document.getElementById('music-icon-play');
const pauseIcon = document.getElementById('music-icon-pause');

musicToggleBtn.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
    } else {
        bgMusic.pause();
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
    }
});