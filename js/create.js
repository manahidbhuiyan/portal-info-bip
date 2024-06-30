// first dropdown for charecter

document.addEventListener('DOMContentLoaded', function () {
  var dropdown1 = document.getElementById('custom-dropdown1');
  var dropdownInput1 = document.getElementById('dropdownInput1');
  var dropdownList1 = document.getElementById('dropdownList1');
  var dropdownItems1 = document.querySelectorAll('.dls-1');
  var dropdownIcon1 = document.getElementById('dropdownIcon1');

  dropdown1.addEventListener('click', function () {
    var isOpen = dropdownList1.style.display === 'block';
    dropdownList1.style.display = isOpen ? 'none' : 'block';
    dropdownIcon1.classList.toggle('rotate', !isOpen);
  });

  dropdownItems1.forEach(function (item) {
    item.addEventListener('click', function () {
      dropdownInput1.value = item.textContent;
      dropdownList1.style.display = 'none';
      dropdownIcon1.classList.remove('rotate');
    });
  });

  document.addEventListener('click', function (event) {
    if (!dropdown1.contains(event.target)) {
      dropdownList1.style.display = 'none';
      dropdownIcon1.classList.remove('rotate');
    }
  });
});

// first dropdown for language

document.addEventListener('DOMContentLoaded', function () {
  var dropdownLanguage = document.getElementById('custom-dropdown-time');
  var dropdownInputLanguage = document.getElementById('dropdownInput-time');
  var dropdownListLanguage = document.getElementById('dropdownList-time');
  var dropdownItemsLanguage = document.querySelectorAll('.dls-l');
  var dropdownIconLanguage = document.getElementById('dropdownIcon-time');

  dropdownLanguage.addEventListener('click', function () {
    var isOpen = dropdownListLanguage.style.display === 'block';
    dropdownListLanguage.style.display = isOpen ? 'none' : 'block';
    dropdownIconLanguage.classList.toggle('rotate', !isOpen);
  });

  dropdownItemsLanguage.forEach(function (item) {
    item.addEventListener('click', function () {
      dropdownInputLanguage.value = item.textContent;
      dropdownListLanguage.style.display = 'none';
      dropdownInputLanguage.classList.remove('rotate');
    });
  });

  document.addEventListener('click', function (event) {
    if (!dropdownLanguage.contains(event.target)) {
      dropdownListLanguage.style.display = 'none';
      dropdownIconLanguage.classList.remove('rotate');
    }
  });
});

// first dropdown for Speed Unit

document.addEventListener('DOMContentLoaded', function () {
  var dropdown11 = document.getElementById('custom-dropdown11');
  var dropdownInput3 = document.getElementById('dropdownInput3');
  var dropdownList2 = document.getElementById('dropdownList3');
  var dropdownItems2 = document.querySelectorAll('.dls-2');
  var dropdownIcon11 = document.getElementById('dropdownIcon11');

  dropdown11.addEventListener('click', function () {
    var isOpen = dropdownList2.style.display === 'block';
    dropdownList2.style.display = isOpen ? 'none' : 'block';
    dropdownIcon11.classList.toggle('rotate', !isOpen);
  });

  dropdownItems2.forEach(function (item) {
    item.addEventListener('click', function () {
      dropdownInput3.value = item.textContent;
      dropdownList2.style.display = 'none';
      dropdownInput3.classList.remove('rotate');
    });
  });

  document.addEventListener('click', function (event) {
    if (!dropdown11.contains(event.target)) {
      dropdownList2.style.display = 'none';
      dropdownIcon11.classList.remove('rotate');
    }
  });
});

// dropdown for Days

// document.addEventListener('DOMContentLoaded', function () {
//   var dropdownDay = document.getElementById('custom-dropdown-day');
//   var dropdownInputDay = document.getElementById('dropdownInput-day');
//   var dropdownListDay = document.getElementById('dropdownList-day');
//   var dropdownItemsDay = document.querySelectorAll('.dls-3');
//   var dropdownIconDay = document.getElementById('dropdownIcon-day');

//   dropdownDay.addEventListener('click', function () {
//     var isOpen = dropdownListDay.style.display === 'block';
//     dropdownListDay.style.display = isOpen ? 'none' : 'block';
//     dropdownIconDay.classList.toggle('rotate', !isOpen);
//   });

//   dropdownItemsDay.forEach(function (item) {
//     item.addEventListener('click', function () {
//       dropdownInputDay.value = item.textContent;
//       dropdownListDay.style.display = 'none';
//       dropdownInputDay.classList.remove('rotate');
//     });
//   });

