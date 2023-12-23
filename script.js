document.addEventListener('DOMContentLoaded', function() {
  var dropdown = document.getElementById('dropdown');
  var container = document.querySelector('.container');

  dropdown.addEventListener('mouseover', function() {
    dropdown.classList.add('active');
    positionDropdownMenu();
  });

  dropdown.addEventListener('mouseout', function() {
    dropdown.classList.remove('active');
  });

  // Динамическое позиционирование выпадающего меню
  function positionDropdownMenu() {
    var menu = document.querySelector('.dropdown__menu');

    // Позиционирование относительно верхнего края страницы
    menu.style.position = 'absolute';
    menu.style.top = '0';

    // Дополнительные стили
    menu.style.zIndex = '1000'; // Высокий z-index для позиционирования поверх других элементов, тоесть это 3 мерное пространство 
  }
});

////////////////////////////выпадающий навигатор


