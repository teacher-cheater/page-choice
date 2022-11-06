const dropDownBtnDots = document.querySelector('.dropdown-dots__btn');
const dropDownDotsList = document.querySelector('.dropdown-dots__list');
const dropDownDotsListItems = dropDownDotsList.querySelectorAll('.dropdown-dots__item');

// Клик по кнопке. Открыть/Закрыть select-dots
dropDownBtnDots.addEventListener('click', function (e) {
  dropDownDotsList.classList.toggle('dropdown-dots__list--visible');
  this.classList.add('dropdown-items__btn--active');
});

// Выбор элемента списка dots. Запомнить выбранное значение. Закрыть дропдаун
dropDownDotsListItems.forEach((listItem) => {
  listItem.addEventListener('click', (e) => {
    e.stopPropagation();
    //dropDownBtnDots.innerText = this.innerText;
    dropDownBtnDots.focus();
    //dropDownInput.value = this.dataset.value;
    dropDownDotsList.classList.remove('dropdown-dots__list--visible');
  });
});