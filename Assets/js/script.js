document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.getElementById("nav-bar");
    const home = document.getElementById("home");

    window.addEventListener("scroll", function() {
        if (window.scrollY >= home.clientHeight) {
            navbar.style.backgroundColor = "black";
        } else {
            navbar.style.backgroundColor = "transparent";
        }
    });
});

// JavaScript for Gallery Popup
let currentIndex = 0;

function openGalleryPopup(index) {
    currentIndex = index;
    const popup = document.getElementById('gallery-popup');
    const popupImage = document.getElementById('popup-image');
    popupImage.src = document.querySelectorAll('.photo img')[index].src;
    popup.style.display = 'block';
    document.addEventListener('keydown', handleKeyPress);
}

function closeGalleryPopup(event) {
    el = event?.srcElement?.className
    if (el && el != "next" && el != "prev") {
        document.getElementById('gallery-popup').style.display = 'none';
        document.removeEventListener('keydown', handleKeyPress);
    }
}

function changeImage(step) {
    currentIndex += step;
    const images = document.querySelectorAll('.photo img');
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    } else if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    document.getElementById('popup-image').src = images[currentIndex].src;
}

function handleKeyPress(event) {
    if (event.key === 'ArrowLeft') {
        changeImage(-1);
    } else if (event.key === 'ArrowRight') {
        changeImage(1);
    } else if (event.key === 'Escape') {
        closeGalleryPopup();
    }
}