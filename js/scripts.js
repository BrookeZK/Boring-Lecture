$(document).ready(function() {
  $(".this").click(function() {
    $(".pOne").toggleClass("highlight");
  });
  $(".that").click(function() {
    $(".pTwo").toggleClass("highlight1");
  });
  $(".theOther").click(function() {
    $(".pThree").toggleClass("highlight2");
  });
});
