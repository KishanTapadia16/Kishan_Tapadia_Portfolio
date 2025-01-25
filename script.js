document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    let prevScrollPos = window.pageYOffset;
    
    window.addEventListener('scroll', function() {
        const currentScrollPos = window.pageYOffset;
        
        // Show navbar only when at the very top
        if (currentScrollPos === 0) {
            header.classList.remove('nav-hidden');
        } else {
            header.classList.add('nav-hidden');
        }
        
        prevScrollPos = currentScrollPos;
    });
}); 