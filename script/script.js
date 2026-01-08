

document.addEventListener("DOMContentLoaded", function(e){

  right_slide_menu();
  insights_tab();
  member_popup();
  
})

const member_popup = () => {
  for (let i = 1; i <= 4; i++) {
    $('#popup' + i + '-btn').click(function(e) {
        $('#popup' + i).addClass('show');
        e.preventDefault();
    });
    
    $('#popup' + i + ' .close-btn').click(function() {
        $('#popup' + i).removeClass('show');
    });
  }
}

const insights_tab = () => {
  $('.main .insights-section .tab-list button.item').click(function(){
    const index = $(this).index();
    $('.main .insights-section .tab-list button.item').removeClass('active');
    $(this).addClass('active');
    $('.main .insights-section .content-list > li').removeClass('show')
    $('.main .insights-section .content-list > li').eq(index).addClass('show')
  })
}


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