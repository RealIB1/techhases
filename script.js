$(document).ready(function() {
  $(".msgs").hide();
  $(".submit-msg-btn").click(function() {
    $(".msg-contents")
      .transition({
        animation: "fade down",
        duration: 500
      })
      .transition({
        animation: "fly left",
        interval: 5000,
        duration: 3000
      });
  });
});
