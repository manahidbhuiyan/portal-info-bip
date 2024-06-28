// JavaScript to add box shadow on scroll
const container = document.getElementById('scroll-container');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    container.classList.add('box-shadow-on-scroll');
  } else {
    container.classList.remove('box-shadow-on-scroll');
  }
});


document.addEventListener('DOMContentLoaded', function () {
  var dropdownButton = document.getElementById('dropdownMenuButton');
  var dropdownIcon = document.getElementById('dropdownIcon');

  dropdownButton.addEventListener('click', function () {
      dropdownIcon.classList.toggle('rotate');
  });
});

document.addEventListener('DOMContentLoaded', function () {
//   document.getElementById('countrySelect').addEventListener('change', function() {
//     const selectedOption = this.options[this.selectedIndex];
//     const countryName = selectedOption.text;
//     const countryFlag = selectedOption.getAttribute('data-flag');

//     const flagElement = document.getElementById('countryFlag');
//     const nameElement = document.getElementById('countryName');
//     const displayElement = document.getElementById('countryDisplay');

//     if (countryFlag) {
//         flagElement.src = countryFlag;
//         displayElement.style.display = 'flex';
//     } else {
//         displayElement.style.display = 'none';
//     }

//     nameElement.textContent = countryName;
// });
});