
// Таймер
$('#timer').countdown('2018/07/10').on('update.countdown', function(event) {
  var $this = $(this).html(event.strftime(''
    + '<div class = "timer_number">%I<br><span>ЧАСОВ</span></div> : '
    + '<div class = "timer_number">%M<br><span>МИНУТ</span></div> : '
    + '<div class = "timer_number">%S<br><span>СЕКУНД</span></div>'));
});

//Отправка формы ajax-запросом
$('form').submit(function(e){
    e.preventDefault();
    $.ajax({
      url: "http://localhost/web/sendOrderForm.php",
      type: "POST",
      data: $('#form').serialize(),
      success: function(response) {
        $('.order_info').empty();
        $('.order_info').append(function() {
         return "<p>Спасибо!</p><p>С вами свяжутся в ближайшее время.</p><br><br>"
        });
         $('#form')[0].reset();
      },
      error: function(response) {
        //обработка ошибок при отправке
     }
    });
});

//Маска телефонного номера
 jQuery(function($){
   $("#phone_icon").mask("+7(999) 999-99-99");
   });