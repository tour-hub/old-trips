const view = document.getElementById('view');
const viewImg = document.getElementById('viewImg');
const toTop = document.getElementById("toTop");

// Модальное окно (zoom)
document.querySelectorAll('.zoom').forEach(el => {
    el.onclick = (e) => {
        e.preventDefault();
        viewImg.src = el.dataset.src;
        view.showModal();
    };
});

// Закрытие кликом в любой точке
view.onclick = () => view.close();

// Кнопка Наверх (появление при скролле)
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        toTop.classList.add("visible");
    } else {
        toTop.classList.remove("visible");
    }
});

// Плавный возврат наверх
toTop.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
