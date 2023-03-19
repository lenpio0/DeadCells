var roofVideo = document.getElementById("roof-video")
if (roofVideo) {
   roofVideo.addEventListener("click", function (evt) {
       if (roofVideo.requestFullscreen) {
           roofVideo.requestFullscreen();
       }
       else if (roofVideo.msRequestFullscreen) {
           roofVideo.msRequestFullscreen();
       }
       else if (roofVideo.mozRequestFullScreen) {
           roofVideo.mozRequestFullScreen();
       }
       else if (roofVideo.webkitRequestFullScreen) {
           roofVideo.webkitRequestFullScreen();
       }
   }, false);
}
var bossVideo = document.getElementById("boss-video")
if (bossVideo) {
   bossVideo.addEventListener("click", function (evt) {
       if (bossVideo.requestFullscreen) {
           bossVideo.requestFullscreen();
       }
       else if (bossVideo.msRequestFullscreen) {
           bossVideo.msRequestFullscreen();
       }
       else if (bossVideo.mozRequestFullScreen) {
           bossVideo.mozRequestFullScreen();
       }
       else if (bossVideo.webkitRequestFullScreen) {
           bossVideo.webkitRequestFullScreen();
       }
   }, false);
}
