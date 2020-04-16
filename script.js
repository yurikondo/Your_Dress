$(function(){

  $('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');
    if($answer.hasClass('open')) { 
      $answer.removeClass('open');
      $answer.slideUp();
      $(this).find('span').text('+');
      
    } else {
      $answer.addClass('open'); 
      $answer.slideDown();
      $(this).find('span').text('-');
    }
  });

  $('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html, body').animate({
      'scrollTop':position
    },500);
  })

  $('#top-btn').click(function(){
    $('html, body').animate({
      'scrollTop':0
    }, 500);
  })
});
