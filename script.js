const videos = [document.getElementById('video1'), document.getElementById('video2')];
let currentVideo = 0;

function showVideo(videoNumber) {
    if (videoNumber - 1 === currentVideo) return;

    videos[currentVideo].style.opacity = '0';
    videos[currentVideo].pause();
    videos[currentVideo].style.display = 'none';

    currentVideo = videoNumber - 1;

    videos[currentVideo].style.display = 'block';
    setTimeout(() => {
        videos[currentVideo].style.opacity = '1';
        videos[currentVideo].play();
    }, 50);
}

videos.forEach(video => {
    video.controls = false;
    video.muted = true;
    video.loop = true;
});

videos[currentVideo].style.display = 'block';
videos[currentVideo].style.opacity = '1';
videos[currentVideo].play();
