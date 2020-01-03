// const text = start.querySelector(".h1");
// const video = start.querySelector("video");
// const end = document.querySelector(".end");

// var controller = new ScrollMagic.Controller();

// const scene = new ScrollMagic.Scene({
//   triggerElement: h1,
//   duration: 1000,
//   triggerHook: 0
// })
//   .setPin(h1)
//   .addTo(controller)
//   .addIndicators();

// // TweenLite.delayedCall(3, myFunction);

// // function myFunction() {
// //   TweenLite.to(text, 3, { left: 600, color: "#8f3d38", opacity: 0.5 });
// // }
// // TweenLite.to(text, 3, { left: 600, color: "#8f3d38", opacity: 0.5 });

// let accelamount = 0.1;
// let scrollpos = 0;
// let delay = 0;

// scene.on("update", e => {
//   scrollpos = e.scrollPos / 800;
//   //   console.log(e);
// });

// setInterval(() => {
//   delay += (scrollpos - delay) * accelamount;
//   video.currentTime = delay;
//   // console.log(video.currentTime, scrollpos);
// }, 40);

// This code is from another Codepen

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
