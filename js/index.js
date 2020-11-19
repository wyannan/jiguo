$(function () {
    //回到顶部
    $('.back').on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 700)
        // return false;
    })
    //轮播
   
    var lis_ = document.getElementsByClassName('list');
    var tao=document.getElementsByClassName('tao')[0];
    var ul_ = document.getElementsByClassName('box98');
    var inner = document.getElementsByClassName('inner')[0];
    var times = null, time1 = null;
    var index = 0;
    function automove() {
        times = setInterval(function () {
            clearInterval(time1);
            index++;
            if (index >= ul_.length) {
                console.log(ul_.length);
                index = 0;
            }
            var step = 0;
            var maxstep = 20;
            var start = inner.scrollLeft;
            var stop = 5020;
            var every = (stop - start) / maxstep;
            time1 = setInterval(function () {
                step++;
                if (step >= maxstep) {
                    step = 0;
                    clearInterval(time1);
                }
                start = start + every;
                inner.scrollLeft = start;
            }, 60)
        }, 100)
    }
    automove();

    $('.more').on('click', function () {
        //   $('.more').css({background:'url(./../img/loading-icon.gif) no-repeat 450px' }).html('正在加载')
        $.ajax({
            url: 'http://192.168.1.64:3000/play/new',
            success: function (res) {
                var data = res[2];
                var dot_tem = doT.template($('#new').text());
                $('.box11   ').html(dot_tem(data));
                // $('.more').hide();
                // $('.more').css({background:'url(./../img/loading-icon.gif) no-repeat 450px' }).html('正在加载').show();
                console.log(data);
            },
            dataType: 'json',
            // timeout:1500
        })

    })

























})