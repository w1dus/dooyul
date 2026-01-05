

document.addEventListener("DOMContentLoaded", function(e){

  right_slide_menu();

})


const right_slide_menu = () => {
  $('header .menu-btn').click(function(){
    $('.slide-menu').addClass('show');
    $('.slide-menu-close').addClass('show');
  })
  $('.slide-menu .btn-div .close-btn').click(function(){
    $('.slide-menu').removeClass('show');
    $('.slide-menu-close').removeClass('show');
  })
  $('.slide-menu-close').click(function(){
    $('.slide-menu').removeClass('show');
    $('.slide-menu-close').removeClass('show');
  })
}