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



let sidenav = document.getElementById("sideNav");
let open = document.getElementById("open");
let close = document.getElementById("close");
let header = document.getElementById("header");
let links = document.getElementById("links");

open.onclick = openNav;
close.onclick = closeNav;

function openNav() {
    sidenav.classList.remove("hidden");
    open.classList.add("hidden");
    header.classList.remove("shadow-header");
    header.classList.replace("bg-black-header", "bg-black-header-open");
    links.classList.replace("bg-black-header", "bg-black-header-open");

}

function closeNav() {
    sidenav.classList.add("hidden");
    open.classList.remove("hidden");
    header.classList.add("shadow-header");
    header.classList.replace("bg-black-header-open", "bg-black-header");
    links.classList.replace("bg-black-header-open", "bg-black-header");

}