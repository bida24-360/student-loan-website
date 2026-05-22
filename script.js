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

        // Pause before deleting
        if (!isDeleting && charIndex === currentText.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

        // Move to next text
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

// =======================
// AUTO-FILL BOOKING FORM
// =======================

const urlParams = new URLSearchParams(window.location.search);

const from = urlParams.get('from');
const to = urlParams.get('to');

const departureSelect = document.getElementById('departure');
const destinationSelect = document.getElementById('destination');

if (departureSelect && destinationSelect) {

    if (from) {
        departureSelect.value = from;
    }

    if (to) {
        destinationSelect.value = to;
    }

}

// =======================
// SEAT SELECTION + TOTAL PRICE
// =======================

const seats =
    document.querySelectorAll('.seat:not(.occupied)');

const selectedSeatsText =
    document.getElementById('selected-seats');

const seatNumbersText =
    document.getElementById('seat-numbers');

const totalPriceText =
    document.getElementById('total-price');

const seatPrice = 250;

let selectedSeats = [];

seats.forEach(seat => {

    seat.addEventListener('click', () => {

        seat.classList.toggle('selected');

        const seatNumber =
            seat.textContent.trim();

        if (selectedSeats.includes(seatNumber)) {

            selectedSeats =
                selectedSeats.filter(
                    s => s !== seatNumber
                );

        } else {

            selectedSeats.push(seatNumber);

        }

        // UPDATE TOTALS

        selectedSeatsText.textContent =
            selectedSeats.length;

        seatNumbersText.textContent =
            selectedSeats.join(', ') || 'None';

        totalPriceText.textContent =
            selectedSeats.length * seatPrice;

    });

});