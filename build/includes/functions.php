<?php
// Functions

/*----------------[ functions ]----------------*/

function phpRender($url){
  ob_start();
  include($url);
  $return = ob_get_contents();
  ob_end_clean();
  return $return;
}
