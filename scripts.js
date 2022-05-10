// Feedback Slider

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            loop: false
        },
        600: {
            items: 2,
            loop: false
        },
        1000: {
            items: 3,
            loop: false
        },
        1300: {
            items: 4,
            loop: false
        }
    }
})