// Form submission handling (basic example)
// Initialize EmailJS with your Public Key
(function () {
  emailjs.init("fgWMenPiRrlO6u6gt"); // Replace with your EmailJS Public Key
})();

// Wait until DOM loads
document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm(
      "service_fsp8aij",   // Replace with your Service ID
      "template_mfjtt83",  // Replace with your Template ID
      this
    )
    .then(function () {
      alert("Message sent successfully!");
      form.reset();
    })
    .catch(function (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    });
  });

});


  
