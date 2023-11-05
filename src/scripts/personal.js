export default (function () {  
    const PERSONAL_TITLE = document.querySelector(".personal__title")
    const PERSONAL_TEXT = document.querySelector(".personal__text")

    PERSONAL_TEXT.style.display = "none"


    const OBSERVER = new IntersectionObserver(callback, {
        threshold: 0.7
    })
    const PARAGRAPHS = document.querySelectorAll(".personal")
    PARAGRAPHS.forEach(p => OBSERVER.observe(p))
    function callback(entries) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                entry.target.style.opacity = "0"
            }
            if (entry.intersectionRatio >= 0.5) {
            
                entry.target.style.opacity = "1"
                entry.target.style.transition = "opacity 2s ease"
            } else {
                entry.target.style.opacity = "0"
            }

        })
    }

    PERSONAL_TITLE.addEventListener("click", clickHandler)
    function clickHandler(){
        if (PERSONAL_TEXT.style.display === "none") {
            PERSONAL_TEXT.style.display = "contents"
        }else{
            PERSONAL_TEXT.style.display = "none"
        }
    }


    })()
