const memberTitle = $('#member-title');
const partnerTitle = $('#partner-title');
const navToggler = $('#nav-toggler');
const navToggleContent = $('#navToggleContent');
const navbar = $('#navbar');
const mainContent = $('#main-content');
const memberContact = $('#member-contact');
const partnerContact = $('#partner-contact');
const memberFormContent = $('.member-form-content');
const partnerFormContent = $('.partner-form-content');
const formContainer = $('#form-container');

memberTitle.fadeToggle(1500);
partnerTitle.fadeToggle(1500);

document.querySelector("#floatingToggle").addEventListener("click", () => {
    document.querySelector("#nav-toggler").classList.toggle("active");
    navToggleContent.slideToggle();
    navbar.toggleClass("back-color-black");
});

memberContact.on('click', () => {
    $([document.documentElement, document.body]).animate({
        scrollTop: formContainer.offset().top - 100
    }, 1000);
    setTimeout(() => {
        partnerFormContent.hide();
        memberFormContent.show("blind");
    }, 500);
});

partnerContact.on('click', () => {
    $([document.documentElement, document.body]).animate({
        scrollTop: formContainer.offset().top - 100
    }, 1000);
    setTimeout(() => {
        memberFormContent.hide();
        partnerFormContent.show("blind");
    }, 500);
});

window.onscroll = () => {
    navbar.toggleClass("back-color", mainContent[0].getBoundingClientRect().y < 0);
};