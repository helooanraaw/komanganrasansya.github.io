document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); 
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((element) => observer.observe(element));
});

document.addEventListener("DOMContentLoaded", function () {
  const hrElements = document.querySelectorAll(".animated-hr");

  function checkScroll() {
    const screenHeight = window.innerHeight;

    hrElements.forEach((hrElement) => {
      const position = hrElement.getBoundingClientRect().top;

      if (position < screenHeight * 0.8) {
        hrElement.classList.add("active");
      } else {
        hrElement.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Panggil sekali saat halaman dimuat
});

document.querySelector('.hamburger').addEventListener('click', function() {
        document.querySelector('.Menu nav ul').classList.toggle('active');
    });
