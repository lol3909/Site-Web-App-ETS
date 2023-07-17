const parallaxContent = $('#parallax-content');
const brandImage = document.getElementById("brandImage");
const navToggler = $('#nav-toggler');
const navButtons = $('#navButtons');
const navTitle = $('#navTitle');
const linkButtonsContainer = $('#link-buttons-container');
const typewriterContainer = document.getElementById("typewriter-container");
const navbar = $('.navbar');
const clubDescription = $('#club-description');
const clubMission = $('#club-mission');
const clubObjectives = $('#club-objectives');

parallaxContent.parallax({
    imageSrc: 'images/droidcon.jpg',
    speed: 0.1,
    positionY: "top"
});

navTitle.fadeToggle(1000, "swing", () => {
    brandImage.classList.add("brandImageTop");
    showNavButtons();
});

const showNavButtons = () => {
    navToggler.css('opacity', '1');
    navButtons.show("slow", "swing", () => {
        linkButtonsContainer.css('opacity', '1');
        typewriterContainer.classList.toggle("typewriter");
        navbar.css("background-color", "#00000080");
        Typewriter(70, typewriterContainer, "Pour ceux qui partagent la passion du développement mobile.", false, null);
    });
};

document.querySelector("#floatingToggle").addEventListener("click", () => {
    document.querySelector("#nav-toggler").classList.toggle("active");
    $('#navToggleContent').slideToggle();
    $('#navbar').toggleClass("back-color");
});

window.onscroll = () => {
    clubDescription.css("opacity", clubDescription[0].getBoundingClientRect().y + clubDescription[0].getBoundingClientRect().height / 2 < 3 * window.innerHeight / 4 ? 1 : 0);
    clubDescription.css("opacity", clubDescription[0].getBoundingClientRect().y + clubDescription[0].getBoundingClientRect().height / 2 < 1 * window.innerHeight / 4 ? 0 : clubDescription.css("opacity"));

    clubMission.css("opacity", clubMission[0].getBoundingClientRect().y + clubMission[0].getBoundingClientRect().height / 2 < 3 * window.innerHeight / 4 ? 1 : 0);
    clubMission.css("opacity", clubMission[0].getBoundingClientRect().y + clubMission[0].getBoundingClientRect().height / 2 < 1 * window.innerHeight / 4 ? 0 : clubMission.css("opacity"));

    clubObjectives.css("opacity", clubObjectives[0].getBoundingClientRect().y < 3 * window.innerHeight / 4 ? 1 : 0);
    clubObjectives.css("opacity", clubObjectives[0].getBoundingClientRect().y < 1 * window.innerHeight / 4 ? 0 : clubObjectives.css("opacity"));
};

$('#go-to-description-button').on('click', () => {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#parallax-content").offset().top
    }, 1000);
});

$('#go-to-blog-button').on('click', () => {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#blog").offset().top
    }, 1000);
});