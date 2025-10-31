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

 const counters = document.querySelectorAll(".counter");
  const animateCounters = () => {
    counters.forEach(c => {
      const update = () => {
        const target = +c.dataset.target;
        const val = +c.innerText;
        const inc = target / 80;
        if (val < target) {
          c.innerText = Math.ceil(val + inc);
          setTimeout(update, 40);
        } else c.innerText = target + "+";
      };
      update();
    });
  };
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => e.isIntersecting && (animateCounters(), obs.disconnect()));
  });
  obs.observe(document.querySelector("#sobre-nosotros"));
