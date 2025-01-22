<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate user inputs
    $name = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }

    // Set your receiving email address
    $to = "joeboy.patrick@gmail.com"; // Replace with your email

    // Set email subject and body
    $email_subject = "Contact Form: " . $subject;
    $email_body = "From: $name\nEmail: $email\nMessage:\n$message";

    // Set the headers
    $headers = "From: $email";

    // Send the email
    if (mail($to, $email_subject, $email_body, $headers)) {
        // If the mail is sent successfully
        echo "Message sent successfully!";
    } else {
        // If there was an error sending the mail
        echo "Error sending the message. Please try again.";
    }
} else {
    // If the form was not submitted via POST
    echo "Invalid form submission.";
}
?>
