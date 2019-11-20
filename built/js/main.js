'use strict';

window.addEventListener('load', () => {

  // класс для активного/заполненного input
  const inputs = document.querySelectorAll('.form__item_labeled input');
  if (inputs.length) {
    [...inputs].map(input => {
      input.addEventListener('blur', () => {
        const empty = input.value.trim() === '';
        if (!empty) {
          input.parentElement.classList.add('form__item_filled');
        }
        else {
          input.parentElement.classList.remove('form__item_filled');
        }
      });
    });

    [...inputs].map(input => {
      if (input.value.trim() !== '') {
        input.parentElement.classList.add('form__item_filled');
      }
    });
  }

  // range slider
  const rangeSlider = document.getElementById('range-slider');
  if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
      start: [0, 2, 3],
      step: 1,
      snap: true,
      connect: true,
      range: {
        'min': 0,
        '25%': 1,
        '50%': 2,
        'max': 3,
      }
    });

    const rangeInput = document.getElementById('range-value');
    const values = {
      0: 'Не владею',
      1: 'Использую готовые решения',
      2: 'Использую готовые решения и умею переделывать',
      3: 'Пишу сложный JS с нуля',
    };

    rangeSlider.noUiSlider.on('update', (value, handle) => {
      rangeInput.value = values[Number(value[handle])];
    });

    const pins = document.querySelectorAll('.range-slider__pin');
    [...pins].map(pin => {
      pin.addEventListener('click', () => {
        const value = Number(pin.getAttribute('data-slider-value'));
        rangeSlider.noUiSlider.set([0, value, 3]);
      });
    });
  }

  // Плавный скролл
  const links = document.querySelectorAll('.smooth-link');
  if (links.length) {
    [...links].map(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }


  // цвет бургера
  const burger = document.getElementById('header__burger');

  let colorHeader = true;
  const changeBurgerColor = () => {
    if (window.pageYOffset > 50 && colorHeader) {
      burger.classList.add('header__burger_dark');
      colorHeader = false;
    }
    else if (window.pageYOffset < 51 && !colorHeader) {
      burger.classList.remove('header__burger_dark');
      colorHeader = true;
    }
  };
  changeBurgerColor();
  window.addEventListener('scroll', changeBurgerColor);

  burger.addEventListener('click', e => {
    e.preventDefault();
    burger.classList.toggle('header__burger_open');
    burger.nextElementSibling.classList.toggle('active');
  });

});
//# sourceMappingURL=main.js.map
