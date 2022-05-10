$(document).ready(function(event) {
  $(".msgs").hide();
  $("#from_submit").click(function(event) {
  $(".contact__form").submit(function(event) {
    $(".msgs").show()
    .transition({
      animation: "fade down",
      interval: 5000,
      duration: 3000
    })
      .transition({
        animation: "fly left",
        interval: 5000,
        duration: 3000
      });
      event.preventDefault();
  });
  event.preventDefault();
});
event.preventDefault();
});
