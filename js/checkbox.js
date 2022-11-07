//-----checked/unchecked all checkbox
const checkboxes = document.querySelectorAll("input[type= 'checkbox' ]");

function checkAll(myCheckbox) {
  if (myCheckbox.checked == true) {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = true;
    });
  }
  else {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    })
  }
}

