function hookScrollFadeIn() {
    const selector = ".scroll-fade-in";
    const shownClass = "scroll-fade-in-shown";

    const elements = document.querySelectorAll(selector);
    let shownElements = 0;

    const observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                observer.unobserve(entry.target);
                entry.target.classList.add(shownClass);
            }

            if (shownElements >= elements.length) {
                observer.disconnect();
            }
        }
    }, {
        rootMargin: "-0% 0% -15% 0%",
        threshold: 0.2
    });


    for (const el of elements) {
        observer.observe(el);
    }
}

export default hookScrollFadeIn;