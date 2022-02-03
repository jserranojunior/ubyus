<?php
require 'class.phpmailer.php';
require 'class.smtp.php';
require 'class.pop3.php';

$mail = new PHPMailer;
header('Content-Type: application/json');

  $name = $_REQUEST["name"];
  $email = $_REQUEST["email"];
  $message = $_REQUEST["message"];



$mail->isSMTP();                                      
$mail->Host = 'smtp.gmail.com';  
$mail->SMTPAuth = true;                               
$mail->Username = 'ubyusadvisors@gmail.com'; 
$mail->Password = 'kllyoieiorrmyzif'; 
$mail->SMTPSecure = 'ssl'; 
$mail->Port = 465;  

$mail->From = 'ubyusadvisors@gmail.com';
$mail->FromName = 'Ubyus Contato';
$mail->addAddress('contato@ubyusadvisors.com');


$mail->isHTML(true); 

$mail->Subject = 'E-mail enviado pelo site Ubyus';
$mail->Body    = 'Nome: <b>'. $name . '</b><br>' . 'Email: <b>'. $email . '</b><br>' . 'Mensagem: <b>'. $message . '</b><br>' ;

if(!$mail->send()) {
   $errSendMail =  array('err'=>$mail->ErrorInfo);
  echo json_encode($errSendMail);
} else {
    echo 'Message has been sent';
}