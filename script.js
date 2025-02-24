// Переключение темы
document.getElementById('change-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Карусель изображений
const images = document.querySelectorAll('.carousel img');
let currentIndex = 0;
const dots = document.querySelectorAll('.carousel-dots .dot');

// Обновление карусели
function updateCarousel(index) {
    images.forEach(img => img.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    images[index].classList.add('active');
    dots[index].classList.add('active');
}

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

// Добавляем обработчик для клика по карусели
document.querySelector('.carousel').addEventListener('click', changeImage);

// Обработчик для переключения по точкам
dots.forEach(dot => {
    dot.addEventListener('click', function() {
        currentIndex = parseInt(this.dataset.index);
        updateCarousel(currentIndex);
    });
});

// Инициализация карусели с начальным изображением
updateCarousel(currentIndex);
