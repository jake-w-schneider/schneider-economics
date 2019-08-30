<?php
// define variables and set to empty values
$First = $Last = $Group = $Organization = $Title = $Email = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $First = test_input($_POST["first_name"]);
  $Last = test_input($_POST["last_name"]);
  $Group = test_input($_POST["group"]);
  $Organization = test_input($_POST["organization"]);
  $Title = test_input($_POST["title"]);
  $Email = test_input($_POST["email"]);
}

function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
?>