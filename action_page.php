<!----script for contact 
	<script>
    function sendMessage() {
        // Assuming you'd send the form data to a server using AJAX.
        // For simplicity, let's just show the confirmation message here.

        // Get form data
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var subject = document.getElementById("subject").value;
        var message = document.getElementById("message").value;

        // Validate form data if needed

        // Display confirmation message
        document.getElementById("confirmationMessage").style.display = "block";

        // You can add AJAX code here to send the form data to a server
    }
</script>
