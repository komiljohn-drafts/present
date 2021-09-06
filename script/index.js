
$(document).ready(function () {
    $('.occasions__slider').slick({
        slidesToShow: 4,
        arrows: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    speed: 500,
                    autoplay: true,
                    autoplaySpeed: 2000
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    speed: 500,
                    speed: 500,
                    autoplay: true,
                    autoplaySpeed: 2000
                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 500,
                    speed: 500,
                    autoplay: true,
                    autoplaySpeed: 2000
                }
            }
        ]
    });
});

const inputToggle = document.getElementById('input-toggle')
const links = document.querySelectorAll('#menu a')

links.forEach(link => {
    link.addEventListener('click', check)
})

function check() {
    inputToggle.checked = false;
}