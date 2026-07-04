/* Typewriter effect */
const roles = [
    "Data Scientist",
    "Data Engineer",
    "Analytics Engineer",
    "ML Engineer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const el = document.getElementById("typewriter");

function type() {
    const current = roles[roleIndex];

    if (!isDeleting) {
        el.textContent = current.substring(0, charIndex + 1);
        charIndex++;
        if (charIndex === current.length) {
            isDeleting = true;
            setTimeout(type, 1800);
            return;
        }
        setTimeout(type, 80);
    } else {
        el.textContent = current.substring(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            setTimeout(type, 400);
            return;
        }
        setTimeout(type, 40);
    }
}

type();

/* Navbar background on scroll */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        navbar.style.borderBottomColor = "rgba(212, 168, 67, 0.3)";
    } else {
        navbar.style.borderBottomColor = "rgba(212, 168, 67, 0.15)";
    }
});

/* Close mobile menu on link click */
document.querySelectorAll(".nav-links a").forEach(function (link) {
    link.addEventListener("click", function () {
        document.querySelector(".nav-links").classList.remove("open");
    });
});
