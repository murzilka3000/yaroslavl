function toggleAccordion(element) {
    const accordionBottom = element.nextElementSibling;
    const accordionTop = element;
    const button = element.querySelector('.button-acc'); // Находим кнопку ТОЛЬКО ВНУТРИ текущего accordionTop

    if (accordionBottom.style.display === "none") {
        accordionBottom.style.display = "flex";
        accordionTop.classList.add("accordion-top-active");
        accordionBottom.classList.add("accordion-bottom-active");

        if (button) { // Проверяем, что кнопка действительно существует
            button.style.transition = "transform 0.3s ease";
            button.style.transform = "rotate(180deg)";
        }
    } else {
        accordionBottom.style.display = "none";
        accordionTop.classList.remove("accordion-top-active");
        accordionBottom.classList.remove("accordion-bottom-active");

        if (button) { // Проверяем, что кнопка действительно существует
            button.style.transition = "transform 0.3s ease";
            button.style.transform = "rotate(0deg)";
        }
    }
}





const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');

function showTab(tabId) {
    // Скрываем все панели
    tabPanels.forEach(panel => panel.classList.remove('active'));

    // Убираем класс active со всех кнопок
    tabButtons.forEach(button => button.classList.remove('active'));

    // Добавляем класс active к нужной панели
    const tabToShow = document.getElementById(tabId);
    tabToShow.classList.add('active');

    // Добавляем класс active к кнопке, которая соответствует этой панели
    const buttonToActivate = document.querySelector(`.tab-button[data-tab="${tabId}"]`);
    buttonToActivate.classList.add('active');
}

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.dataset.tab; // Получаем ID таба из атрибута data-tab
        showTab(tabId);
    });
});

// Показываем первый таб при загрузке страницы
showTab('tab1');





const cards = document.querySelectorAll('.card');
const flipButtons = document.querySelectorAll('.flip-button');
const backButtons = document.querySelectorAll('.back-button');

flipButtons.forEach((flipButton, index) => {
  flipButton.addEventListener('click', () => {
    cards[index].classList.add('flipped');
  });
});

backButtons.forEach((backButton, index) => {
  backButton.addEventListener('click', () => {
    cards[index].classList.remove('flipped');
  });
});