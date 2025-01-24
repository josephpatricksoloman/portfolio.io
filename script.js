function sendmail() {
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value
    }
    emailjs.send('', '', parms).then(alert("Email sent successfully!"));

}
// functions needs to be called in the upcomming release 
<script>
  // Initialize EmailJS with your user ID
  emailjs.init("your_user_id");  // Replace "your_user_id" with your actual EmailJS user ID

  // Listen for form submission
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the default form submission

    // Collect form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Send email
    emailjs.sendForm('your_service_id', 'your_template_id', this)
      .then(function(response) {
        // Show success message
        document.getElementById('response').innerText = 'Message sent successfully!';
      }, function(error) {
        // Show error message
        document.getElementById('response').innerText = 'Failed to send message. Please try again.';
      });
  });
</script>

