<?php
// Namespace
use PHPMailer\PHPMailer\PHPMailer;

// init
require '../vendor/autoload.php';

// get data
/*
if(!isset $_POST || empty($_POST)) {
  header('Location: /contacto');
}
*/

// debug
$_POST = [
  'name'    => 'Alex',
  'surname' => 'Sotoca',
  'email'   => 'a.sotoca.pinilla@gmail.com',
  'phone'   => '656055324';
  'message' => 'Hola';
]

$sender = array();
$sender['name'] = $_POST['name'];
$sender['surname'] = $_POST['surname'];
$sender['email'] = $_POST['email'];
$sender['phone'] = $_POST['phone'];
$sender['message'] = $_POST['message'];

$message = '<h1>Mensaje recibido desde la web</h1><br>';
$message .= 'Remitente: '.$sender['name'].' '.$sender['surname'].'<br>';
$message .= 'Email: <a href="mailto:'.$sender['email'].'">'.$sender['email'].'</a><br>';
$message .= 'Teléfono: <a href="tel:+34'.$sender['phone'].'">'.$sender['phone'].'</a><br>';
$message .= '<br>Mensaje: <br>';
$message .= $sender['message'];


// New instance
$mailer = new PHPMailer;

// Config
$mailer->setFrom('info@zumodelima.com', 'Alejandro Sotoca');
$mailer->addReplyTo('info@zumodelima.com', 'Alejandro Sotoca');
$mailer->addAddress('a.sotoca.pinilla@gmail.com', 'Alejandro Sotoca');
$mailer->Subject = 'Contacto desde la zumodelima.com - '.$sender['name'].' '.$sender['surname'];

// Message
$mail->msgHTML($message);

// Json ajax response
$response = array();

// Send
if ( !$mailer->send() ) {
  $success = false;
  $error = "Mailer Error: " . $mailer->ErrorInfo;
} else {
  $success = true;
  $error = false;
}

$response = [
  'success' => $sucess,
  'error'   => $error;
];
// Send response to client
echo json_encode($response);
