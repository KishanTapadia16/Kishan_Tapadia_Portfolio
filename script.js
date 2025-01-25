let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('nav-hidden');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('nav-hidden')) {
        // Scrolling down
        header.classList.add('nav-hidden');
    } else if (currentScroll < lastScroll && header.classList.contains('nav-hidden')) {
        // Scrolling up
        header.classList.remove('nav-hidden');
    }
    
    lastScroll = currentScroll;
}); 