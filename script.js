document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const offset = 60; 
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = targetElement.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('.hdr');
    if (window.scrollY > 50) {
        header.style.backgroundColor = '#1e1e1e';
        header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
    } else {
        header.style.backgroundColor = '#222222';
        header.style.boxShadow = 'none';
    }
});
