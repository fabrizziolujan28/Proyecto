document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  menuBtn?.addEventListener("click", () => mobileMenu.classList.toggle("hidden"));

   window.openLoginModal = () => window.location.href = "login.html";

     const hero = document.querySelector(".hero");
     window.addEventListener("scroll", () => {
       let offset = window.pageYOffset;
       if (hero) hero.style.backgroundPositionY = offset * 0.5 + "px";
     });
}