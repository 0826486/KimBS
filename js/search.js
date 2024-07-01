document.getElementById('search-button').addEventListener('click', function() {
    const searchInput = document.getElementById('search-input').value.toLowerCase().trim();
    const items = document.querySelectorAll('.ri'); // 모든 .ri 요소를 선택합니다.

    items.forEach(item => {
        const image = item.querySelector('img');
        const dataName = item.querySelector('a').getAttribute('data-name').toLowerCase();
        const altText = image.getAttribute('alt').toLowerCase();

        if (dataName.includes(searchInput) || altText.includes(searchInput)) {
            item.style.display = 'block'; // 검색어가 포함된 경우 보이도록 설정합니다.
        } else {
            item.style.display = 'none'; // 검색어가 포함되지 않은 경우 숨깁니다.
        }
    });
});

// 검색 입력창에서 엔터 키를 눌렀을 때도 검색이 작동하도록 이벤트 리스너 추가
document.getElementById('search-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('search-button').click(); // Enter 키를 눌렀을 때 검색 버튼을 클릭하도록 설정합니다.
    }
});