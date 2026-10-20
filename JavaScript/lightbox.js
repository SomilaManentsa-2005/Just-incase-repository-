/**
 * Lightbox Component for Kasi-Tech Solutions
 * Automatically attaches lightbox functionality to service/gallery images.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Create lightbox overlay container dynamically
    const lightbox = document.createElement('div');
    lightbox.id = 'kasi-lightbox';
    lightbox.style.cssText = `
        display: none;
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.85);
        justify-content: center;
        align-items: center;
        padding: 20px;
        box-sizing: border-box;
    `;

    lightbox.innerHTML = `
        <div style="position: relative; max-width: 90%; max-height: 90%;">
            <span id="lightbox-close" style="position: absolute; top: -40px; right: 0; color: #fff; font-size: 35px; font-weight: bold; cursor: pointer; background: none; border: none;">&times;</span>
            <img id="lightbox-img" src="" alt="Enlarged View" style="display: block; max-width: 100%; max-height: 85vh; border-radius: 8px; box-shadow: 0 5px 25px rgba(0,0,0,0.5);">
        </div>
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close');

    // Select target images (e.g., service images on Services.html[cite: 4])
    const targetImages = document.querySelectorAll('.service-image, .lightbox-target');

    targetImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });

    // Close lightbox actions
    const closeLightbox = () => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    };

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'flex') {
            closeLightbox();
        }
    });
});