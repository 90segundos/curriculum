/* ---------------- [ variables ] ---------------- */

var
  main_container = '.c-main-content',
  block = false;

/* ---------------- [ functions ] ---------------- */

// Ajax functions
function loading(active){
  if(active && block){
    console.log('Already loading');
    return false;
  }else if(active && !block){
    console.log('started loading');
    activate('.c-overlay');
    deactivate('.c-main-content');
    block = true;
  }else if(!active){
    console.log('stopped loading');
    deactivate('.c-overlay');
    activate('.c-main-content');
    block = false;
  }
}

function insertHtml(html, target = main_container){
  if(typeof html !== 'undefined') {
    $(target).html(html);
  }
  else {
    console.log('typeof html == '+typeof html);
    return false;
  }
}

function showPage(data){
  loading(true);
  $(main_container).empty();
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
    },
    complete: function(){
      loading(false);
    }
  });
}

function ajaxLinkInit(){
  console.log('ajax links initialized');
  $('[data-link-type=ajax]').on('click', function(event){
    event.preventDefault();
    href = $(this).attr('href');
    var data = {
      requestUrl : href
    }
    console.log('requestUrl: '+data.requestUrl);
    showPage(data);
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

/* ---------------- [ init ] ---------------- */

$(document).ready(function(){
  ajaxLinkInit();
});
