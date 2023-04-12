<?php
$servername = "localhost";
$username = "admin";
$password = "admin";
$dbname = "myDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare the SQL statement
$stmt = $conn->prepare("INSERT INTO contact_form (name, email, phone, message) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $name, $email, $phone, $message);

// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// Execute the SQL statement
if ($stmt->execute() === TRUE) {
    echo "Form data saved successfully";
} else {
    echo "Error: " . $stmt->error;
}

// Close the database connection
$stmt->close();
$conn->close();
?>
