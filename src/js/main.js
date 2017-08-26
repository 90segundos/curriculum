/* ---------------- [ variables ] ---------------- */

var transition_time = 300;

/* ---------------- [ functions ] ---------------- */

function activate(element){
  if(!element){
    return false;
  }else{
    $(element).addClass('active');
  }
}

function deactivate(element){
  if(!element){
    return false;
  }else{
    $(element).filter('.active').removeClass('active');
  }
}

function toggleActive(element){
  if(!element){
    return false;
  }else if($(element).hasClass('active')){
    deactivate(element);
  }else{
    activate(element);
  }
}

function activateOnReady(){
  $('[data-activate=ready]').addClass('active');
}

function buttonNavInit(){
  var blocked = false;
  $('.c-nav-button').on('click',function(event){
    event.preventDefault();
    if(!blocked){
      blocked = true;
      toggleActive(this);
      setTimeout(function(){
        blocked = false;
      },transition_time);
    }else{
      console.log('blocked');
    }
  });
}

function activateOnClick(trigger, target){
  // home-menu moves up
  $(trigger).on('click', function(event){
    event.preventDefault();
    activate(target);
  });

  // display ajax content
}

/* ---------------- [ init ] ---------------- */

$(document).ready(function(){
  activateOnReady();
  buttonNavInit();
});
