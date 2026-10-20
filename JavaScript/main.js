/**
 * Main Site Interactions for Kasi-Tech Solutions
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Highlight current active navigation link based on current URL filename
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.site-nav a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop();
        if (linkPath === currentPath) {
            link.setAttribute('aria-current', 'page');
            link.style.fontWeight = 'bold';
        } else {
            link.removeAttribute('aria-current');
        }
    });

    // 2. Dynamic Copyright Year Update
    const yearElements = document.querySelectorAll('.footer-bottom p');
    const currentYear = new Date().getFullYear();
    yearElements.forEach(el => {
        if (el.textContent.includes('2026') || el.textContent.includes('All Rights Reserved') || el.textContent.includes('All rights reserved.')) {
            el.innerHTML = `&copy; ${currentYear} Kasi-Tech Solutions. All rights reserved.`;
        }
    });

    // 3. Smooth scrolling for internal anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.length > 1) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});