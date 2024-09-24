document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const stopBtn = document.getElementById('stopBtn');

    playPauseBtn.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            audioPlayer.pause();
            playPauseBtn.textContent = 'Play';
        }
    });

    stopBtn.addEventListener('click', () => {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        playPauseBtn.textContent = 'Play';
    });
});
