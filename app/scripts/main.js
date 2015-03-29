(function($){
  var topBar = $('.top-bar');
  var $document = $(document);
  var $window = $(window);
  var hiddenBtn = $('.btn_state_hide', topBar);

  $(window).on('scroll', function(){
    if($document.scrollTop() > $window.height()){
      topBar.removeClass('top-bar_style_trans');
      hiddenBtn.removeClass('btn_state_hide');
    } else {
      topBar.addClass('top-bar_style_trans');
      hiddenBtn.addClass('btn_state_hide');
    }
  });
})(jQuery);
