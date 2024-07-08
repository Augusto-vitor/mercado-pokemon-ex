let currentIndex = 0;

function moveLeft() {
    const galleryWrapper = document.querySelector('.gallery-wrapper');
    const items = document.querySelectorAll('.gallery-item');
    if (currentIndex > 0) {
        currentIndex--;
        updateGalleryPosition();
    }
}

function moveRight() {
    const galleryWrapper = document.querySelector('.gallery-wrapper');
    const items = document.querySelectorAll('.gallery-item');
    if (currentIndex < items.length - 1) {
        currentIndex++;
        updateGalleryPosition();
    }
}

function updateGalleryPosition() {
    const galleryWrapper = document.querySelector('.gallery-wrapper');
    const itemWidth = document.querySelector('.gallery-item').offsetWidth;
    galleryWrapper.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}
