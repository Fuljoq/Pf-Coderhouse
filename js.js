document.addEventListener('DOMContentLoaded', () => {
    let index = 0;
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    function showNextImage() {
        items[index].classList.remove('active');
        index = (index + 1) % totalItems;
        items[index].classList.add('active');
    }

    setInterval(showNextImage, 150);
});