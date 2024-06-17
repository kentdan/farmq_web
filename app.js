const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        document.querySelectorAll('.nav-link').
        forEach(n => n.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }));

document.addEventListener("DOMContentLoaded", function () {
    const scrollElements = document.querySelectorAll('a[href^="#"]');
    
    scrollElements.forEach((scrollElement) => {
        scrollElement.addEventListener("click", function (e) {
            e.preventDefault();
    
            const targetId = scrollElement.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
    
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });
});
