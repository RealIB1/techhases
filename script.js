$(document).ready(function() {
  $(".msg-contents").hide();
  $("#from_submit").click(function() {
  $(".contact__form").submit(function() {
    $(".msg-contents")
    .transition({
      animation: "fade down",
      interval: 5000,
      duration: 3000
    })
      .transition({
        animation: "fly left",
        interval: 5000,
        duration: 3000
      }).show();
  });
});
});
