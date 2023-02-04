$l = $('.left')
$r = $('.right')

$l.mouseenter(function() {
  $('.container-landing').addClass('left-is-hovered');
}).mouseleave(function() {
  $('.container-landing').removeClass('left-is-hovered');
});

$r.mouseenter(function() {
  $('.container-landing').addClass('right-is-hovered');
}).mouseleave(function() {
  $('.container-landing').removeClass('right-is-hovered');
});