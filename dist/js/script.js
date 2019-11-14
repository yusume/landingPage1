// 상단 메뉴 고정 
$(document).ready(function () {
    var jbOffset = $('#top-bg').offset();
    if ($(document).scrollTop() > 0) {
        $('#top-bg').addClass('jbFixed text-clay');
        $('#top-bg .nav-link').removeClass('text-white').addClass(' text-clay');
    }
    $(window).scroll(function () {
        if ($(document).scrollTop() > jbOffset.top) {
            $('#top-bg').addClass('jbFixed text-clay');
            $('#top-bg .nav-link').removeClass('text-white').addClass(' text-clay');
        }
        else {
            $('#top-bg').removeClass('jbFixed text-clay');
            $('#top-bg .nav-link').removeClass('text-clay').addClass(' text-white');
        }
    });
});


(function (global, $) {
    var $menu = $('#navbarCollapse li.nav-item'),
        $contents = $('.scroll'),
        $doc = $('html, body');
    $(function () { // 해당 섹션으로 스크롤 이동
        $menu.on('click','a', function (e) {
            var $target = $(this).parent(),
                idx = $target.index(),
                section = $contents.eq(idx),
                offsetTop = section.offset().top;
                $('.nav-link').not(this).css('color','#000');
                $(this).css('color','#75b929');
            $doc.stop().animate({ scrollTop: offsetTop }, 800);
            return false;
        });
    }); // menu class 추가
    $(window).scroll(function () {
        var scltop = $(window).scrollTop();
        $.each($contents, function (idx, item) {
            var $target = $contents.eq(idx),
                i = $target.index(),
                targetTop = $target.offset().top;
            if (targetTop <= scltop) {
                $menu.removeClass('on');
                $menu.eq(idx).addClass('on');
                var ad = $menu.eq(idx)[0];
                $('.nav-link').css('color','#000');
                $('.on .nav-link').css('color','#75b929');
            } if (!(200 <= scltop)) {
                $menu.removeClass('on');
            }
        })
    });
    // Go to the TOP
    var btnTop = $('.btn-top');
    btnTop.on('click', function (e) {
        e.preventDefault();
        $doc.stop()
            .animate({
                scrollTop: 0
            }, 800)
    });
    var btndown = $('.btn-down');
    btndown.on('click', 'a', function (e) {
        e.preventDefault();
        $doc.stop().animate({
                scrollTop: 600
            }, 800)
    });

}(window, window.jQuery));
