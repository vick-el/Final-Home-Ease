const menubtn =document.getElementById("menu-btn")
const navlinks =document.getElementById("nav__links")
const menubtnicon = menubtn.querySelector("1");

menubtn.addEventListener("click", ()=>{
    navlinks.classList.toggle("open");

    const isOpen = navlinks.classList.contains("open");
    menubtnicon.setAttribute("class", isOpen?"ri__close-line":"ri-menu__line");
});

navlinks.addEventListener("click", () => {
    navlinks.classList.remove("open");
    menubtnicon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin:"bottom",
    duration:"1000"

};

// header container
scrollRevealOption().reveal(".header__container p", {
    ...scrollRevealOption,
});

scrollRevealOption().reveal(".header__container h1", {
    ...scrollRevealOption,
    delay: 500,
});


// about container
scrollRevealOption().reveal(".about__image img", {
    ...scrollRevealOption,
    origin:"left",
});

scrollReveal().reveal(".about_content .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
});

scrollReveal().reveal(".about_content .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
});

scrollReveal().reveal(".about_content .section__heaeder", {
    ...scrollRevealOption,
    delay: 500,
});
scrollReveal().reveal(".about_btn", {
    ...scrollRevealOption,
    delay: 2000,
});

//  properties_container
scrollReveal().reveal(".properties__card", {
    ...scrollRevealOption,
    interval: 500,

});

//  service container
scrollReveal().reveal(".service__list li", {
    ...scrollRevealOption,
    interval: 500,
    origin: "right",

});



