const videoApp = document.querySelector('.app-video');
const buttonControls = document.querySelector('.app-button__controls');
const buttonPrev = document.querySelector('.app-button__prev');
const buttonNext = document.querySelector('.app-button__next');
const iconButtonControls = buttonControls.children[0].classList;

const handlePlayPause = () => {
    if(iconButtonControls.contains('fa-play')) {
        iconButtonControls.remove('fa-play');
        iconButtonControls.add('fa-pause');
    }
    else {
        iconButtonControls.remove('fa-pause');
        iconButtonControls.add('fa-play');
    }
}

buttonControls.addEventListener('click', () => {
    buttonControls.classList.toggle('video-play');
    buttonControls.classList.contains('video-play') ? videoApp.play() : videoApp.pause();
    handlePlayPause();
});

buttonNext.addEventListener('click', () => {
    videoApp.currentTime = videoApp.currentTime + 5;
});

buttonPrev.addEventListener('click', () => {
    videoApp.currentTime = videoApp.currentTime - 5;
});