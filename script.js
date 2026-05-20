// =======================
// DARK MODE
// =======================

const toggleButton = document.getElementById('theme-toggle');

if (toggleButton) {

    // Load saved theme
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        toggleButton.textContent = 'Light Mode';
    }

    toggleButton.addEventListener('click', function () {

        document.body.classList.toggle('dark-mode');

        if (document.body.classList.contains('dark-mode')) {
            toggleButton.textContent = 'Light Mode';
            localStorage.setItem('theme', 'dark');
        } else {
            toggleButton.textContent = 'Dark Mode';
            localStorage.setItem('theme', 'light');
        }

    });

}

// =======================
// TYPING ANIMATION
// =======================

const typingElement = document.getElementById('typing-headline');

if (typingElement) {

    const texts = [
        "Welcome to SwiftBus Botswana",
        "Book Your Bus Tickets Online",
        "Fast • Safe • Reliable",
        "Travel Made Easy"
    ];

    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function typeEffect() {

        const currentText = texts[textIndex];

        if (isDeleting) {
            typingElement.textContent =
                currentText.substring(0, charIndex - 1);

            charIndex--;

        } else {

            typingElement.textContent =
                currentText.substring(0, charIndex + 1);

            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length) {

            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

        if (isDeleting && charIndex === 0) {

            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
        }

        const speed = isDeleting ? 50 : 100;

        setTimeout(typeEffect, speed);
    }

    typeEffect();
}

// =======================
// BACK TO TOP BUTTON
// =======================

const backToTopButton = document.getElementById('back-to-top');

if (backToTopButton) {

    window.addEventListener('scroll', function () {

        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }

    });

    backToTopButton.addEventListener('click', function () {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    });

}