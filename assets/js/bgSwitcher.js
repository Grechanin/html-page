$(document).ready(function() {
  $(document).scroll(function() {
    if ($(document).scrollTop() < $(window).height()) {
    $('#outer-background-image').css({'background-image': 'url(assets/img/bg01.jpg)', 'transition': '1s'});
 }
    else if ($(document).scrollTop() == $(document).height() - $(window).height()) {
    $('#outer-background-image').css({'background-image': 'url(assets/img/bg04.jpg)', 'transition': '1s',});
 }
    else if ($(document).scrollTop() > $(window).height() * 2 - '200') {
    $('#outer-background-image').css({'background-image': 'url(assets/img/bg03.jpg)', 'transition': '1s'});
 }
    else if ($(document).scrollTop() > $(window).height() - '200') {
    $('#outer-background-image').css({'background-image': 'url(assets/img/bg02.jpg)', 'transition': '1s'});
 }

  });
});