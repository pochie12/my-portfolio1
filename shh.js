function showSection(sectionId) {
    var sections = document.querySelectorAll('section');
    sections.forEach(function(section) {
        section.style.display = 'none';
        section.style.animation = '';
    });

    var existingElements = document.querySelectorAll('.snowflake, .raindrop, .shooting-star, .color-drop, .ashfall, .drifting-star, .firefly');
    existingElements.forEach(function(element) {
        element.parentNode.removeChild(element);
    });

    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
        selectedSection.style.animation = 'slideIn 0.5s ease-in-out';

        var container;

        if (sectionId === 'about') {
            container = document.querySelector('.snowfall');
            for (var i = 0; i < 50; i++) {
                var raindrop = document.createElement('div');
                raindrop.className = 'raindrop';
                raindrop.style.left = Math.random() * 100 + 'vw';
                raindrop.style.animationDuration = (Math.random() * 1 + 0.5) + 's';
                container.appendChild(raindrop);
            }
  
        } else if (sectionId === 'contact') {
            container = document.querySelector('.drifting-stars-container');
            for (var i = 0; i < 100; i++) {
                var driftingStar = document.createElement('div');
                driftingStar.className = 'drifting-star';
                driftingStar.style.left = Math.random() * 100 + 'vw';
                driftingStar.style.top = Math.random() * 100 + 'vh';
                driftingStar.style.animationDuration = (Math.random() * 5 + 2) + 's';
                
                driftingStar.style.backgroundColor = i % 2 === 0 ? 'blue' : 'purple';

                container.appendChild(driftingStar);
            }
        } else if (sectionId === 'social-media') {
            container = document.querySelector('.ashfall-container');
            for (var i = 0; i < 100; i++) {
                var ashfall = document.createElement('div');
                ashfall.className = 'ashfall';
                ashfall.style.left = Math.random() * 100 + 'vw';
                ashfall.style.animationDuration = (Math.random() * 2 + 1) + 's';
                
                ashfall.style.backgroundColor = 'red';
                
                container.appendChild(ashfall);
            }
        } else {
            container = document.querySelector('.snowfall');
            for (var i = 0; i < 50; i++) {
                var snowflake = document.createElement('div');
                snowflake.className = 'snowflake';
                snowflake.style.left = Math.random() * 100 + 'vw';
                snowflake.style.animationDuration = (Math.random() * 1 + 0.5) + 's';
                container.appendChild(snowflake);
            }
        }
    }
}
document.addEventListener('DOMContentLoaded', function () {
// ... (existing code)

// Add click event listener to the paper
var paper = document.querySelector('#home .paper');
var paperContent = document.querySelector('#home .paper-content');

paper.addEventListener('click', function () {
// Toggle the class to show/hide the content
paperContent.classList.toggle('visible');
});
});

document.addEventListener("DOMContentLoaded", function () {
const flyingImages = document.querySelectorAll(".flying-image");

function moveImage(image) {
const maxX = window.innerWidth - image.clientWidth;
const maxY = window.innerHeight - image.clientHeight;

const randomX = Math.floor(Math.random() * maxX);
const randomY = Math.floor(Math.random() * maxY);

// Ensure the image stays within the visible area
const constrainedX = Math.min(randomX, window.innerWidth - image.clientWidth);
const constrainedY = Math.min(randomY, window.innerHeight - image.clientHeight);

image.style.transform = `translate(${constrainedX}px, ${constrainedY}px)`;
}

function animateImages() {
flyingImages.forEach((image) => {
    moveImage(image);
});

setTimeout(animateImages, 3000); // Move images every 3 seconds
}

// Recalculate positions on window resize
window.addEventListener('resize', function () {
flyingImages.forEach((image) => {
    moveImage(image);
});
});

animateImages();
});


document.addEventListener('DOMContentLoaded', function() {
    var container = document.querySelector('.snowfall');
    for (var i = 0; i < 50; i++) {
        var snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.animationDuration = (Math.random() * 1 + 0.5) + 's';
        container.appendChild(snowflake);
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var loginPage = document.getElementById('login-page');
    var loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Here you can add your login logic
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Example: Check if username and password are correct
        if (username === 'your_username' && password === 'your_password') {
            // If authentication is successful, redirect to the main website
            window.location.href = 'index.html'; // Change this to your main website URL
        } else {
            alert('Invalid username or password. Please try again.');
        }

        
    });
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}