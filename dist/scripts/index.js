//Animate communication channels
$(".comIcon").hover(function() {
  $(this).addClass('animated pulse');
},
  function(){
    var self = this;
    setTimeout(function() {
      $(self).removeClass('pulse');
    },600);
  });

$(".comChannel").mouseenter(function() {
    $('.comLabel', this).removeClass('hide flipOutY').addClass('animated flipInY');
  });

$(".comChannel").mouseleave(function() {
  $('.comLabel', this).removeClass('flipInY').addClass('animated flipOutY');
});

