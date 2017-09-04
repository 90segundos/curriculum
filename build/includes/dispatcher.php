<?php
// Dispatcher

/*----------------[ includes ]----------------*/

require_once 'functions.php';

/*----------------[ variables ]----------------*/

$page_folder_url = '../pages/';

$response = array(
  'html'  => false,
  'title' => false,
  'error' => false
);

// validation
if(!isset($_POST) && empty($_POST)){
  $response['error'] = $_SERVER['PHP_SELF'].': No se han recibido datos.';
  exit();
}
// validate page
if(!isset($_POST['requestUrl']) && empty($_POST['requestUrl'])){
  $response['error'] = $_SERVER['PHP_SELF'].': No se ha especificado la página requerida.';
  exit();
}

// compose filename
$filename = $_POST['requestUrl'].'.html';

// Check existance
if(!file_exists($page_folder_url.$filename)){
  $response['error'] = $_SERVER['PHP_SELF'].': La página solicitada no existe: '.$page_folder_url.$filename ;
  exit();
}else{
  $response['html'] = phpRender($page_folder_url.$filename);
  $response['title'] = $_POST['requestUrl'].' | Alejandro Sotoca Pinilla';
}

// Send response
echo json_encode($response);
