document.addEventListener('DOMContentLoaded', function () {
    var dropdown = document.querySelector('.custom-dropdown');
    var dropdownInput = document.getElementById('dropdownInput');
    var dropdownList = document.getElementById('dropdownList');
    var dropdownItems = document.querySelectorAll('.dropdown-list-item');
    var dropdownIcon = document.getElementById('dropdownIcon');

    dropdown.addEventListener('click', function () {
        var isOpen = dropdownList.style.display === 'block';
        dropdownList.style.display = isOpen ? 'none' : 'block';
        dropdownIcon.classList.toggle('rotate', !isOpen);
    });

    dropdownItems.forEach(function (item) {
        item.addEventListener('click', function () {
            dropdownInput.value = item.textContent;
            dropdownList.style.display = 'none';
            dropdownIcon.classList.remove('rotate');
        });
    });

    document.addEventListener('click', function (event) {
        if (!dropdown.contains(event.target)) {
            dropdownList.style.display = 'none';
            dropdownIcon.classList.remove('rotate');
        }
    });
});