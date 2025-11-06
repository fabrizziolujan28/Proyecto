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

  const topBtn = document.createElement("button");
  topBtn.id = "topBtn";
  topBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  document.body.appendChild(topBtn);
  window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 400 ? "block" : "none";
  });
  topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  const showAlert = (msg, type) => {
      const alert = document.createElement("div");
      alert.className = `fixed top-5 left-1/2 transform -translate-x-1/2 px-6 py-3 rounded-lg text-white shadow-lg z-50 ${
        type === "success" ? "bg-green-500" : "bg-red-500"
      } animate-fadeIn`;
            alert.textContent = msg;
            document.body.appendChild(alert);
            setTimeout(() => alert.remove(), 3000);
          };