<?php
// Functions

/*----------------[ functions ]----------------*/

function phpRender($url){
  ob_start();
  require($url);
  $return = ob_get_contents();
  ob_end_flush();
  return $return;
}
