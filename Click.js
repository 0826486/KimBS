const navToggle = (() => {
    const toggleDiv = document.getElementsByClassName("hem")[0];
    const toggleI = toggleDiv.getElementsByTagName("i")[0];
    const rightMenu = document.getElementsByClassName("right-menu")[0];

    toggleDiv.onclick = () => {
        toggleI.classList.toggle("bi-x-lg");
        toggleI.classList.toggle("bi-search");

        rightMenu.classList.toggle("show");
    }
});
navToggle();