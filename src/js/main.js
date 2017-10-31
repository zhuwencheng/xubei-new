/*! functions.js */
var $ = require('jquery');
//$.fn.slider = require('ui/slider.js');
$('#btn').on('click',function(){
  require.ensure([], function() {
    require('./components/test.js')
  });
});
// $(window).load(function() {
//   var slider = $('.banner').slider({
//     dots: true,
//     fluid: true,
//     arrows: true
//   });
//   $('.slider-arrow').click(function() {
//     var fn = this.className.split(' ')[1];

//     //  Either do slider.data('slider').next() or .prev() depending on the className
//     slider.data('slider')[fn]();
//   });
// });


