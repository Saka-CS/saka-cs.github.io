import './style.css';

document.addEventListener('DOMContentLoaded', () => {
    // Determine the active link based on current path
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        // Check if the current path ends with the href, or if we are at root and href is index.html
        if (currentPath.endsWith(href) || (currentPath === '/' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Add micro-animations to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mousedown', () => {
            btn.style.transform = 'scale(0.95)';
        });
        btn.addEventListener('mouseup', () => {
            btn.style.transform = '';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = '';
        });
    });

    // Add email copy to clipboard functionality
    const emailCopy = document.getElementById('email-copy');
    if (emailCopy) {
        emailCopy.addEventListener('click', () => {
            const emailAddress = 'hassan.alkhamis404@gmail.com';
            navigator.clipboard.writeText(emailAddress).then(() => {
                const originalText = emailCopy.innerText;
                emailCopy.innerText = 'Copied to clipboard!';
                emailCopy.style.color = '#4ade80'; // Success green color
                
                setTimeout(() => {
                    emailCopy.innerText = originalText;
                    emailCopy.style.color = ''; // Reset to default style
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    }
    // Add form submission and modal logic
    const contactForm = document.getElementById('contact-form');
    const modal = document.getElementById('thank-you-modal');
    const closeModal = document.getElementById('close-modal');

    if (contactForm && modal) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerText;
            submitBtn.innerText = 'Sending...';
            submitBtn.disabled = true;

            const data = new FormData(contactForm);
            
            try {
                const response = await fetch(contactForm.action, {
                    method: contactForm.method,
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    contactForm.reset();
                    modal.classList.add('show');
                } else {
                    alert('Oops! There was a problem submitting your form');
                }
            } catch (error) {
                alert('Oops! There was a problem submitting your form');
            } finally {
                submitBtn.innerText = originalBtnText;
                submitBtn.disabled = false;
            }
        });

        // Close modal logic
        if (closeModal) {
            closeModal.addEventListener('click', () => {
                modal.classList.remove('show');
            });
        }

        // Close when clicking outside of modal
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('show');
            }
        });
    }
});
