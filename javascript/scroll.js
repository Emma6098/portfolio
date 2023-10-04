document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    var scroll = window.pageYOffset || document.documentElement.scrollTop;

    if (scroll >= 200) {
      var masthead = document.getElementById('masthead');
      masthead.classList.add('scrolled');
    } else {
      var masthead = document.getElementById('masthead');
      masthead.classList.remove('scrolled');
    }
  });
});
