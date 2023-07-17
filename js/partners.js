const mainContent = $('#main-content');
const navToggler = $('#nav-toggler');
const navToggleContent = $('#navToggleContent');
const navbar = $('#navbar');

mainContent.fadeToggle(1500, "swing");

document.querySelector("#floatingToggle").addEventListener("click", () => {
    navToggler[0].classList.toggle("active");
    navToggleContent.slideToggle();
    navbar.toggleClass("back-color-black");
});

window.onscroll = () => {
    navbar.toggleClass("back-color", mainContent[0].getBoundingClientRect().y < 0);
};