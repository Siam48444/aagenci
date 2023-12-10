gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
   el: document.querySelector("#wrapper"),
   smooth: true,
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#wrapper" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#wrapper", {
   scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
   getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
   },
   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
   pinType: document.querySelector("#wrapper").style.transform ? "transform" : "fixed",
});

function Page2TopSectionAppearingAnimation() {
   gsap.from(".page2_top", {
      opacity: 0,
      x: -100,
      scrollTrigger: {
         scroller: "#wrapper",
         trigger: ".page2_top",
         start: "top 90%",
         end: "bottom 80%",
         scrub: true,
      },
   });
}
Page2TopSectionAppearingAnimation();

function Page2BottomSectionAppearingAnimation() {
   gsap.from(".page2_bottom", {
      opacity: 0,
      x: 100,
      scrollTrigger: {
         scroller: "#wrapper",
         trigger: ".page2_bottom",
         scrub: true,
         start: "top 90%",
         end: "bottom 80%",
      },
   });
}
Page2BottomSectionAppearingAnimation();

function Page3ImageScrollAnimation() {
   gsap.to(".page3_phone_image", {
      scale: 1.5,
      scrollTrigger: {
         scroller: "#wrapper",
         trigger: "#page3",
         scrub: true,
      },
   });
}
Page3ImageScrollAnimation();

function Page3FadeOutAnimation() {
   gsap.to("#page3", {
      opacity: 0,
      scrollTrigger: {
         scroller: "#wrapper",
         trigger: "#page3",
         scrub: true,
         start: "top 0%",
         end: "bottom 0%",
      },
   });
}
Page3FadeOutAnimation();
