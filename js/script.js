// ==============================
// 1. DARK / LIGHT MODE TOGGLE
// ==============================

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    const isLightMode = document.body.classList.contains("light-mode");

    themeToggle.textContent = isLightMode ? "🌙" : "☀️";

    localStorage.setItem("theme", isLightMode ? "light" : "dark");
});

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeToggle.textContent = "🌙";
}

// ==============================
// 2. SCROLL REVEAL ANIMATIONS
// ==============================

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll(".section, .project-card").forEach((element) => {
    element.classList.add("hidden");
    observer.observe(element);
});

// ACTIVE NAVBAR LINK ON SCROLL
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});