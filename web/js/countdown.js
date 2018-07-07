$('#timer').countdown('2018/07/10').on('update.countdown', function(event) {
  var $this = $(this).html(event.strftime(''
    + '<div class = "timer_number">%I<br><span>ЧАСОВ</span></div> : '
    + '<div class = "timer_number">%M<br><span>МИНУТ</span></div> : '
    + '<div class = "timer_number">%S<br><span>СЕКУНД</span></div>'));
});