document.addEventListener('DOMContentLoaded', function() {
  var botaoMenu = document.querySelector('.botao-menu');
  var menu = document.querySelector('.menu');

  botaoMenu.addEventListener('click', function() {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  });

  var dropdowns = document.getElementsByClassName('botao-dropdown');
  for (var i = 0; i < dropdowns.length; i++) {
    dropdowns[i].addEventListener('click', function() {
      var conteudoDropdown = this.nextElementSibling;
      if (conteudoDropdown.style.display === 'block') {
        conteudoDropdown.style.display = 'none';
      } else {
        conteudoDropdown.style.display = 'block';
      }

      var outrosDropdowns = document.getElementsByClassName('conteudo-dropdown');
      for (var j = 0; j < outrosDropdowns.length; j++) {
        if (outrosDropdowns[j] !== conteudoDropdown) {
          outrosDropdowns[j].style.display = 'none';
        }
      }
    });
  }

  window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
      menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
  });

  document.addEventListener('click', function(e) {
    if (!e.target.matches('.botao-dropdown') && !e.target.matches('.botao-menu')) {
      var dropdownsAbertos = document.getElementsByClassName('conteudo-dropdown');
      for (var i = 0; i < dropdownsAbertos.length; i++) {
        dropdownsAbertos[i].style.display = 'none';
      }
    }
  }, true);
});
