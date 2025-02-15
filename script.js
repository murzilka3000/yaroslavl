function toggleAccordion(element) {
  if (!element) return; // Проверяем, передан ли элемент

  const accordionBottom = element.nextElementSibling;
  const button = element.querySelector('.button-acc'); // Находим кнопку внутри текущего accordionTop

  if (!accordionBottom) return; // Проверяем, существует ли нижний блок

  if (accordionBottom.style.display === "none" || !accordionBottom.style.display) {
      accordionBottom.style.display = "flex";
      element.classList.add("accordion-top-active");
      accordionBottom.classList.add("accordion-bottom-active");

      if (button) {
          button.style.transition = "transform 0.3s ease";
          button.style.transform = "rotate(180deg)";
      }
  } else {
      accordionBottom.style.display = "none";
      element.classList.remove("accordion-top-active");
      accordionBottom.classList.remove("accordion-bottom-active");

      if (button) {
          button.style.transition = "transform 0.3s ease";
          button.style.transform = "rotate(0deg)";
      }
  }
}





const tabButtons = document.querySelectorAll('.tab-button');
const tabPanels = document.querySelectorAll('.tab-panel');

function showTab(tabId) {
    if (!tabPanels.length || !tabButtons.length) return; // Проверяем, есть ли элементы

    // Скрываем все панели
    tabPanels.forEach(panel => panel.classList.remove('active'));

    // Убираем класс active со всех кнопок
    tabButtons.forEach(button => button.classList.remove('active'));

    // Находим панель для отображения
    const tabToShow = document.getElementById(tabId);
    if (tabToShow) {
        tabToShow.classList.add('active');
    }

    // Находим кнопку и активируем её
    const buttonToActivate = document.querySelector(`.tab-button[data-tab="${tabId}"]`);
    if (buttonToActivate) {
        buttonToActivate.classList.add('active');
    }
}

// Добавляем обработчики только если есть кнопки
if (tabButtons.length) {
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.dataset.tab;
            if (tabId) showTab(tabId);
        });
    });

    // Показываем первый таб при загрузке страницы
    showTab(tabButtons[0].dataset.tab);
}





const cards = document.querySelectorAll('.card');
const flipButtons = document.querySelectorAll('.flip-button');
const backButtons = document.querySelectorAll('.back-button');

if (cards.length && flipButtons.length && backButtons.length) {
  flipButtons.forEach((flipButton, index) => {
    flipButton.addEventListener('click', () => {
      if (cards[index]) {
        cards[index].classList.add('flipped');
      }
    });
  });

  backButtons.forEach((backButton, index) => {
    backButton.addEventListener('click', () => {
      if (cards[index]) {
        cards[index].classList.remove('flipped');
      }
    });
  });
}






document.addEventListener("DOMContentLoaded", function () {
  const swiperContainer = document.querySelector('.swiper-container-cult');

  if (swiperContainer) { 
    new Swiper(swiperContainer, {
      loop: true,
      slidesPerView: 3.5,
      spaceBetween: 20,
      centeredSlides: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
});



document.addEventListener('DOMContentLoaded', function() {
  function resizeMap() {
      const mapContainer = document.querySelector('.map-container');
      const iframe = document.querySelector('.map-container iframe');

      if (mapContainer && iframe) {
          const width = mapContainer.offsetWidth;
          const height = width / 2;  // Соотношение 1:2
          iframe.style.height = height + 'px';
      }
  }

  // Вызываем resizeMap при загрузке страницы
  resizeMap();

  // Вызываем resizeMap при изменении размера окна
  window.addEventListener('resize', resizeMap);
});



document.addEventListener("DOMContentLoaded", function() {
  const blockHeaders = document.querySelectorAll(".block-header");

  blockHeaders.forEach(header => {
    header.addEventListener("click", function() {
      const item = this.parentNode;
      item.classList.toggle("active");

        // Получаем элемент с иконкой + или -
        const toggleIcon = this.querySelector('.block-sign');

        if (item.classList.contains('active')) {
            toggleIcon.textContent = '-'; // Заменяем на '-' при открытии
        } else {
            toggleIcon.textContent = '+'; // Заменяем на '+' при закрытии
        }
    });
  });
});