//   document.addEventListener('click', function (event) {
//     if (!dropdownDay.contains(event.target)) {
//       dropdownListDay.style.display = 'none';
//       dropdownIconDay.classList.remove('rotate');
//     }
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  const dropdownDay = document.getElementById('custom-dropdown-day');
  const inputDay = document.getElementById('dropdownInput-day');
  const dropdownListDay = document.getElementById('dropdownList-day');
  const dropdownIconDay = document.getElementById('dropdownIcon-day');
  const selectAllCheckboxDay = document.getElementById('select-all-days');
  const checkboxesDay = document.querySelectorAll('.dropdown-checkbox-day');

  // Toggle dropdown list
  dropdownDay.addEventListener('click', function () {
    dropdownListDay.style.display = dropdownListDay.style.display === 'block' ? 'none' : 'block';
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', function (e) {
    if (!dropdownDay.contains(e.target)) {
      dropdownListDay.style.display = 'none';
    }
  });

  // Handle selection
  dropdownListDay.addEventListener('click', function (e) {
    if (e.target.classList.contains('dropdown-list-item')) {
      const value = e.target.getAttribute('data-value');
      addSelectedItem(value);
    }
  });

  // Handle "Select All" functionality
  selectAllCheckboxDay.addEventListener('change', function () {
    checkboxesDay.forEach(checkbox => {
      checkbox.checked = selectAllCheckboxDay.checked;
      if (selectAllCheckboxDay.checked) {
        addSelectedItem(checkbox.value);
      } else {
        removeSelectedItem(checkbox.value);
      }
    });
    updatePlaceholder();
  });



  // Handle individual selection
  checkboxesDay.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
      handleCheckboxChange(checkbox);
    });
    checkbox.nextElementSibling.addEventListener('click', function () {
      checkbox.checked = !checkbox.checked;
      handleCheckboxChange(checkbox);
    });
  });

  // Handle checkbox change
  function handleCheckboxChange(checkbox) {
    if (checkbox.checked) {
      addSelectedItem(checkbox.value);
    } else {
      removeSelectedItem(checkbox.value);
      // Uncheck "Select All" if any individual item is deselected
      selectAllCheckboxDay.checked = false;
    }
    updatePlaceholder();
  }

  // Add selected item
  function addSelectedItem(value) {
    // Check if the item is already selected
    const existingItems = document.querySelectorAll('.selected-item');
    for (const item of existingItems) {
      if (item.textContent.trim() === value) {
        return; // Item already selected, do nothing
      }
    }

    const selectedItem = document.createElement('span');
    selectedItem.classList.add('selected-item');
    selectedItem.innerText = value;

    const removeIcon = document.createElement('span');
    removeIcon.classList.add('remove');
    removeIcon.innerText = ' x';
    removeIcon.addEventListener('click', function () {
      selectedItem.remove();
      removeCheckbox(value);
      updatePlaceholder();
    });

    selectedItem.appendChild(removeIcon);
    inputDay.parentNode.insertBefore(selectedItem, inputDay);
  }

  // Remove selected item
  function removeSelectedItem(value) {
    const selectedItems = document.querySelectorAll('.selected-item');
    for (const item of selectedItems) {
      if (item.textContent.trim() === value) {
        item.remove();
      }
    }
  }

  // Remove checkbox selection
  function removeCheckbox(value) {
    checkboxesDay.forEach(checkbox => {
      if (checkbox.value === value) {
        checkbox.checked = false;
        removeSelectedItem(value)
      }
    });
    // Uncheck "Select All" if any individual item is deselected
    selectAllCheckboxDay.checked = false;
  }

  // Update placeholder based on selected items
  function updatePlaceholder() {
    const selectedItems = document.querySelectorAll('.selected-item');
    if (selectedItems.length === 0) {
      inputDay.setAttribute('placeholder', "Select days");
      inputDay.removeAttribute('placeholder');
      inputDay.classList.remove('hide-input');
    } else {
      inputDay.removeAttribute('placeholder');
      inputDay.removeAttribute('data-placeholder'); 

      // Clear input field
      inputDay.value = '';
      inputDay.classList.add('hide-input'); // Hide input field when item is selected
    }
  }
});


