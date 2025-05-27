// Future JS functionality can go here
console.log("Welcome to Kindori School Website");

// Back to Top button functionality
// Get the button
const backToTopBtn = document.getElementById("backToTopBtn");

// Show button after scrolling down 100px
window.onscroll = function () {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    backToTopBtn.style.display = "block";
  } else {
    backToTopBtn.style.display = "none";
  }
};

// Scroll to top on click
backToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
