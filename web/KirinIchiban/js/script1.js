$(function(){
    const loading = $(".loading");

    // 페이지 로드 후 로딩 화면 제거 및 스크롤 처리
    $(window).on("load", function(){
        loading.remove();
    });
    $(window).on("pageshow",function(){
        $("html,body").css({"overflow":"visible"});
        $("html,body").scrollTop($(document).height());
    });

    // 네비게이션 스크롤 애니메이션 처리 함수
    function applyNavScroll(navItem, targetId) {
        $(navItem).click(function(){
            $(targetId).animatescroll({ scrollSpeed: 200, easing: 'easeInQuad' });
        });
    }

    // 네비게이션 스크롤 이벤트 적용
    applyNavScroll(".navbar li:nth-child(1) a", '#top');
    applyNavScroll(".navbar li:nth-child(2) a", '#birth');
    applyNavScroll(".navbar li:nth-child(3) a", '#secret');
    applyNavScroll(".navbar li:nth-child(4) a", '#products');
    applyNavScroll(".navbar li:nth-child(5) a", '#cf');
    applyNavScroll(".navbar li:nth-child(6) a", '#garden');
    applyNavScroll(".navbar li:nth-child(7) a", '#contact');

    // Waypoint 애니메이션 적용 함수
    function applyWaypointAnimation(element, animationClass, offsetDown, offsetUp) {
        $(element).waypoint(function(direction){
            if(direction === 'down'){
                $(element).addClass(`animate__animated ${animationClass}`);
            }
        }, { offset: offsetDown });
        
        $(element).waypoint(function(direction){
            if(direction === 'up'){
                $(element).removeClass(`animate__animated ${animationClass}`);
            }
        }, { offset: offsetUp });
    }

    // Waypoint 애니메이션 적용
    const OFFSET_90 = "90%";
    const OFFSET_80 = "80%";
    const OFFSET_70 = "70%";
    const OFFSET_60 = "60%";
    const OFFSET_50 = "50%";

    applyWaypointAnimation(".wp1", "animate__fadeInUp", OFFSET_90, OFFSET_90);
    applyWaypointAnimation(".wp2", "animate__fadeInDown", OFFSET_90, OFFSET_80);
    applyWaypointAnimation(".wp3", "animate__fadeInLeftBig", OFFSET_70, OFFSET_70);
    applyWaypointAnimation(".wp4", "animate__fadeInRightBig", OFFSET_60, OFFSET_60);
    applyWaypointAnimation(".wp5", "animate__fadeIn", OFFSET_70, OFFSET_70);
    applyWaypointAnimation(".wp6", "animate__fadeIn", OFFSET_50, OFFSET_50);
    applyWaypointAnimation(".wp7", "animate__fadeInUp", OFFSET_80, OFFSET_50);
    applyWaypointAnimation(".wp8", "animate__fadeInDown", OFFSET_80, OFFSET_80);
    applyWaypointAnimation(".wp9", "animate__fadeInDown", OFFSET_80, OFFSET_80);
    applyWaypointAnimation(".wp10", "animate__fadeIn", OFFSET_70, OFFSET_70);
    applyWaypointAnimation(".wp11", "animate__fadeInUp", OFFSET_80, OFFSET_80);
    applyWaypointAnimation(".wp12", "animate__fadeInDown", OFFSET_80, OFFSET_80);
    applyWaypointAnimation(".wp13", "animate__fadeIn", OFFSET_70, OFFSET_70);
    applyWaypointAnimation(".wp14", "animate__fadeIn", OFFSET_50, OFFSET_50);
    applyWaypointAnimation(".wp15", "animate__fadeIn", OFFSET_80, OFFSET_80);
    applyWaypointAnimation(".wp16", "animate__fadeIn", OFFSET_70, OFFSET_70);
    applyWaypointAnimation(".wp17", "animate__fadeIn", OFFSET_60, OFFSET_60);
    applyWaypointAnimation(".wp18", "animate__fadeIn", OFFSET_50, OFFSET_50);
});
