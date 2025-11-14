// SEO and Accessibility Optimization
document.addEventListener('DOMContentLoaded', () => {
    // Add aria labels to improve accessibility
    const addAriaLabels = () => {
        const nav = document.querySelector('nav');
        if (nav) nav.setAttribute('aria-label', 'Main Navigation');

        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const sectionId = section.id;
            const sectionTitle = section.querySelector('h2');
            if (sectionTitle) {
                section.setAttribute('aria-labelledby', `${sectionId}-title`);
                sectionTitle.id = `${sectionId}-title`;
            }
        });
    };

    // Generate alt text for images dynamically
    const improveImageAccessibility = () => {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (!img.alt) {
                const parentSection = img.closest('section');
                const sectionTitle = parentSection ? 
                    parentSection.querySelector('h2')?.textContent : 
                    'Portfolio Image';
                img.alt = sectionTitle || 'Bhavya S J Portfolio Image';
            }
        });
    };

    // Track user interactions for potential SEO insights
    const trackUserInteractions = () => {
        const trackEvent = (category, action) => {
            if (window.gtag) {
                window.gtag('event', action, {
                    'event_category': category,
                    'event_label': window.location.pathname
                });
            }
        };

        document.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                trackEvent('navigation', 'click');
            });
        });

        document.querySelectorAll('section').forEach(section => {
            section.addEventListener('mouseenter', () => {
                trackEvent('section_view', section.id);
            });
        });
    };

    // Add schema.org markup dynamically
    const enhanceStructuredData = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            const projects = projectsSection.querySelectorAll('.project-card');
            const projectsSchema = {
                "@context": "http://schema.org",
                "@type": "ItemList",
                "itemListElement": Array.from(projects).map((project, index) => ({
                    "@type": "ListItem",
                    "position": index + 1,
                    "item": {
                        "@type": "SoftwareApplication",
                        "name": project.querySelector('h3')?.textContent,
                        "description": project.querySelector('p')?.textContent
                    }
                }))
            };

            const scriptTag = document.createElement('script');
            scriptTag.type = 'application/ld+json';
            scriptTag.textContent = JSON.stringify(projectsSchema);
            document.head.appendChild(scriptTag);
        }
    };

    // Run optimization functions
    addAriaLabels();
    improveImageAccessibility();
    trackUserInteractions();
    enhanceStructuredData();
});
