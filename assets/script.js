$('.faqTitle').on('click',function(){
    $(this).parents('.faqItem').find('.faqCt').slideToggle(200);
    setTimeout(() => {
        $(this).parents('.faqItem').siblings('.faqItem').find('.faqCt').slideUp(200);
    }, 100);
});

$('.mainMenu li, .bcText span, .textContainer span').on('click',function () {
    _scClass = $(this).attr('data-scroll');
    _scVal= (($('.'+_scClass).offset().top) - 50);
    $("html, body").animate({ scrollTop: _scVal },600);
    $('.headerRight').removeClass('showMenu');
});

$('.header .logo').on('click',function () {
    $("html, body").animate({ scrollTop: 0 },1000);
});
$('.mobileMenuTrigger').on('click',function () {
    $('.headerRight').toggleClass('showMenu');
});
$('.mmClose').on('click',function () {
    $('.headerRight').removeClass('showMenu');
});
$('.mpcClose, .mpFilter').on('click',function () {
    $('.mainPopup').removeClass('showPopup');
});
$('.ecoSystemTrigger').on('click',function () {
    $('.mainPopup.ecoSystemPopup').addClass('showPopup');
});
$('.daoTrigger').on('click',function () {
    $('.mainPopup.daoPopup').addClass('showPopup');
});
$('.chestTrigger').on('click',function () {
    $('.mainPopup.chestPopup').addClass('showPopup');
});
$('.charityTrigger').on('click',function () {
    $('.mainPopup.charityPopup').addClass('showPopup');
});
$('.verseTrigger').on('click',function () {
    $('.mainPopup.versePopup').addClass('showPopup');
});

$('.tgbMore').on('click',function () {

    if(
        $('.tgbMoreText').is(':hidden')
    ){
        $('.tgbMoreText').show();
        $(this).text('Less Info');
    }else{
        $('.tgbMoreText').hide();
        $(this).text('More Info');
    }

});

$(window).scroll(function () {
    if($(window).scrollTop() > 50) $('.header').addClass('scrolled')
    else $('.header').removeClass('scrolled')
});

lozad('.lozad', {
    load: function(el) {
        el.src = el.dataset.src;
        el.onload = function() {
            el.classList.add('fade')
        }
    }
}).observe();

$(".default-ticker").ticker();