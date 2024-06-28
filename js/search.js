document.getElementById('search-button').addEventListener('click', function() {
    const searchInput = document.getElementById('search-input').value.toLowerCase().trim(); // 입력값을 소문자로 변환하고 공백을 제거합니다.
    const images = document.querySelectorAll('.rize'); // 모든 이미지 요소를 선택합니다.

    images.forEach(image => {
        const altText = image.getAttribute('alt').toLowerCase(); // 각 이미지의 alt 속성 값을 가져옵니다.
        if (altText.includes(searchInput)) {
            image.closest('.ri').style.display = 'block'; // 검색어가 포함된 경우 이미지를 포함하는 부모 요소인 .ri를 보이도록 설정합니다.
        } else {
            image.closest('.ri').style.display = 'none'; // 검색어가 포함되지 않은 경우 해당 이미지를 포함하는 부모 요소를 숨깁니다.
        }
    });
});

// 검색 입력창에서 엔터 키를 눌렀을 때도 검색이 작동하도록 이벤트 리스너 추가
document.getElementById('search-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('search-button').click(); // Enter 키를 눌렀을 때 검색 버튼을 클릭하도록 설정합니다.
    }
});