<?php
$name = $_POST['name'];
$ID = $_POST['ID'];
$password=$_POST['password'];
$email=$_POST['email'];
$phonenumber=$_POST['phone'];
$sex=$_POST['sex'];
$nationality=$_POST['nationality'];
$date=$_POST['date'];
$mistery_question=$_POST['mistery_question'];
$reply=$_POST['reply'];

echo "<strong>$name</strong> 様、ご登録ありがとうございました。";
echo "<h3>確認メールをお送り致しました。確認した上、会員登録を完了してください。</h3>";
echo '------------------------------------------------------------------------------------------------------------------------------------------------';
echo "<br>";
echo "Thank you for your registration <strong>$name</strong>";
echo "<h3>Please confirm your registration!</h3>
Your information has been sent successfully. In order to complete your registration, please click the confirmation link in the email that we have sent to you.";


?>