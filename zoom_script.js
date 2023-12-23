    // Получаем элемент, который будет масштабироваться
    var zoomElement = document.body;
  
    // Устанавливаем начальный масштаб
    var scale = 1.0;
  
    // Обработчик события прокрутки колеса мыши
    function handleWheel(event) {
      // Определяем направление прокрутки
      var delta = event.deltaY || event.detail || event.wheelDelta;
  
      // Рассчитываем новый масштаб
      if (delta > 0) {
        // Прокрутка вниз, уменьшаем масштаб
        scale -= 0.1;
      } else {
        // Прокрутка вверх, увеличиваем масштаб
        scale += 0.1;
      }
  
      // Ограничиваем масштабирование
      scale = Math.min(Math.max(0.5, scale), 3.0);
  
      // Применяем масштаб
      zoomElement.style.transform = 'scale(' + scale + ')';
    }
  
    // Добавляем обработчик события прокрутки колеса мыши
    if (zoomElement.addEventListener) {
      // Современные браузеры
      zoomElement.addEventListener('wheel', handleWheel);
    } else {
      // Старые версии браузеров
      zoomElement.onmousewheel = handleWheel;
    }