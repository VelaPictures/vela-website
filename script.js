const body = document.body;
const intro = document.getElementById("intro");
const skipIntro = document.getElementById("skipIntro");
const siteHeader = document.getElementById("siteHeader");
const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");

body.classList.add("intro-active");

function closeIntro() {
  intro.classList.add("is-hidden");
  body.classList.remove("intro-active");
  window.setTimeout(() => intro.remove(), 1400);
}

skipIntro.addEventListener("click", closeIntro);
window.setTimeout(closeIntro, 7000);

window.addEventListener("scroll", () => {
  siteHeader.classList.toggle("scrolled", window.scrollY > 24);
});

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
document.getElementById("year").textContent = new Date().getFullYear();
