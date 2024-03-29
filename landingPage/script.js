gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things

var tl = gsap.timeline();
// var tll = gsap.timeline({
//   ScrollTrigger: {
//     trigger: ".main",
//     markers: true,
//     start: "75% 50%",
//     end: "100% 50%",
//     scrub: 5,
//     duration: 1,
//     pin: true,
//   },
// });
// tll.to(
//   "video",
//   {
//     width: "100vw",
//     height: "100vh",
//   },
//   "baba"
// );
function loaderAnimation() {
  var counter = document.querySelector(".loader-counter h5");
  let grow = 0;
  setInterval(function () {
    grow++;
    if (grow <= 100) {
      counter.textContent = grow;
    } else {
      counter.textContent = "100";
    }
  }, 35);

  tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
  });
  tl.from(".loader-counter", {
    opacity: 0,
    onStart: function () {},
  });
  tl.to(".line h2", {
    animationName: "anime",
    opacity: 0,
  });
  tl.to(".loader", {
    opacity: 0,
    duration: 0.4,
    delay: 2,
  });

  tl.from(".page1", {
    y: 1200,
    opacity: 0,
  });

  tl.to(".loader", {
    display: "none",
  });
}
loaderAnimation();

function cursor() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to(".cursor", {
      x: dets.x + "px",
      y: dets.y + "px",
    });
  });
  Shery.makeMagnet(".nav-right h4");
}
// cursor();

tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1", {
  y: 150,
  stagger: 0.25,
  duration: 0.5,
  delay: 0.6,
});
tl.from(".navbar", {
  opacity: 0,
  stagger: 0.2,
});

function sheryJS() {
  Shery.imageEffect(".img-div", {
    style: 5,
    config: {
      a: { value: 2, range: [0, 30] },
      b: { value: 0.75, range: [-1, 1] },
      zindex: { value: -9996999, range: [-9999999, 9999999] },
      aspect: { value: 0.7272749932567818 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: true },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: false },
      maskVal: { value: 1, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 0 },
      noise_speed: { value: 0.76, range: [0, 10] },
      metaball: { value: 0.35, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 5.34, range: [0, 100] },
    },
    gooey: true,
  });
}
sheryJS();
