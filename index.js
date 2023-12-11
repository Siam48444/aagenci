//  Lenis smooth scrolling.
const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
   lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);

// Menu section clickings.
var Menu = document.querySelector(".menu_section");
const HamburgerNorm = document.querySelector(".hamburger_normal");
HamburgerNorm.addEventListener("click", () => {
   Menu.style.transform = "translateY(0)";
   Menu.style.pointerEvents = "all";
});

const HamburgerCross = document.querySelector(".hamburger_cross");
HamburgerCross.addEventListener("click", () => {
   Menu.style.transform = "translateY(-100%)";
   Menu.style.pointerEvents = "none";
});

// GSAP scrollTrigger animations.
gsap.from(".page2_top", {
   xPercent: -50,
   opacity: 0,
   scrollTrigger: {
      scroller: window,
      trigger: ".page2_top",
      scrub: 2,
      end: "bottom 70%",
   },
});
