const videoApp = document.querySelector('.app-video');
const buttonPlay = document.querySelector('.app-button__play');
const buttonPause = document.querySelector('.app-button__pause');


buttonPlay.addEventListener('click', () => {
    videoApp.play();
});

buttonPause.addEventListener('click', () => {
    videoApp.pause();
});


