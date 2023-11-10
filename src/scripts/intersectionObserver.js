export default (function () {
    const OBSERVER = new IntersectionObserver(callback, {
        threshold: 0.7
    })
    const PARAGRAPHS = document.querySelectorAll(".intersection")
    PARAGRAPHS.forEach(p => OBSERVER.observe(p))
    function callback(entries) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                entry.target.style.opacity = "0"
            }
            if (entry.intersectionRatio >= 0.7) {
            
                entry.target.style.opacity = "1"
                entry.target.style.transition = "opacity 2s ease"
            } else {
                entry.target.style.opacity = "0"
            }

        })
    }
    })()
