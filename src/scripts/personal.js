export default (function () {   
    const PERSONAL_TITLE = document.querySelector(".personal__title")
    const PERSONAL_TEXT = document.querySelector(".personal__text")

    PERSONAL_TEXT.style.display = "none"

    PERSONAL_TITLE.addEventListener("click", clickHandler)
    function clickHandler() {
        
        const ARROW_PERSONAL = document.querySelector(".personalArrow")
        
        ARROW_PERSONAL.classList.toggle("fa-arrow-right-long")
        ARROW_PERSONAL.classList.toggle("fa-arrow-down-long")

        if (PERSONAL_TEXT.style.display === "none") {
            PERSONAL_TEXT.style.display = "contents"
        } else {
            PERSONAL_TEXT.style.display = "none"
        }
    }

})()
