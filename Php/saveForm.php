<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost";
$username = "admin";
$password = "admin";
$dbname = "myqwerty";

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "CREATE DATABASE IF NOT EXISTS $dbname";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully";
} else {
    echo "Error creating database: " . $conn->error;
}

if (!$conn->select_db($dbname)) {
    die("Database selection failed: " . $conn->error);
}

// SQL statement to create table

// Create table if not exists
$sql = "CREATE TABLE IF NOT EXISTS contactus (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    firstname VARCHAR(30) NOT NULL,
    lastname VARCHAR(30) NOT NULL,
    email VARCHAR(50) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    message TEXT NOT NULL
)";

if ($conn->query($sql) === FALSE) {
    echo "Error creating table: " . $conn->error;
}

// Insert data into table
$firstname = $_POST['fname'];
$lastname = $_POST['lname'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$sql = "INSERT INTO contactus (firstname, lastname, email, phone, message)
VALUES ('$firstname', '$lastname', '$email', '$phone', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>
