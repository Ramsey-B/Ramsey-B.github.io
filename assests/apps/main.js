function Controller() {

  $("#button").click(function () {
    $('html, body').animate({
      scrollTop: $("#myDiv").offset().top
    }, 2000);
  });

  this.scrollPage = function scrollAbout(div, move) {
    $('html, body').animate({
      scrollTop: $("#"+div).offset().top/move
    }, 2000);
  }

  var container = document.getElementById('page');
  $(window).on('load', function () {
    var starfield = new Starfield();
    starfield.initialise(container);
    starfield.stars = 2000;
    starfield.start();
  })
}

