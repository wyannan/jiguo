// $('.back').on('click',function(){
//     $(body).scrollTop(0);
// });
 $('.back').click(function(){
      $('body,html').animate({
           scrollTop: 0
      },700)
 });