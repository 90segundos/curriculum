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

function graph_1(){

  var values = [
    70,
    65,
    60,
    70,
    70,
    60
  ]


  var canvas = document.getElementById("canvas-1");

  var grey_path = [];
  var i = 0;
  for (i; i<6; i++) {
    console.log(i);
    grey_path[i] = canvas.getContext("2d");
    grey_path[i].beginPath();
    grey_path[i].arc(125,125,15*(i+2),0,2*Math.PI);
    grey_path[i].lineWidth=1;
    grey_path[i].setLineDash([4,4]);
    grey_path[i].lineColor="#333333";
    grey_path[i].strokeStyle="#333333";
    grey_path[i].lineCap="round";
    grey_path[i].stroke();
  }

  var color_path = [];
  var i = 0;
  for (i; i<6; i++) {
    console.log(i);
    color_path[i] = canvas.getContext("2d");
    color_path[i].beginPath();
    color_path[i].arc(125,125,15*(i+2),0,(values[i]/100)*(2*Math.PI));
    color_path[i].lineWidth=3;
    color_path[i].setLineDash([]);
    color_path[i].lineColor="#b68845";
    color_path[i].strokeStyle="#b68845";
    color_path[i].lineCap="round";
    color_path[i].stroke();
  }
}

/* ---------------- [ init ] ---------------- */

$(document).ready(function(){
  activateOnReady();
  buttonNavInit();
  graph_1();
});
