
$(document).ready(function (){
// Скрипт анимации наведения блока Works

    $('.works__btns button, .works__btns a').on('focus', function (e) {
        $(this).parents('.works__element').addClass('works__element--active');
    });

    $('.works__btns button, .works__btns a').on('blur', function (e) {
        $(this).parents('.works__element').removeClass('works__element--active');
    });

// Скрипт анимации линии прогресс блока Progress

    function moveProgessBar(node, nodeLine, tooltip, animationLength = 1500) {
        const progressElement = $(node);
        progressElement.each(function (value, item) {
            $(item).find(nodeLine).animate({
                width: item.dataset.progressPercent + '%'
            }, animationLength);
            $(item).find(tooltip).show(animationLength);
        });
    }

    let animate = true;

    $(window).scroll(function () {

        if($('.skills').offset().top <= $(window).scrollTop() + 150) {
            if(animate) {
                moveProgessBar('.progress__element', '.progress__line', '.progress__tooltip');
            }
            animate = false;
        }
    });

    $('.carousel').owlCarousel({
        loop:true,
        margin: 0,
        nav:true,
        dots: false,
        navText: [],
        items: 5,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            980:{
                items:5
            },
        }
    })

});



