const reveals = document.querySelectorAll(".reveal");

function reveal() {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const visiblePoint = 100; // Reduced visible point for easier triggering

    if (elementTop < windowHeight - visiblePoint) {
      el.classList.add("active");
    }
  });
}

// Check on scroll
window.addEventListener("scroll", reveal);

// Check on initial load
reveal();
