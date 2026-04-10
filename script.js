document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('video');
    const muteButton = document.getElementById('muteButton');
    const muteIcon = muteButton.querySelector('i');

    muteButton.addEventListener('click', function() {
        if (video.muted) {
            video.muted = false;
            muteIcon.classList.remove('fa-volume-mute');
            muteIcon.classList.add('fa-volume-up');
        } else {
            video.muted = true;
            muteIcon.classList.remove('fa-volume-up');
            muteIcon.classList.add('fa-volume-mute');
        }
    });
});

const music = document.getElementById("bgMusic");
const muteBtn = document.getElementById("muteButton");

// play + unmute saat user klik dimana saja
document.addEventListener("click", () => {
    music.muted = false;
    music.play();
}, { once: true });

// tombol mute
muteBtn.addEventListener("click", () => {
    if (music.muted) {
        music.muted = false;
        muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
    } else {
        music.muted = true;
        muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
    }
});

document.getElementById("tombol").addEventListener("click", function() {
    var nomor = "6289518139718";
    var pesan = " ";

    var url = "https://wa.me/"+ 6289518139718 +"?text=" + encodeURIComponent(pesan);

    window.open(url, "_blank");
});
