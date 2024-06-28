document.getElementById('search-button').addEventListener('click', function() {
    const searchInput = document.getElementById('search-input').value.toLowerCase().trim();
    const items = document.querySelectorAll('.item'); // 모든 item 요소를 선택합니다.

    items.forEach(item => {
        const dataName = item.getAttribute('data-name').toLowerCase();
        const altText = item.querySelector('img').getAttribute('alt').toLowerCase();
        if (dataName.includes(searchInput) || altText.includes(searchInput)) {
            item.closest('.ri').style.display = 'block'; // 검색어가 포함된 경우 보이도록 설정합니다.
        } else {
            item.closest('.ri').style.display = 'none'; // 검색어가 포함되지 않은 경우 숨깁니다.
        }
    });
});

// 검색 입력창에서 엔터 키를 눌렀을 때도 검색이 작동하도록 이벤트 리스너 추가
document.getElementById('search-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('search-button').click();
    }
});