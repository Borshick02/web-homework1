// Переключение темы
document.getElementById('change-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Карусель изображений
const images = document.querySelectorAll('.carousel img');
const dots = document.querySelectorAll('.carousel-dots .dot');
let currentIndex = 0;

function updateCarousel(index) {
    images.forEach(img => img.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    images[index].classList.add('active');
    dots[index].classList.add('active');
}

// Слушатели кликов на точки
dots.forEach(dot => {
    dot.addEventListener('click', function() {
        currentIndex = parseInt(this.dataset.index);
        updateCarousel(currentIndex);
    });
});

// Переключение изображений при клике на левую или правую часть
function changeImage(event) {
    const totalImages = images.length;
    const carouselWidth = event.target.offsetWidth;

    if (event.offsetX < carouselWidth / 2) {
        // Клик в левую часть
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    } else {
        // Клик в правую часть
        currentIndex = (currentIndex + 1) % totalImages;
    }

    updateCarousel(currentIndex);
}

document.querySelector('.carousel').addEventListener('click', changeImage);

updateCarousel(currentIndex);
