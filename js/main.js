const barIcon = document.querySelector(".header__menu-bar"),
  sidebar = document.querySelector(".header__sidebar");

  barIcon.onclick = () => {
    barIcon.classList.toggle("header__menu-bar--active");
    sidebar.classList.toggle("header__sidebar--active");
    document.body.classList.toggle("overflow");
  };

  window.addEventListener("resize", () => {
    barIcon.classList.remove("header__menu-bar--active");
    sidebar.classList.remove("header__sidebar--active");
  });

const links = document.querySelectorAll(".header__sidebar .header__link");

links.forEach(el => {
  el.onclick = () => {
    barIcon.classList.remove("header__menu-bar--active");
    sidebar.classList.remove("header__sidebar--active");
  };
});