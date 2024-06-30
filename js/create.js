// first dropdown for charecter

document.addEventListener('DOMContentLoaded', function () {
  var dropdownChar = document.getElementById('custom-dropdown-char');
  var dropdownInputChar = document.getElementById('dropdownInput-char');
  var dropdownListChar = document.getElementById('dropdownList-char');
  var dropdownItemsChar = document.querySelectorAll('.dls-char');
  var dropdownIconChar = document.getElementById('dropdownIcon-char');

  dropdownChar.addEventListener('click', function () {
    var isOpen = dropdownListChar.style.display === 'block';
    dropdownListChar.style.display = isOpen ? 'none' : 'block';
    dropdownIconChar.classList.toggle('rotate', !isOpen);
  });

  dropdownItemsChar.forEach(function (item) {
    item.addEventListener('click', function () {
      dropdownInputChar.value = item.textContent;
      dropdownListChar.style.display = 'none';
      dropdownIconChar.classList.remove('rotate');
    });
  });

  document.addEventListener('click', function (event) {
    if (!dropdownChar.contains(event.target)) {
      dropdownListChar.style.display = 'none';
      dropdownIconChar.classList.remove('rotate');
    }
  });
});

// first dropdown for time zone

document.addEventListener('DOMContentLoaded', function () {
  var dropdownTimeZone = document.getElementById('custom-dropdown-time');
  var dropdownInputTimeZone = document.getElementById('dropdownInput-time');
  var dropdownListTimeZone = document.getElementById('dropdownList-time');
  var dropdownItemsTimeZone = document.querySelectorAll('.dls-time');
  var dropdownIconTimeZone = document.getElementById('dropdownIcon-time');

  dropdownTimeZone.addEventListener('click', function () {
    var isOpen = dropdownListTimeZone.style.display === 'block';
    dropdownListTimeZone.style.display = isOpen ? 'none' : 'block';
    dropdownIconTimeZone.classList.toggle('rotate', !isOpen);
  });

  dropdownItemsTimeZone.forEach(function (item) {
    item.addEventListener('click', function () {
      dropdownInputTimeZone.value = item.textContent;
      dropdownListTimeZone.style.display = 'none';
      dropdownInputTimeZone.classList.remove('rotate');
    });
  });

  document.addEventListener('click', function (event) {
    if (!dropdownTimeZone.contains(event.target)) {
      dropdownListTimeZone.style.display = 'none';
      dropdownIconTimeZone.classList.remove('rotate');
    }
  });
});

// dropdown for Speed Unit

document.addEventListener('DOMContentLoaded', function () {
  var dropdownTimeUnit = document.getElementById('custom-dropdown-timeUnit');
  var dropdownInputTimeUnit = document.getElementById('dropdownInput-timeUnit');
  var dropdownListTimeUnit = document.getElementById('dropdownList-timeUnit');
  var dropdownItemsTimeUnit = document.querySelectorAll('.dls-timeUnit');
  var dropdownIconTimeUnit = document.getElementById('dropdownIcon-timeUnit');

  dropdownTimeUnit.addEventListener('click', function () {
    var isOpen = dropdownListTimeUnit.style.display === 'block';
    dropdownListTimeUnit.style.display = isOpen ? 'none' : 'block';
    dropdownIconTimeUnit.classList.toggle('rotate', !isOpen);
  });

  dropdownItemsTimeUnit.forEach(function (item) {
    item.addEventListener('click', function () {
      dropdownInputTimeUnit.value = item.textContent;
      dropdownListTimeUnit.style.display = 'none';
      dropdownInputTimeUnit.classList.remove('rotate');
    });
  });

  document.addEventListener('click', function (event) {
    if (!dropdownTimeUnit.contains(event.target)) {
      dropdownListTimeUnit.style.display = 'none';
      dropdownIconTimeUnit.classList.remove('rotate');
    }
  });
});

// dropdown for Days

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
  var dropdownInputDataPay = document.querySelector('#dropdownInput-dataPay input');
  var dropdownListDataPay = document.getElementById('dropdownList-dataPay');
  var dropdownIconPay = document.getElementById('dropdownIcon-dataPay');
  var dropdownInputContainer = document.getElementById('dropdownInput-dataPay');
  var placeholder = dropdownInputDataPay.getAttribute('placeholder');

  function toggleDropdown() {
    dropdownListDataPay.style.display = dropdownListDataPay.style.display === 'block' ? 'none' : 'block';
    dropdownIconPay.classList.toggle('rotate');
  }

  dropdownInputDataPay.addEventListener('click', toggleDropdown);
  dropdownIconPay.addEventListener('click', toggleDropdown);

  function updatePlaceholderVisibility() {
    var selectedItems = dropdownInputContainer.querySelectorAll('.selected-item');
    if (selectedItems.length > 0) {
      dropdownInputDataPay.placeholder = '';
    } else {
      dropdownInputDataPay.placeholder = placeholder;
    }
  }

  document.querySelectorAll('.dropdown-list-item-dataPay input[type="checkbox"]').forEach(function (checkbox) {
    checkbox.addEventListener('change', function () {
      var value = checkbox.getAttribute('data-value');
      var isChecked = checkbox.checked;

      if (isChecked) {
        var span = document.createElement('span');
        span.classList.add('selected-item');
        span.setAttribute('data-value', value);
        span.innerHTML = `${value} <span class="remove">✖</span>`;

        span.querySelector('.remove').addEventListener('click', function () {
          span.remove();
          checkbox.checked = false;
          updatePlaceholderVisibility();
        });

        dropdownInputContainer.insertBefore(span, dropdownInputDataPay);
      } else {
        var existingItem = dropdownInputContainer.querySelector(`.selected-item[data-value="${value}"]`);
        if (existingItem) {
          existingItem.remove();
        }
      }
      updatePlaceholderVisibility();
    });
  });

  document.addEventListener('click', function (event) {
    if (!dropdownInputContainer.contains(event.target) && !dropdownListDataPay.contains(event.target) && !dropdownIconPay.contains(event.target)) {
      dropdownListDataPay.style.display = 'none';
      dropdownIconPay.classList.remove('rotate');
    }
  });
});

