const characterButtons = document.querySelectorAll('.character button');
const characterVideo = document.getElementById('characterVideo');

characterButtons.forEach(button => {
    button.addEventListener('click', () => {
    const videoSrc = button.dataset.video;
    characterVideo.src = videoSrc;
    characterVideo.play();
});
});
