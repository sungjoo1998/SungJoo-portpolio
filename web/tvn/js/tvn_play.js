$(function() {
    const $modal =$('#modal'),
          $btnClose = $modal.find('.close_btn'),
          $video = $modal.find('video')
          //console.log($video)

    $('article').on('mouseenter', function() {
        let $article = $(this),
        $video = $article.find('video'),
        mov = $video.get(0);
        /* 
        get(0) 
        - 제이쿼리 메소드 
        - jquery 객체에서 첫번째 dom요소를 가져옴
        */
        mov.currentTime = 0; //1 - 1초
        mov.play();

        $article.stop().animate({
            width: '22.5%'
        }, 1000, function() {
            $article.find('h4').stop().delay(500).animate({
                right: 0
            }, 500).delay(2000).animate({
                right: '-250px'
            })
            $article.find('p').stop().delay(800).animate({
                right: 0
            }, 500).delay(2500).animate({
                right: '-250px'
            });

            $video.stop().fadeIn(1000)
        })
    }).on('mouseleave', function() {
        let $article = $(this),
        $video = $article.find('video'),
        mov = $video.get(0);

       //비디어제어
        mov.pause(); //일시정지

        $article.stop().animate({
            width: '12.5%'
        }, 600, function() {
            $article.find('h4, p').stop().animate({
                right: '-250px'
            }, 'fast')

            $video.stop().fadeOut(600)
        })
    }).on('click', function() {
        $modal.slideDown(1000);
        let i = $(this).index();
        let mov = $video.eq(i).get(0);

        mov.currentTime = 0;
        mov.play();

        $video.eq(i).css({
            display: 'block',
            zIndex: 1
        }).prop({
            muted: false,
            controls: true
        })
    })

    //모달 닫기
    $btnClose.on('click', function () {
        $modal.fadeOut();
        $video.css({ display: 'none', zIndex: 0 })
            .prop({
                muted: true,
                controls: false
            })
    });

})