// time picker
document.addEventListener("DOMContentLoaded", function () {
  const timePickerInput1 = document.getElementById("timePickerInput1");
  const timePickerInput2 = document.getElementById("timePickerInput2");
  const timePickerInput3 = document.getElementById("timePickerInput3");

  const timeDropdown1 = document.getElementById("timeDropdown1");
  const timeDropdown2 = document.getElementById("timeDropdown2");
  const timeDropdown3 = document.getElementById("timeDropdown3");

  const dropdownIcon1 = document.querySelector(".dropdown-icon1");
  const dropdownIcon2 = document.querySelector(".dropdown-icon2");
  const dropdownIcon3 = document.querySelector(".dropdown-icon3");

  function toggleDropdown1() {
    timeDropdown1.classList.toggle("show");
  }
  function toggleDropdown2() {
    timeDropdown2.classList.toggle("show");
  }
  function toggleDropdown3() {
    timeDropdown3.classList.toggle("show");
  }

  function hideDropdown(event) {
    if (!timePickerInput1.contains(event.target) && !timeDropdown1.contains(event.target) && !dropdownIcon1.contains(event.target)) {
      timeDropdown1.classList.remove("show");
    }
    if (!timePickerInput2.contains(event.target) && !timeDropdown2.contains(event.target) && !dropdownIcon2.contains(event.target)) {
      timeDropdown2.classList.remove("show");
    }
    if (!timePickerInput3.contains(event.target) && !timeDropdown3.contains(event.target) && !dropdownIcon3.contains(event.target)) {
      timeDropdown3.classList.remove("show");
    }
  }

  document.querySelectorAll("#timeDropdown1 .dropdown-item").forEach(item => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      timePickerInput1.value = this.textContent;
      timeDropdown1.classList.remove("show");
    });
  });
  document.querySelectorAll("#timeDropdown2 .dropdown-item").forEach(item => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      timePickerInput2.value = this.textContent;
      timeDropdown2.classList.remove("show");
    });
  });
  document.querySelectorAll("#timeDropdown3 .dropdown-item").forEach(item => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      timePickerInput3.value = this.textContent;
      timeDropdown3.classList.remove("show");
    });
  });

  timePickerInput1.addEventListener("focus", toggleDropdown1);
  timePickerInput2.addEventListener("focus", toggleDropdown2);
  timePickerInput3.addEventListener("focus", toggleDropdown3);

  dropdownIcon1.addEventListener("click", toggleDropdown1);
  dropdownIcon2.addEventListener("click", toggleDropdown2);
  dropdownIcon3.addEventListener("click", toggleDropdown3);

  document.addEventListener("click", hideDropdown);
});

//data payload

document.addEventListener('DOMContentLoaded', function () {
  var dropdownInputDataPay = document.getElementById('dropdownInput-dataPay');
  var dropdownListDataPay = document.getElementById('dropdownList-dataPay');
  var dropdownIconPay = document.getElementById('dropdownIcon-dataPay');

  dropdownInputDataPay.addEventListener('click', function () {
    dropdownListDataPay.style.display = dropdownListDataPay.style.display === 'block' ? 'none' : 'block';
    dropdownIconPay.classList.toggle('rotate');
  });

  dropdownIconPay.addEventListener('click', function () {
    dropdownListDataPay.style.display = dropdownListDataPay.style.display === 'block' ? 'none' : 'block';
    dropdownIconPay.classList.toggle('rotate');
  });

  document.addEventListener('click', function (event) {
    if (!dropdownInputDataPay.contains(event.target) && !dropdownListDataPay.contains(event.target) && !dropdownIcon.contains(event.target)) {
      dropdownListDataPay.style.display = 'none';
      dropdownIconPay.classList.remove('rotate');
    }
  });
  document.addEventListener("click", hideDropdownall);

});//data payload

document.addEventListener('DOMContentLoaded', function () {
  var dropdownInputrecipient = document.getElementById('dropdownInput-recipient');
  var dropdownListrecipient = document.getElementById('dropdownList-recipient');
  var dropdownIconrecipient = document.getElementById('dropdownIcon-recipient');

  dropdownInputrecipient.addEventListener('click', function () {
    dropdownListrecipient.style.display = dropdownListrecipient.style.display === 'block' ? 'none' : 'block';
    dropdownIconrecipient.classList.toggle('rotate');
  });

  dropdownIconrecipient.addEventListener('click', function () {
    dropdownListrecipient.style.display = dropdownListrecipient.style.display === 'block' ? 'none' : 'block';
    dropdownIconrecipient.classList.toggle('rotate');
  });

  document.addEventListener('click', function (event) {
    if (!dropdownInputrecipient.contains(event.target) && !dropdownListrecipient.contains(event.target) && !dropdownIcon.contains(event.target)) {
      dropdownListrecipient.style.display = 'none';
      dropdownIconrecipient.classList.remove('rotate');
    }
  });
  document.addEventListener("click", hideDropdownall);
});//data payload

document.addEventListener('DOMContentLoaded', function () {
  var dropdownInputsender = document.getElementById('dropdownInput-sender');
  var dropdownListsender = document.getElementById('dropdownList-sender');
  var dropdownIconsender = document.getElementById('dropdownIcon-sender');

  dropdownInputsender.addEventListener('click', function () {
    dropdownListsender.style.display = dropdownListsender.style.display === 'block' ? 'none' : 'block';
    dropdownIconsender.classList.toggle('rotate');
  });

  dropdownIconsender.addEventListener('click', function () {
    dropdownListsender.style.display = dropdownListsender.style.display === 'block' ? 'none' : 'block';
    dropdownIconsender.classList.toggle('rotate');
  });

  document.addEventListener('click', function (event) {
    if (!dropdownInputsender.contains(event.target) && !dropdownListsender.contains(event.target) && !dropdownIcon.contains(event.target)) {
      dropdownListsender.style.display = 'none';
      dropdownIconsender.classList.remove('rotate');
    }
  });
  document.addEventListener("click", hideDropdownall);
});

function hideDropdownall(event) {

}