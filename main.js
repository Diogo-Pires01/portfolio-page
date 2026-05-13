// ===== PRELOADER =====
(function () {
  const progress = document.getElementById("preloader-progress");
  const counter = document.getElementById("preloader-counter");
  const content = document.getElementById("preloader-content");
  const preloader = document.getElementById("preloader");

  document.body.classList.add("no-scroll");

  const counterObj = { value: 0 };

  const tl = anime.createTimeline({
    defaults: { easing: "inOutQuart" },
    onComplete: () => {
      preloader.classList.add("done");
      document.body.classList.remove("no-scroll");
    },
  });

  tl.add(
    counterObj,
    {
      value: 100,
      duration: 2000,
      easing: "inOutExpo",
      onUpdate: () => {
        counter.textContent = Math.round(counterObj.value) + "%";
      },
    },
    0,
  );

  tl.add(
    progress,
    {
      width: "100%",
      duration: 2000,
      easing: "inOutExpo",
    },
    0,
  );

  tl.add(
    content,
    {
      opacity: 0,
      translateY: -30,
      duration: 500,
    },
    "+=200",
  );

  tl.add(".preloader-top", {
    translateY: "-100%",
    duration: 800,
    easing: "inOutCubic",
  });

  tl.add(
    ".preloader-bottom",
    {
      translateY: "100%",
      duration: 800,
      easing: "inOutCubic",
    },
    "-=800",
  );
})();

// ===== NAVBAR ACTIVE STATE =====
(function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".navbar .nav-link");
  const mobileLinks = document.querySelectorAll(".mobile-menu .nav-link");
  const isMobile = window.innerWidth < 768;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          [...navLinks, ...mobileLinks].forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === "#" + id,
            );
          });
        }
      });
    },
    { threshold: isMobile ? 0.2 : 0.45 },
  );

  sections.forEach((section) => observer.observe(section));
})();

// ===== MOBILE MENU =====
(function () {
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("mobile-menu");
  const icon = toggle.querySelector("i");

  toggle.addEventListener("click", () => {
    const isOpen = !menu.classList.contains("hidden");
    menu.classList.toggle("hidden");
    icon.className = isOpen ? "ph ph-list" : "ph ph-x";
  });

  menu.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.add("hidden");
      icon.className = "ph ph-list";
    });
  });
})();
