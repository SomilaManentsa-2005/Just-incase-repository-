/**
 * Cross-Site Search Component for Kasi-Tech Solutions
 */
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('live-search-input') || document.querySelector('.site-search-input');
    
    if (!searchInput) return;

    // Comprehensive site-wide content index
    const sitePagesIndex = [
        { title: "Web Application Development", category: "Services", desc: "Custom multi-page websites, online enquiry forms, and tools.", url: "./pages/Services.html" },
        { title: "Network Infrastructure & Support", category: "Services", desc: "Office networks, Wi-Fi routers, firewalls, and cabling solutions.", url: "./pages/Services.html" },
        { title: "Database & System Analysis", category: "Services", desc: "Small business data design, customer order management, and SQL databases.", url: "./pages/Services.html" },
        { title: "Somila Manentsa", category: "About Us / Team", desc: "IT Manager & Systems Analyst leading project management and IT governance.", url: "./pages/About.html" },
        { title: "Landile Mbuti", category: "About Us / Team", desc: "Infrastructure Specialist focusing on VLANs and network architecture.", url: "./pages/About.html" },
        { title: "Asavela Ngcamla", category: "About Us / Team", desc: "Database Architect specializing in SQL query optimization and 3NF data integrity.", url: "./pages/About.html" },
        { title: "Kubobonke Diko", category: "About Us / Team", desc: "Web Systems Developer engineering responsive user interfaces.", url: "./pages/About.html" },
        { title: "Mission & Vision", category: "About Us", desc: "Empowering local small-to-medium enterprises with digital infrastructure.", url: "./pages/About.html" },
        { title: "Company History", category: "About Us", desc: "Founded in 2023 in Nelson Mandela Bay / Gqeberha.", url: "./pages/About.html" },
        { title: "Consultation Booking", category: "Enquiry", desc: "Book a consultation or request custom service fee quotations.", url: "./pages/Enquiry.html" },
        { title: "Request a Callback", category: "Contact Us", desc: "Submit contact details to get a callback from our technical team.", url: "./pages/ContactUs.html" },
        { title: "Location & Operating Hours", category: "Contact Us", desc: "Motherwell, Gqeberha. Open Mon-Fri 08:00-17:00, Weekends 09:00-14:00.", url: "./pages/ContactUs.html" }
    ];

    const searchWrapper = searchInput.parentElement;
    searchWrapper.style.position = 'relative';

    // Remove any existing results box to prevent duplicates
    const existingBox = document.getElementById('search-results-overlay');
    if (existingBox) existingBox.remove();

    // Create high-visibility floating dropdown results panel
    const resultsBox = document.createElement('div');
    resultsBox.id = 'search-results-overlay';
    resultsBox.style.cssText = `
        display: none;
        position: absolute;
        top: calc(100% + 8px);
        left: 0;
        width: 100%;
        max-height: 350px;
        overflow-y: auto;
        background-color: #ffffff;
        border: 2px solid #f39c12;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
        z-index: 9999;
        padding: 10px;
        box-sizing: border-box;
    `;
    searchWrapper.appendChild(resultsBox);

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        resultsBox.innerHTML = '';

        if (query === '') {
            resultsBox.style.display = 'none';
            return;
        }

        let matchesFound = 0;

        sitePagesIndex.forEach(item => {
            if (item.title.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query) || item.category.toLowerCase().includes(query)) {
                matchesFound++;

                const resultItem = document.createElement('div');
                resultItem.style.cssText = `
                    padding: 10px 12px;
                    margin-bottom: 6px;
                    border-radius: 6px;
                    background-color: #f9f9f9;
                    cursor: pointer;
                    border-left: 4px solid #f39c12;
                    transition: background 0.2s ease;
                `;

                resultItem.innerHTML = `
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <span style="font-weight: bold; color: #2c3e50; font-size: 0.95rem;">${item.title}</span>
                        <span style="font-size: 0.75rem; background: #e0e0e0; padding: 2px 6px; border-radius: 4px; color: #333;">${item.category}</span>
                    </div>
                    <div style="font-size: 0.85rem; color: #555; margin-top: 4px;">${item.desc}</div>
                `;

                resultItem.addEventListener('mouseenter', () => resultItem.style.backgroundColor = '#fff3e0');
                resultItem.addEventListener('mouseleave', () => resultItem.style.backgroundColor = '#f9f9f9');

                resultItem.addEventListener('click', () => {
                    window.location.href = item.url;
                });

                resultsBox.appendChild(resultItem);
            }
        });

        if (matchesFound === 0) {
            resultsBox.innerHTML = `
                <div style="padding: 12px; text-align: center; color: #777; font-size: 0.9rem;">
                    No matches found for "<strong>${query}</strong>"
                </div>
            `;
        }

        resultsBox.style.display = 'block';
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!searchWrapper.contains(e.target)) {
            resultsBox.style.display = 'none';
        }
    });
});