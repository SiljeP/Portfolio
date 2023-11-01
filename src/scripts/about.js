export default (function () {
    const OBSERVER = new IntersectionObserver(callback, {
        threshold: 1.0
    })
    const PARAGRAPHS = document.querySelectorAll(".about")
    PARAGRAPHS.forEach(p => OBSERVER.observe(p))
    function callback(entries) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                entry.target.style.opacity = "0"
            }
            if (entry.intersectionRatio >= 0.5) {
                entry.target.style.opacity = "1"
            } else {
                entry.target.style.opacity = "0"
            }

        })
    }
    })()
