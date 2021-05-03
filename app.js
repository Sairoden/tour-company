// Set Date
const date = (document.getElementById(
  "date"
).innerHTML = new Date().getFullYear());

// Nav Toggle
const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");

// Add Event Listener
navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

// Fixed Navbar
const navBar = document.querySelector(".navbar");

addEventListener("scroll", () => {
  if (pageYOffset > 62) {
    navBar.classList.add("fixed");
  } else {
    navBar.classList.remove("fixed");
  }
});

// Smooth Scroll
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault;

    links.classList.remove("show-links");
    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    console.log(element.offsetTop);

    if (navBar.classList.contains("fixed")) {
      position = element.offsetTop - 62;
    } else {
      position = element.offsetTop - 124;
    }

    if (innerHeight < 992) {
      if (navBar.classList.contains("fixed")) {
        position = element.offsetTop - 62;
      } else {
        position = elemnt.offsetTop - 332 - 62;
      }
    }
    // Window ScrollTo
    scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
  });
});
