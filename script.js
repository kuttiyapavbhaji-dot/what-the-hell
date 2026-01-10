// Initialize on page load
window.onload = function() {
    // Start countdown timer (assuming fight started 4 days ago; adjust startDate)
const startDate = new Date('2026-01-07'); // Replace with actual fight start date (YYYY-MM-DD)
    updateTimer();
    setInterval(updateTimer, 1000);
    // Initialize slideshow
    currentSlide = 0;
    showSlide(currentSlide);
    
    // Check if music can play (for debugging)
    const music = document.getElementById('background-music');
    music.volume = 0.3; // Keep it soft
    console.log('Music file loaded:', music.src); // Debug: Check if file path is correct
};

// Play music on button click
function playMusic() {
    const music = document.getElementById('background-music');
    music.play().then(() => {
        console.log('Music started playing');
        document.getElementById('play-music-btn').style.display = 'none'; // Hide button after play
    }).catch(e => {
        console.error('Music play failed:', e); // Debug: Log errors
        alert('Music couldn\'t play. Check your browser settings or file.');
    });
}

// Toggle music function (pause/resume)
function toggleMusic() {
    const music = document.getElementById('background-music');
    if (music.paused) {
        music.play();
    } else {
        music.pause();
    }
}

// Countdown timer function
function updateTimer() {
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById('timer').innerText = `${days} days, ${hours} hours`;
}

// Reveal hidden message
function revealMessage() {
    document.getElementById('hidden-message').style.display = 'block';
}

// Slideshow functions
let currentSlide = 0;
const slides = [
    { img: 'memory1.jpg', caption: 'Our first date - That magical evening at the park.' },
    { img: 'memory2.jpg', caption: 'Sunset walk - Watching the sky turn orange, holding hands.' },
    { img: 'memory3.jpg', caption: 'Cooking adventure - Making a mess, but laughing through it.' },
    { img: 'memory4.jpg', caption: 'Birthday surprise - Your face when you saw the cake.' },
    { img: 'memory5.jpg', caption: 'Road trip - Singing along, windows down.' },
    { img: 'memory6.jpg', caption: 'Dancing in the rain - Spontaneous and fun.' },
    { img: 'memory7.jpg', caption: 'Movie night - Cozy under blankets.' },
    { img: 'memory8.jpg', caption: 'Holding hands - Simple moments that mean everything.' },
    { img: 'memory9.jpg', caption: 'Favorite spot - Our secret place.' },
    { img: 'memory10.jpg', caption: 'Smiling together - Capturing our happiness.' },
    { img: 'memory11.jpg', caption: 'Anniversary - Celebrating us with a picnic.' },
    { img: 'memory12.jpg', caption: 'Late-night talks - Sharing dreams under the stars.' }
];

function showSlide(index) {
    document.getElementById('slide-image').src = slides[index].img;
    document.getElementById('slide-caption').innerText = slides[index].caption;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}
