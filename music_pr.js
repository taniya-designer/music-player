document.addEventListener('DOMContentLoaded', () => {
    const audioPlayer = document.getElementById('audioPlayer');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const stopBtn = document.getElementById('stopBtn');
    const seekBar = document.getElementById('seekBar');
    const currentTime = document.getElementById('currentTime');
    const duration = document.getElementById('duration');

 

    

    
    let isPlaying = false;

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    }

    audioPlayer.addEventListener('loadedmetadata', () => {
        seekBar.max = audioPlayer.duration;
        duration.textContent = formatTime(audioPlayer.duration);
    });

    audioPlayer.addEventListener('timeupdate', () => {
        seekBar.value = audioPlayer.currentTime;
        currentTime.textContent = formatTime(audioPlayer.currentTime);
    });

    playPauseBtn.addEventListener('click', () => {
        if (isPlaying) {
            audioPlayer.pause();
            playPauseBtn.textContent = 'Play';
        } else {
            audioPlayer.play();
            playPauseBtn.textContent = 'Pause';
        }
        isPlaying = !isPlaying;
    });

    stopBtn.addEventListener('click', () => {
        audioPlayer.pause();
        audioPlayer.currentTime = 0;
        playPauseBtn.textContent = 'Play';
        isPlaying = false;
    });

    seekBar.addEventListener('input', () => {
        audioPlayer.currentTime = seekBar.value;
    });
});

