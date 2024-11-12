$(function() {
    $('#wrap').each(function() {
        const $wrap = $(this),
              $themaBtn = $wrap.find('.btn_wrap'),
              $gnb = $wrap.find('.gnb');

        //시간변수
        let now, hr, min, sec;
        let $span = $wrap.find('.screen span');

        //시계 만들기
        //setInterval - 자바스크립트 내장함수/일정한 간격을 두고 반복적으로 명령문을 실행
        let timer = setInterval(function() { 
            now = new Date(); //현재 날짜와 시간정보를 가져와서 now에 저장
            //console.log(now);
            hr = now.getHours(),
            min = now.getMinutes(),
            sec = now.getSeconds();
            //console.log(hr, min, sec);

            //시간대별로 숫자 앞에 0을 붙이기
            if (hr < 10) {
                hrNum = '0' + hr
            } else {
                hrNum = hr
            }
            //분
            if (min < 10) {
                minNum = '0' + min
            } else {
                minNum = min
            }
            //초
            if (sec < 10) {
                secNum = '0' + sec
            } else {
                secNum = sec
            }

            //모바일 시계 안에 텍스트 보여주기 - text()
            /* 
                .find()/.filter()
                - 배열에서 특정 조건에 맞는 요소를 찾는데 선언하는 구문

                .find()
                - 배열(데이터그룹)에서 조건에 맞는 첫번째 요소를 찾아줌 -> 값이 하나만 출력
                - 원하는 조건의 데이터가 없으면 -> undefind를 출력

                .filter()
                - 조건에 맞는 모든 요소를 배열로 반환(어러개 가능)
                - 원하는 조건의 데이터가 없으면 -> 빈 배열이 출력 []
             */
            $span.filter('.hour').text(hrNum); //선택된 요소들 자체 기준
            $span.filter('.min').text(minNum);
            $span.filter('.sec').text(secNum);
            //$span.find('.hour').text(hrNum); 선택된 요소들의 자손 기준
        });
        
        //gnb
        $gnb.on('click', 'a', function() {
            $('.gnb').children('a').removeClass('on')
            $(this).addClass('on')
        });

        //테마버튼
        $themaBtn.on('click', 'a', function(e) {
            e.preventDefault();

            //$themaBtn의 자식요소인 li의 모든 클래스 삭제
            $themaBtn.children('li').removeClass('on');
            $(this).parent('li').addClass('on');

            let themaText = $(this).text()

            //$wrap이 가지고 있는 모든 클래스를 제거
            $wrap.removeClass();
            //$wrapText가 가지고 있는 텍스트 정보를 $wrap의 클래스명으로 추가
            $wrap.addClass(themaText);
        });

        //시간에 따라서 테마가 바뀌는
        now = new Date();
        hr = now.getHours();

        const $li = $themaBtn.find('li');
        //console.log(li)

        //morning 06 - 11
        if (hr >= 6 && hr <12) {
            $wrap.removeClass();
            $wrap.addClass('morning');

            $li.removeClass();
            $li.eq(0).addClass('on')
        } else if (hr >= 12 && hr < 18) {
            $wrap.removeClass();
            $wrap.addClass('afternoon');

            $li.removeClass();
            $li.eq(1).addClass('on')
        } else if (hr >= 18 && hr < 23) {
            $wrap.removeClass();
            $wrap.addClass('evening');

            $li.removeClass();
            $li.eq(2).addClass('on')
        } else if (hr >= 23 && hr < 6) {
            $wrap.removeClass();
            $wrap.addClass('night')

            $li.removeClass();
            $li.eq(3).addClass('on')
        }
    })
})