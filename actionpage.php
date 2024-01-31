<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Perform basic form validation (you might want to add more validation)
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        // Handle validation error
        http_response_code(400); // Bad Request
        echo json_encode(array('error' => 'All fields are required.'));
        exit();
    }

    // Process the form data (you might want to do more here, e.g., send an email)
    // For simplicity, we'll just return a success message
    http_response_code(200); // OK
    echo json_encode(array('message' => 'Your message has been sent. Thank you!'));
    exit();
} else {
    // If the request method is not POST, handle it accordingly
    http_response_code(405); // Method Not Allowed
    echo json_encode(array('error' => 'Method Not Allowed'));
    exit();
}
?>
