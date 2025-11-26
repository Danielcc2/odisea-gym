// --- LÓGICA DE MENÚ MÓVIL ---
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.querySelector('.menu-toggle');
    
    navLinks.classList.toggle('active');
    
    if (navLinks.classList.contains('active')) {
        menuToggle.innerHTML = '✕';
        menuToggle.style.position = 'fixed'; 
        menuToggle.style.right = '20px';
    } else {
        menuToggle.innerHTML = '☰';
        menuToggle.style.position = 'absolute';
        menuToggle.style.right = '20px';
    }
}

// --- LÓGICA DE COOKIES ---
const banner = document.getElementById('cookieBanner');
const modal = document.getElementById('cookieModal');

window.addEventListener('load', () => {
    const cookiesAccepted = localStorage.getItem('odiseaCookies');
    if (!cookiesAccepted) {
        setTimeout(() => {
            banner.classList.add('show');
        }, 1000);
    }
});

function acceptCookies() {
    localStorage.setItem('odiseaCookies', 'accepted');
    banner.classList.remove('show');
    closeCookieModal();
}

function rejectCookies() {
    localStorage.setItem('odiseaCookies', 'rejected');
    banner.classList.remove('show');
}

function openCookieModal() {
    modal.style.display = 'flex';
}

function closeCookieModal() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}