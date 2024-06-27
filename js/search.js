document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('query');
    const allImages = document.querySelectorAll(".rize");

    function displaySearchResults(searchTerm) {
        searchTerm = searchTerm.toLowerCase();

        allImages.forEach(image => {
            const id = image.id.toLowerCase();
            const parentDiv = image.closest(".ri");

            if (id.includes(searchTerm)) {
                parentDiv.style.display = "block";
            } else {
                parentDiv.style.display = "none";
            }
        });
    }

    // 페이지가 로드될 때 검색어가 있으면 바로 검색 결과 표시
    if (searchTerm) {
        displaySearchResults(searchTerm);
    }
});
