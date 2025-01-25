document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    const threshold = 100; // minimum scroll before hiding
    let ticking = false;

    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Only hide header after scrolling down threshold amount
        if (scrollTop > threshold) {
            if (scrollTop > lastScrollTop) {
                // Scrolling down
                header.classList.add('nav-hidden');
            } else {
                // Scrolling up
                header.classList.remove('nav-hidden');
            }
        } else {
            header.classList.remove('nav-hidden');
        }

        lastScrollTop = scrollTop;
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleScroll();
            });
            ticking = true;
        }
    }, { passive: true });
}); 