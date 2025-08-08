// Loader
window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});

// Fade-in on scroll
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("show");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Video click to load YouTube player
document.querySelectorAll(".video-card").forEach(card => {
  card.addEventListener("click", () => {
    const videoId = card.getAttribute("data-video-id");
    card.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" 
      frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
  });
});
