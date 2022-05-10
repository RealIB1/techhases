$(document).ready(function() {
  $(".msg-contents").hide();
  $(".contact__form").submit(function() {
    $(".msg-contents")
    .transition({
      animation: "fade down",
      interval: 3000,
      duration: 2000
    })
      .transition({
        animation: "fly left",
        interval: 5000,
        duration: 3000
      }).show();
  });
});
