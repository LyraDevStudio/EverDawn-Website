/**
 * EverDawn Website - Main JavaScript
 * Handles scroll animations, copy IP functionality, and interactions
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initCopyButtons();
    initDiscordButtons();
    initMobileNav();
});

/**
 * Initialize Intersection Observer for scroll-triggered animations
 */
function initScrollAnimations() {
    const revealElements = document.querySelectorAll('[data-reveal]');
    
    if (!revealElements.length) return;
    
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    revealElements.forEach((element) => {
        observer.observe(element);
    });
    
    // Special animation for stats divider
    const statsDivider = document.querySelector('.stats-divider');
    if (statsDivider) {
        const dividerObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.3 });
        
        dividerObserver.observe(statsDivider);
    }
}

/**
 * Initialize copy IP buttons
 */
function initCopyButtons() {
    const serverIP = 'mc.everdawn.fr';
    
    const copyButtons = [
        { id: 'heroIpBtn', icon: false },
        { id: 'aboutCopyBtn', icon: false },
        { id: 'joinCopyBtn', icon: true },
        { id: 'ctaCopyBtn', icon: true }
    ];
    
    copyButtons.forEach(({ id, icon }) => {
        const button = document.getElementById(id);
        if (!button) return;
        
        button.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(serverIP);
                showCopyFeedback(button, icon);
            } catch (err) {
                // Fallback for older browsers
                const success = fallbackCopyToClipboard(serverIP);
                if (success) {
                    showCopyFeedback(button, icon);
                } else {
                    console.error('Failed to copy IP:', err);
                }
            }
        });
    });
}

/**
 * Show visual feedback after copying IP
 * @param {HTMLElement} button - Button element
 * @param {boolean} useIcon - Whether button uses icon
 */
function showCopyFeedback(button, useIcon) {
    const originalContent = button.innerHTML;
    const originalClasses = button.className;
    
    // Change button appearance
    if (useIcon) {
        button.innerHTML = '<i class="bi bi-check-circle"></i> Copié !';
    } else {
        button.innerHTML = 'Copié !';
    }
    
    button.classList.add('btn-success');
    button.style.background = '#10b981';
    button.style.pointerEvents = 'none';
    
    // Reset after 2 seconds
    setTimeout(() => {
        button.innerHTML = originalContent;
        button.className = originalClasses;
        button.style.background = '';
        button.style.pointerEvents = '';
    }, 2000);
}

/**
 * Fallback copy method for older browsers
 * @param {string} text - Text to copy
 * @returns {boolean} Success status
 */
function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.setAttribute('readonly', '');
    
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        return successful;
    } catch (err) {
        document.body.removeChild(textArea);
        return false;
    }
}

/**
 * Initialize Discord buttons
 */
function initDiscordButtons() {
    const discordURL = 'https://discord.everdawn.fr';
    
    const discordButtons = [
        'navDiscord',
        'discordMainBtn',
        'ctaDiscordBtn'
    ];
    
    discordButtons.forEach((id) => {
        const button = document.getElementById(id);
        if (!button) return;
        
        button.addEventListener('click', () => {
            window.open(discordURL, '_blank');
        });
    });
}

/**
 * Initialize mobile navigation toggle
 */
function initMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const navLeft = document.querySelector('.nav-left');
    
    if (!navToggle || !navLeft) return;
    
    navToggle.addEventListener('click', () => {
        navLeft.classList.toggle('mobile-active');
    });
}

/**
 * Optional: Simulate player count (replace with real API call)
 */
function updatePlayerCount() {
    const playerCountElement = document.getElementById('playerCount');
    if (!playerCountElement) return;
    
    // Replace with actual API call to get player count
    // Example: fetch('https://api.everdawn.fr/players')
    //   .then(res => res.json())
    //   .then(data => playerCountElement.textContent = data.online);
    
    // Placeholder simulation
    const simulatedCount = Math.floor(Math.random() * 100);
    playerCountElement.textContent = simulatedCount;
}

// Optional: Update player count on load
// updatePlayerCount();

// Optional: Update player count every 30 seconds
// setInterval(updatePlayerCount, 30000);

/**
 * Smooth scroll for anchor links
 */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

/**
 * Add scroll effect to navigation
 */
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
