console.log("Video from Pexel");
console.log(
  "Beautiful Flower favicon icon by Icons8",
  "https://icons8.com/icons/set/beautiful-flower"
);

var frameNumber = 0; // start video at frame 0
// lower numbers = faster playback
let playbackConst = 600;
// get page height from video duration
let setHeight = document.querySelector(".start");
// select video element
let vid = document.querySelector(".video");
// var vid = $('#v0')[0]; // jquery option

// dynamically set the page height according to video length
vid.addEventListener("loadedmetadata", function() {
  setHeight.style.height = Math.floor(vid.duration) * playbackConst + "px";
});

// Use requestAnimationFrame for smooth playback
function scrollPlay() {
  var frameNumber = window.pageYOffset / playbackConst;

  vid.currentTime = frameNumber;
  window.requestAnimationFrame(scrollPlay);
}

window.requestAnimationFrame(scrollPlay);
