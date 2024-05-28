document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('background-music');
    const playButton = document.getElementById('play-button');
    const clickMeButton = document.getElementById('click-me-button');
    audio.volume = 0.5; // Set volume to 50%

    audio.play().catch(error => {
        console.log('Autoplay was prevented:', error);
        playButton.style.display = 'inline-block';
    });

    playButton.addEventListener('click', () => {
        audio.play();
        playButton.style.display = 'none';
        clickMeButton.style.display = 'inline-block'; // Show the second button
    });

    clickMeButton.addEventListener('click', () => {
        alert('I LOVE YOU SAYANGG');
    });
});
