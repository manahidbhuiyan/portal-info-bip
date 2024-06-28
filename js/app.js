document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('scroll-container');

  window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
          container.classList.add('box-shadow-on-scroll');
          console.log("Box shadow added");
      } else {
          container.classList.remove('box-shadow-on-scroll');
          console.log("Box shadow removed");
      }
  });
});

// dropdown rotate
document.addEventListener('DOMContentLoaded', function () {
  var dropdownButton = document.getElementById('dropdownMenuButton');
  var dropdownIcon = document.getElementById('dropdownIcon');

  dropdownButton.addEventListener('click', function () {
      dropdownIcon.classList.toggle('rotate');
  });
});

