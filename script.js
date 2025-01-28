// Initialize Email.js with your Public Key
emailjs.init("cJ_0-e6dYlW7YAaNe"); // Replace with your Email.js public key

function sendmail() {
  // Collect form input values
  var parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  // Email.js Service and Template IDs
  const serviceID = "service_y83h4ma";
  const templateID = "template_ppm9m8d";

  // Sending the email
  emailjs
    .send(serviceID, templateID, parms)
    .then((res) => {
      // Clear the form fields after successful submission
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
      
      console.log("Email sent successfully:", res.status, res.text);
      alert("Your message has been sent successfully!");
    })
    .catch((err) => {
      console.error("Error sending email:", err);
      alert("Failed to send your message. Please try again.");
    });
}
