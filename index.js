function LenisSmoothScroll() {
   const lenis = new Lenis();

   lenis.on("scroll", ScrollTrigger.update);

   gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
   });

   gsap.ticker.lagSmoothing(0);
}
LenisSmoothScroll();

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