// select dropdown for recipients

document.addEventListener('DOMContentLoaded', function () {
  var dropdownInputRecipient = document.querySelector('#dropdownInput-recipient input');
  var dropdownListRecipient = document.getElementById('dropdownList-recipient');
  var dropdownIconRecipient = document.getElementById('dropdownIcon-recipient');
  var dropdownInputContainer = document.getElementById('dropdownInput-recipient');
  var selectedValues = [];

  function updateSelectedItems() {
    // Clear previous selected items
    var selectedItems = dropdownInputContainer.querySelectorAll('.selected-item');
    selectedItems.forEach(function (item) {
      item.remove();
    });

    selectedValues.forEach(function (value) {
      var span = document.createElement('span');
      span.textContent = value;
      span.classList.add('selected-item');

      var removeIcon = document.createElement('span');
      removeIcon.textContent = '✖';
      removeIcon.classList.add('remove');
      removeIcon.addEventListener('click', function (e) {
        e.stopPropagation();
        selectedValues = selectedValues.filter(function (val) {
          return val !== value;
        });
        updateSelectedItems();
      });

      span.appendChild(removeIcon);
      dropdownInputContainer.insertBefore(span, dropdownInputRecipient);
    });

    dropdownInputRecipient.placeholder = selectedValues.length === 0 ? 'Type or select recipients name' : '';
  }

  function toggleDropdown() {
    dropdownListRecipient.style.display = dropdownListRecipient.style.display === 'block' ? 'none' : 'block';
    dropdownIconRecipient.classList.toggle('rotate');
  }

  dropdownInputRecipient.addEventListener('click', toggleDropdown);
  dropdownIconRecipient.addEventListener('click', toggleDropdown);

  document.querySelectorAll('.dropdown-list-item-recipient').forEach(function (item) {
    item.addEventListener('click', function () {
      var value = item.getAttribute('data-value');
      if (!selectedValues.includes(value)) {
        selectedValues.push(value);
      }
      updateSelectedItems();
      toggleDropdown();
    });
  });

  document.addEventListener('click', function (event) {
    if (!dropdownInputContainer.contains(event.target) && !dropdownListRecipient.contains(event.target) && !dropdownIconRecipient.contains(event.target)) {
      dropdownListRecipient.style.display = 'none';
      dropdownIconRecipient.classList.remove('rotate');
    }
  });

  updateSelectedItems(); // Initialize selected items container
});

// dropdwon for sender
document.addEventListener('DOMContentLoaded', function () {
  var dropdownInputSender = document.querySelector('#dropdownInput-sender input');
  var dropdownListSender = document.getElementById('dropdownList-sender');
  var dropdownIconSender = document.getElementById('dropdownIcon-sender');
  var dropdownInputContainer = document.getElementById('dropdownInput-sender');
  var selectedValues = [];

  function updateSelectedItems() {
    // Clear previous selected items
    var selectedItems = dropdownInputContainer.querySelectorAll('.selected-item');
    selectedItems.forEach(function (item) {
      item.remove();
    });

    selectedValues.forEach(function (value) {
      var span = document.createElement('span');
      span.textContent = value;
      span.classList.add('selected-item');

      var removeIcon = document.createElement('span');
      removeIcon.textContent = '✖';
      removeIcon.classList.add('remove');
      removeIcon.addEventListener('click', function (e) {
        e.stopPropagation();
        selectedValues = selectedValues.filter(function (val) {
          return val !== value;
        });
        updateSelectedItems();
      });

      span.appendChild(removeIcon);
      dropdownInputContainer.insertBefore(span, dropdownInputSender);
    });

    dropdownInputSender.placeholder = selectedValues.length === 0 ? 'Type or select senders name' : '';
  }

  function toggleDropdown() {
    dropdownListSender.style.display = dropdownListSender.style.display === 'block' ? 'none' : 'block';
    dropdownIconSender.classList.toggle('rotate');
  }

  dropdownInputSender.addEventListener('click', toggleDropdown);
  dropdownIconSender.addEventListener('click', toggleDropdown);

  document.querySelectorAll('.dropdown-list-item-sender').forEach(function (item) {
    item.addEventListener('click', function () {
      var value = item.getAttribute('data-value');
      if (!selectedValues.includes(value)) {
        selectedValues.push(value);
      }
      updateSelectedItems();
      toggleDropdown();
    });
  });

  document.addEventListener('click', function (event) {
    if (!dropdownInputContainer.contains(event.target) && !dropdownListSender.contains(event.target) && !dropdownIconSender.contains(event.target)) {
      dropdownListSender.style.display = 'none';
      dropdownIconSender.classList.remove('rotate');
    }
  });

  updateSelectedItems(); // Initialize selected items container
});

function hideDropdownall(event) {

}