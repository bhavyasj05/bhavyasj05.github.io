// Performance Optimization Script
document.addEventListener('DOMContentLoaded', () => {
    // Defer non-critical resources
    const deferredStyles = document.createElement('link');
    deferredStyles.rel = 'stylesheet';
    deferredStyles.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
    document.head.appendChild(deferredStyles);

    // Smooth scroll polyfill
    function smoothScroll(target) {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // Add smooth scroll to all navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScroll(this.getAttribute('href'));
        });
    });

    // Performance monitoring
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const timing = window.performance.timing;
            const loadTime = timing.loadEventEnd - timing.navigationStart;
            console.log(`Page load time: ${loadTime}ms`);
        });
    }

    // Intersection Observer for lazy loading
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    image.src = image.dataset.src;
                    observer.unobserve(image);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    }
});
