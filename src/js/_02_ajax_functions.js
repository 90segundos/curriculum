/* ---------------- [ variables ] ---------------- */

var default_target = '.c-main-content';

/* ---------------- [ functions ] ---------------- */

// Ajax functions
function insertHtml(html, target = default_target){
  if(typeof html !== 'undefined') {
    $(target).html(html);
  }
  else {
    console.log('typeof html == '+typeof html);
    return false;
  }
}

function showPage(data){
  $.ajax({
    url: 'includes/dispatcher.php',
    method: 'POST',
    data: data,
    dataType: 'json',
    success: function(response){
      insertHtml(response.html);
    },
    error: function(response){
      insertHtml('Error: No se ha podido recuperar el contenido solicitado.');
    }
  });
}


function sendEmail(data){
  $.ajax({
    url: 'includes/email-send.php',
    method: 'POST',
    data: data,
    dataType: json,
    success: function(response){

    },
    error: function(response){

    }
  });
}
