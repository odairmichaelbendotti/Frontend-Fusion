document.addEventListener('DOMContentLoaded', function() {
  var dropdowns = document.getElementsByClassName('dropbtn');
  for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener('click', function() {
      var dropdownContent = this.nextElementSibling;
      if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
      } else {
        dropdownContent.style.display = 'block';
      }
      var otherDropdowns = document.querySelectorAll('.dropdown-content');
      for (var j = 0; j < otherDropdowns.length; j++) {
        if (otherDropdowns[j] !== dropdownContent) {
          otherDropdowns[j].style.display = 'none';
        }
      }
    });
  }
  document.addEventListener('click', function(e) {
    if (!e.target.matches('.dropbtn')) {
      var openDropdowns = document.getElementsByClassName('dropdown-content');
      for (var i = 0; i < openDropdowns.length; i++) {
        openDropdowns[i].style.display = 'none';
      }
    }
  });
});
