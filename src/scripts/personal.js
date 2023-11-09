export default (function () {   
    const PERSONAL_TITLE = document.querySelector(".personal__title")
    // const PERSONAL_TEXT = document.querySelector(".personal__text")
    // const PERSONAL_IMAGE = document.querySelector(".personal__image")

    const PERSONAL_HIDDEN = document.querySelector(".personal__container--hidden")

    PERSONAL_HIDDEN.style.display = "none"
    // PERSONAL_TEXT.style.display = "none"
    // PERSONAL_IMAGE.style.display = "none"

    PERSONAL_TITLE.addEventListener("click", clickHandler)
    
    function clickHandler() {
        
        const ARROW_PERSONAL = document.querySelector(".personalArrow")
        
        ARROW_PERSONAL.classList.toggle("fa-arrow-right-long")
        ARROW_PERSONAL.classList.toggle("fa-arrow-down-long")

        if (PERSONAL_HIDDEN.style.display === "none") {
            PERSONAL_HIDDEN.style.display = "flex"
        } else {
            PERSONAL_HIDDEN.style.display = "none"
        }
    }

})()
