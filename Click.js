// JavaScript 코드
document.addEventListener("DOMContentLoaded", function() {
    // 자컨 메뉴 아이템 선택
    var video = document.querySelector(".menubar ul.video");

    // 클릭 이벤트 리스너 추가
    video.addEventListener("click", function() {
        // 클릭했을 때 이동할 URL
        var url = "http://127.0.0.1:5500/News.html"; // 실제 자컨 페이지 URL로 변경해야 합니다.

        // 새 창 또는 탭에서 URL 열기
        window.open(url, "_blank");
    });
});
