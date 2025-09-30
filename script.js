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

document.getElementById("tombol").addEventListener("click", function() {
    var nomor = "6289518139718";
    var pesan = " ";

    var url = "https://wa.me/"+ 6289518139718 +"?text=" + encodeURIComponent(pesan);

    window.open(url, "_blank");
});