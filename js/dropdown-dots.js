document.querySelectorAll('.dropdown-dots').forEach((dropDownWrapper) => {
  const dropDownBtn = dropDownWrapper.querySelector('.dropdown-dots__btn');
  const dropDownList = dropDownWrapper.querySelector('.dropdown-dots__list');
  const dropDownListItems = dropDownList.querySelectorAll('.dropdown-dots__item');
  const dropDownInput = dropDownWrapper.querySelector('.dropdown-dots__input');

  // Клик по кнопке. Открыть/Закрыть select
  dropDownBtn.addEventListener('click', function (e) {
    dropDownList.classList.toggle('dropdown-dots__list--visible');
    this.classList.add('dropdown-dots__btn--active');
  });

  // Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
  dropDownListItems.forEach((listItem) => {
    listItem.addEventListener('click', function (e) {
      e.stopPropagation();
      dropDownBtn.focus();
      dropDownInput.value = this.dataset.value;
      dropDownList.classList.remove('dropdown-dots__list--visible');
    });
  });

  // Клик снаружи дропдауна. Закрыть дропдаун
  document.addEventListener('click', (e) => {
    if (e.target !== dropDownBtn) {
      dropDownBtn.classList.remove('dropdown-dots__btn--active');
      dropDownList.classList.remove('dropdown-dots__list--visible');
    }
  });

  // Нажатие на Tab или Escape. Закрыть дропдаун
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' || e.key === 'Escape') {
      dropDownBtn.classList.remove('dropdown-dots__btn--active');
      dropDownList.classList.remove('dropdown-dots__list--visible');
    }
  });
});