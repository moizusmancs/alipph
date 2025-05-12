// Initialize EmailJS with your user ID
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key

$(document).on("pagecreate", "#contact-page", function () {
  $("#contact-form").on("submit", function (e) {
    e.preventDefault();

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      from_name: $("#name").val(),
      reply_to: $("#email").val(),
      message: $("#message").val(),
    })
    .then(function () {
      alert("Message sent successfully!");
      $("#contact-form")[0].reset();
    }, function (error) {
      console.error("Failed to send email:", error);
      alert("Failed to send message. Please try again.");
    });
  });
});
