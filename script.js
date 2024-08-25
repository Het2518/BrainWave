// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    if (this.checkValidity()) {
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Scroll to top button
const scrollToTopButton = document.getElementById('scrollToTop');
window.addEventListener('scroll', () => {
    scrollToTopButton.style.opacity = window.pageYOffset > 100 ? '1' : '0';
});
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Chat button
document.getElementById('chatButton').addEventListener('click', () => {
    alert('Chat functionality coming soon!');
});

// Progress bar
const progressBar = document.getElementById('progressBar');
window.addEventListener('scroll', () => {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.width = `${scrollPercentage}%`;
});

// Countdown timer
function updateCountdown() {
    const examDate = new Date('2025-02-01T00:00:00').getTime();
    const now = new Date().getTime();
    const distance = examDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `
        <div class="bg-gray-700 p-3 rounded-lg"><span class="text-3xl font-bold text-blue-300">${days}</span><span class="block text-sm text-gray-300">Days</span></div>
        <div class="bg-gray-700 p-3 rounded-lg"><span class="text-3xl font-bold text-blue-300">${hours}</span><span class="block text-sm text-gray-300">Hours</span></div>
        <div class="bg-gray-700 p-3 rounded-lg"><span class="text-3xl font-bold text-blue-300">${minutes}</span><span class="block text-sm text-gray-300">Minutes</span></div>
        <div class="bg-gray-700 p-3 rounded-lg"><span class="text-3xl font-bold text-blue-300">${seconds}</span><span class="block text-sm text-gray-300">Seconds</span></div>
    `;
}

setInterval(updateCountdown, 1000);