// Scroll Animation Default Configuration
ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400,
});

// Scroll Animations
ScrollReveal().reveal(".landing-section", { delay: 150, origin: "left" });
ScrollReveal().reveal(".landing-illustration", { delay: 300, origin: "right", interval: 200 });

ScrollReveal().reveal("#quantity-section div", { delay: 100 });

ScrollReveal().reveal(".service-card:nth-child(1)", { delay: 300, distance: "100px" });
ScrollReveal().reveal(".service-card:nth-child(2)", { delay: 600, interval: 700, distance: "100px" });
ScrollReveal().reveal(".service-card:nth-child(3)", { delay: 900, interval: 700, distance: "100px" });

ScrollReveal().reveal(".join-card:nth-child(1)", { delay: 100, origin: "left", interval: 400, distance: "200px" });
ScrollReveal().reveal(".join-card:nth-child(2)", { delay: 100, origin: "right", interval: 400, distance: "200px" });

ScrollReveal().reveal("#interface-section > img", { delay: 50, origin: "left", interval: 300, distance: "100px" });
ScrollReveal().reveal("#interface-section > div", { delay: 50, origin: "top", interval: 300, distance: "100px" });

const loginButtons = document.getElementsByClassName("login-buttons");
const joinButtons = document.getElementsByClassName("join-buttons");
const contactButton = document.getElementById("contact-button");

Array.from(loginButtons).forEach(function (button) {
  button.addEventListener("click", (e) => {
    e.target.classList.add("animate__animated", "animate__pulse");

    button.addEventListener("animationend", (f) => {
      f.target.classList.remove("animate__animated", "animate__pulse");
      if (f.target.name === "access-button") {
        document.getElementsByClassName("join-card")[0].scrollIntoView({ block: "center" });
      }
    });
  });
});

Array.from(joinButtons).forEach(function (button) {
  button.addEventListener("click", (e) => {
    e.target.classList.add("animate__animated", "animate__headShake");

    button.addEventListener("animationend", (f) => {
      f.target.classList.remove("animate__animated", "animate__headShake");
    });
  });
});

contactButton.addEventListener("click", (e) => {
  e.preventDefault();

  e.target.classList.add("animate__animated", "animate__pulse");

  contactButton.addEventListener("animationend", (f) => {
    f.target.classList.remove("animate__animated", "animate__pulse");
  });
});
